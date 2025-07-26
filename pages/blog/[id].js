// pages/blog/[id].js - VERSIÓN CORREGIDA

import Head from 'next/head';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <header className={styles.postHeader}>
          <h1 className={styles.postTitle}>{postData.title}</h1>
          <div className={styles.postMeta}>
            <span>{new Date(postData.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {postData.author && <span> | Por: {postData.author}</span>}
          </div>
        </header>

        {/* --- CORRECCIÓN AQUÍ --- */}
        {postData.image?.data?.attributes?.url && (
          <Image 
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${postData.image.data.attributes.url}`} 
            alt={postData.title} 
            width={800} 
            height={400} 
            className={styles.postImage} 
          />
        )}

        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}