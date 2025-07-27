// lib/posts.js
import { remark } from 'remark';
import html from 'remark-html';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(query) {
  const res = await fetch(`${STRAPI_URL}/api${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    },
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API from Strapi');
  }
  return json.data;
}

export async function getSortedPostsData() {
    const data = await fetchAPI('/posts?sort=date:desc&populate=*');
    return data; // Devolvemos los datos crudos para que la página los procese
}

export async function getAllPostIds() {
    const data = await fetchAPI('/posts');
    return data.map(post => ({
      params: { id: String(post.id) },
    }));
}

export async function getPostData(id) {
    const data = await fetchAPI(`/posts/${id}?populate=*`);
    const content = data.attributes.content;
    
    // El Rich Text de Strapi puede ser Markdown. Lo procesamos.
    const processedContent = await remark().use(html).process(content || '');
    
    return {
      id: data.id,
      contentHtml: processedContent.toString(),
      ...data.attributes,
    };
}

// Al final de lib/posts.js
export async function getYouTubeVideos() {
  const data = await fetchAPI('/videos?sort=createdAt:desc');
  return data;
}