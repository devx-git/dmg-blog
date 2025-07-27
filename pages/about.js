// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>Sobre Nosotros | Digital Market Group</title>
      </Head>

      <section className={styles.aboutSection}>
        <h1>Descubre Digital Market Group (DMG)</h1>
        <p className={styles.subtitle}>Tu Puerta de Entrada al Futuro de las Finanzas Descentralizadas.</p>

        {/* --- Historia y Visión --- */}
        <div className={styles.contentBlock}>
          <h2>🚀 Nuestra Historia y Visión</h2>
          <p>El viaje de Digital Market Group comenzó con una visión clara de los hitos que sentarían las bases de nuestro ecosistema. Hoy, nuestra plataforma de Staking y la Bóveda de Cursos son una realidad que impacta el mercado. Mirando hacia el futuro, nuestra hoja de ruta es ambiciosa, con innovaciones que seguirán revolucionando el espacio cripto.</p>
        </div>

        {/* --- Conéctate --- */}
        <div className={styles.contentBlock}>
          <h2>🌐 Conéctate con Nosotros</h2>
          <p>Nuestra operación es 100% digital, con alcance global. Síguenos en nuestras plataformas para no perderte ninguna actualización:</p>
          <div className={styles.socialGrid}>
            <a href="https://t.me/tu_canal" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/tu_usuario" target="_blank" rel="noopener noreferrer">Twitter/X</a>
          </div>
        </div>

        {/* --- Soporte --- */}
        <div className={styles.contentBlock}>
          <h2>🙋‍♀️ Soporte y Asistencia</h2>
          <p>Tu experiencia es nuestra prioridad. Nuestro Bot de WhatsApp está disponible 24/7 para preguntas rápidas, y para consultas más detalladas, puedes usar nuestro formulario de contacto. Estamos implementando agentes de IA para mejorar aún más la calidad de nuestro soporte.</p>
        </div>

        {/* --- Tecnología --- */}
        <div className={styles.contentBlock}>
          <h2>⛓️ Nuestra Tecnología</h2>
          <p>En el corazón de DMG reside la tecnología blockchain, garantizando seguridad y transparencia. Nuestro token DMG es el pilar de esta infraestructura. Además, usamos herramientas de automatización de vanguardia como n8n para asegurar la eficiencia y fiabilidad de nuestras operaciones.</p>
        </div>

        {/* --- Proyectos Futuros --- */}
        <div className={styles.contentBlock}>
          <h2>🛠️ Nuestros Próximos Proyectos</h2>
          <ul className={styles.projectList}>
            <li>Implementación de Tarjetas con Saldo Cripto.</li>
            <li>Desarrollo de Apps Móviles para iOS y Android.</li>
            <li>Exploración de Juegos Play-to-Earn.</li>
            <li>Integración de Blockchain en Eventos Deportivos.</li>
          </ul>
          <p>¡Mantente atento a las actualizaciones en nuestro blog!</p>
        </div>
      </section>
    </div>
  );
}