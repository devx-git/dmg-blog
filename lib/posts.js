// lib/posts.js
import { remark } from 'remark';
import html from 'remark-html';

// 1. Estandarizamos la variable de entorno a NEXT_PUBLIC_STRAPI_API_URL
// Esta variable será usada tanto en el build time (getStaticProps/Paths) como en el runtime (cliente)
const STRAPI_API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// NOTA IMPORTANTE: STRAPI_API_TOKEN NO debe ser NEXT_PUBLIC_ si es un secreto
// Los API tokens de Strapi son secretos y no deben exponerse al navegador.
// Si necesitas usar un API Token para getStaticProps/getStaticPaths (server-side/build-time),
// puedes usar process.env.STRAPI_API_TOKEN (sin NEXT_PUBLIC_).
// Este token solo será visible en el servidor/build, no en el código del cliente.
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Función centralizada para hacer llamadas a la API de Strapi
// Esta función ahora puede recibir un token si es necesario para autenticar.
async function fetchAPI(path, urlParamsObject = {}, token = STRAPI_API_TOKEN) {
  const queryString = new URLSearchParams(urlParamsObject).toString();
  const requestUrl = `${STRAPI_API_BASE_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(requestUrl, {
      method: 'GET',
      headers: headers,
    });

    const json = await res.json();

    if (json.errors) {
      console.error('Error de API en Strapi:', json.errors);
      throw new Error(`Error al obtener datos de la API de Strapi: ${json.errors[0]?.message || 'Error desconocido'}`);
    }

    // AQUI ES EL CAMBIO CLAVE: Asegurarse de que json.data siempre sea un array o un objeto
    // Si tu API devuelve { data: null } cuando no hay resultados, asegúrate de devolver un array vacío.
    // Si devuelve { data: [] } cuando no hay resultados, esto ya está bien.
    // Si devuelve un objeto simple (no array) como { data: { id: 1, attributes: {...} } } para getPostData,
    // entonces la lógica de post.map() fallaría si se usa para un solo post.
    
    // Para getAllPostIds, json.data debe ser un array.
    // Para getPostData, json.data será un objeto o null.
    // Asegurémonos de que json.data para listas sea siempre un array para 'map'.
    if (Array.isArray(json.data)) {
        return json.data;
    } else if (json.data === null || json.data === undefined) {
        return []; // Si la API devuelve data:null o data:undefined, devolver un array vacío para evitar map en null
    } else {
        return json.data; // Es un objeto para un solo recurso
    }

  } catch (error) {
    console.error(`Error en fetchAPI para ${requestUrl}:`, error);
    // Para que getStaticPaths/Props no fallen, si el error es de red o API no encontrada,
    // es mejor devolver un array vacío o null.
    // Dependiendo de tu estrategia de manejo de errores.
    // Para este error específico, un TypeError.
    // Si la API no devuelve un array para data, esto causará el error.
    return []; // Devolver un array vacío en caso de error de fetch para listas
  }
}

// Función para obtener todos los posts ordenados (para la página de listado de blog)
export async function getSortedPostsData() {
    // Para getSortedPostsData, si no necesitas todos los campos para el listado, puedes seleccionar solo los necesarios.
    // Esto optimiza la carga de datos.
    // Usamos 'populate=*' para obtener la imagen, autor, etc. si se necesitan en el listado inicial.
    // Opcional: pasar fields=title,date,author para solo esos campos si la imagen no se necesita aquí.
    const data = await fetchAPI('/blogs', { 
        sort: 'date_published:desc', // Asumiendo un campo de fecha 'date_published'
        populate: '*', // O 'populate=main_image' si solo quieres la imagen principal
    });

    // Mapea y procesa los datos para que coincidan con lo que tu frontend espera en el listado
    // Asumo que 'data' es un array de objetos de Strapi como:
    // [{ id: '1', attributes: { title: 'Post A', date_published: '...', content: '...', main_image: { data: { attributes: { url: '...' } } } } }, ...]
    return data.map(post => ({
        id: post.id,
        title: post.attributes.title,
        date: post.attributes.date_published || post.attributes.createdAt,
        author: post.attributes.author_name || 'Anónimo',
        // Asegúrate de que esta URL de imagen se construya correctamente si la necesitas en el listado
        // Si no la necesitas aquí, puedes quitarla.
        // imageUrl: post.attributes.main_image?.data?.attributes?.url ? `${STRAPI_API_BASE_URL}${post.attributes.main_image.data.attributes.url}` : null,
        slug: post.attributes.slug, // Crucial para los links del listado si usas slugs
    }));
}

// Función para obtener todos los IDs de los posts (para getStaticPaths en [id].js)
export async function getAllPostIds() {
    const data = await fetchAPI('/blogs?fields=slug'); // Esta llamada debe devolver un array

    // Asegurarse de que 'data' sea un array antes de intentar 'map'
    if (!Array.isArray(data)) {
        console.error("fetchAPI para getAllPostIds no devolvió un array:", data);
        return []; // Devolver un array vacío para evitar el error de map
    }

    return data.map(post => ({
        params: { id: String(post.attributes.slug) }, // Asegurarse de que post.attributes.slug no sea null/undefined
    }));
}

// Función para obtener los datos de un post específico (para getStaticProps en [id].js)
export async function getPostData(id) {
    const res = await fetchAPI(`/blogs?filters[slug][$eq]=${id}&populate=*`);

    if (!res || res.length === 0) { // Si la respuesta está vacía o no tiene el primer elemento
      console.warn(`No se encontró el post con slug/ID: ${id}`);
      return null; // Devuelve null si no se encuentra el post
    }
    
    const post = res[0]; // Tomamos el primer resultado del array de la API de filtros

    // Resto del procesamiento del post
    const processedContent = await remark().use(html).process(post.attributes.content || '');
    const contentHtml = processedContent.toString();

    return {
      id: post.id,
      title: post.attributes.title,
      date: post.attributes.date_published || post.attributes.createdAt,
      author: post.attributes.author_name || 'Anónimo',
      contentHtml: contentHtml,
      image: post.attributes.main_image || null,
      slug: post.attributes.slug,
    };
  }

// Función para obtener videos de YouTube (si tu API de Strapi tiene un endpoint /videos)
export async function getYouTubeVideos() {
  const data = await fetchAPI('/videos', { sort: 'createdAt:desc' });
  // Puedes procesar y limpiar los datos aquí si es necesario
  return data;
}