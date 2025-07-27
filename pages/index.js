// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import VideoCarousel from '@/components/VideoCarousel'; // Importamos el carrusel
import PaymentModal from '@/components/PaymentModal'; // Importamos el modal
import { getYouTubeVideos } from '@/lib/posts';
import styles from '../styles/Home.module.css';
import layoutStyles from '../styles/Layout.module.css';

// Esta función se ejecuta en el servidor antes de cargar la página
export async function getStaticProps() {
  // Pedimos los videos a nuestro CMS (Strapi)
  const youtubeVideos = await getYouTubeVideos();
  return {
    props: {
      youtubeVideos, // Pasamos los videos a la página
    },
    revalidate: 60, // Revisa si hay nuevos videos cada 60 segundos
  };
}

// Definimos los planes
const plans = [
    { name: 'Socio Fundador10', price: 10, days: 365, profit: 100, tokens: 10, featured: false },
    { name: 'Socio Fundador20', price: 20, days: 365, profit: 200, tokens: 20, featured: false },
    { name: 'Socio Fundador50', price: 50, days: 365, profit: 500, tokens: 50, featured: false },
    { name: 'Socio Fundador100', price: 100, days: 365, profit: 1000, tokens: 100, featured: true },
    { name: 'Socio Fundador VIP', price: 500, days: 365, profit: 5000, tokens: 500, featured: false },
    { name: 'Socio Fundador VIP Exclusivo', price: 1000, days: 365, profit: 10000, tokens: 1000, featured: false },
];

// Tus direcciones de pago
const YOUR_WALLET_ADDRESS = "19u3LhQXYg5NRkZMQSedyKA4Fi2oki6fgk";
const USDT_WALLET_ADDRESS = "TGDy2zNnDGPyfuXBLLkqsiA9MqXEAYzCLF";

export default function HomePage({ youtubeVideos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <Head>
        <title>Blog | Digital Market Group (DMG)</title>
        <meta name="description" content="Tu fuente de conocimiento sobre nuestro ecosistema, finanzas descentralizadas y el futuro de la web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Bienvenido al Blog de DMG</h1>
        <p>Tu fuente de conocimiento sobre nuestro ecosistema, finanzas descentralizadas y el futuro de la web3.</p>
        <Link href="/blog" className={layoutStyles.ctaButton}>Ver todos los artículos</Link>
      </header>

      {/* Sección de Video Carrusel */}
      <section className={styles.videoSection}>
        <h2 className={styles.sectionTitle}>Tutoriales y Noticias en Video</h2>
        <VideoCarousel videos={youtubeVideos}/>
      </section>

      {/* Sección de Planes */}
      <section id="plans" className={styles.plansSection}>
        <h2 className={styles.sectionTitle}>Elige tu Plan y Conviértete en Socio</h2>
        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.featuredCard : ''}`}>
              {plan.featured && <div className={styles.featuredBadge}>Recomendado</div>}
              <h3>{plan.name}</h3>
              <p className={styles.planPrice}>${plan.price}<span>/USD</span></p>
              <ul className={styles.planFeatures}>
                <li>✓ {plan.tokens} DMG de Bienvenida</li>
                <li>✓ Ganancia Estimada: <strong>${plan.profit}</strong></li>
                <li>✓ Duración: {plan.days} días</li>
              </ul>
              <button onClick={() => handleBuyClick(plan)} className="btn btn-primary">Comprar Plan</button>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && 
        <PaymentModal 
          plan={selectedPlan} 
          onClose={closeModal} 
          walletAddress={YOUR_WALLET_ADDRESS}
          usdtWalletAddress={USDT_WALLET_ADDRESS}
        />
      }
    </div>
  );
}