// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, getYouTubeVideos } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const youtubeVideos = await getYouTubeVideos();
  return {
    props: { allPostsData, youtubeVideos },
    revalidate: 10,
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Blog de Digital Market Group</title>
      </Head>
      <section>
        <h1 className={styles.pageTitle}>Nuestro Blog</h1>
        <ul className={styles.postList}>
          {allPostsData.map((post) => (
            <li key={post.id} className={styles.postListItem}>
              {post.attributes.image?.data?.attributes?.url && (
                <Link href={`/blog/${post.id}`}>
                   <Image 
                      src={`${STRAPI_URL}${post.attributes.image.data.attributes.url}`} 
                      alt={post.attributes.title || "Imagen de portada"}
                      width={800} 
                      height={400} 
                      className={styles.postImage} 
                   />
                </Link>
              )}
              <Link href={`/blog/${post.id}`}>
                <h2 className={styles.postTitle}>{post.attributes.title}</h2>
              </Link>
              <div className={styles.postMeta}>
                <span>{new Date(post.attributes.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span> 
                {post.attributes.author && <span> | Por: {post.attributes.author}</span>}
              </div>
              <p className={styles.postExcerpt}>{post.attributes.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}