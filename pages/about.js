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
          <h2>Nuestra Historia y Visión: El Viaje de Digital Market Group</h2>
          <p style={{ textAlign: 'justify' }}>En Digital Market Group (DMG), nuestra narrativa es la de una evolución constante, 
            impulsada por una visión inquebrantable de democratizar el acceso al universo de los criptoactivos. 
            Nuestro viaje no es solo una secuencia de logros, sino el reflejo de un compromiso profundo con la innovación, 
            la seguridad y el empoderamiento de cada miembro de nuestra comunidad.</p>

            <h2>🚀 El Pasado: La Semilla de una Visión Audaz</h2>
            <p style={{ textAlign: 'justify' }}>El viaje de Digital Market Group comenzó con una visión clara de los hitos que sentarían las bases de nuestro ecosistema. 
            Fue en un momento donde la promesa de la tecnología blockchain y las criptomonedas comenzaba a emerger con fuerza, 
            pero también lo hacían las barreras de entrada: la complejidad técnica, la volatilidad extrema y la falta de plataformas intuitivas
            y seguras para el inversor común. Vimos la necesidad de construir un puente, un espacio donde la vanguardia 
            tecnológica se encontrara con la simplicidad y la confianza.<br></br>

            Nuestra concepción inicial no fue la de un simple proyecto cripto, sino la de un ecosistema integral. 
            Nos propusimos trascender las limitaciones existentes y ofrecer soluciones que permitieran a cualquier persona, 
            independientemente de su experiencia previa, participar activamente y beneficiarse de la revolución digital. Cada paso, 
            desde la concepción de nuestros contratos inteligentes hasta la elección de la red blockchain más eficiente, 
            fue un hito estratégico en la materialización de esa visión fundacional. Nos enfocamos en la investigación profunda 
            y en la construcción de una base sólida que pudiera soportar no solo el presente, sino también las ambiciones futuras.</p>

            <h2>🌐 El Presente: Consolidando un Ecosistema Sólido</h2>
            <p style={{ textAlign: 'justify' }}>Hoy, nuestra plataforma de Staking y la Bóveda de Socios Fundadores y Cursos de Tecnología Cripto son una realidad que 
              impacta el mercado. Lo que una vez fue un concepto audaz, ahora es una infraestructura operativa y vibrante, en la que miles 
              de usuarios confían para gestionar y hacer crecer sus activos digitales.<br></br>

              Nuestra plataforma de Staking no es solo un mecanismo para generar ingresos pasivos; es el reflejo de nuestro compromiso 
              con la descentralización y la seguridad de la red. Al permitir a los usuarios bloquear sus tokens DMG, no solo obtienen 
              recompensas atractivas, sino que también contribuyen activamente a la estabilidad y robustez de nuestro ecosistema. 
              Hemos diseñado interfaces intuitivas que hacen que el proceso de staking sea accesible para todos, eliminando la complejidad 
              que a menudo disuade a los nuevos participantes.<br></br>

              Paralelamente, nuestra Bóveda de Socios Fundadores se ha consolidado como el epicentro de oportunidades exclusivas y conocimiento 
              especializado. A través de ella, nuestros socios inversionistas acceden a planes cuidadosamente estructurados que ofrecen 
              beneficios tangibles y rendimientos predecibles, siempre bajo un marco de transparencia y confianza.<br></br>

              Complementando esto, nuestros Cursos de Tecnología Cripto son una piedra angular en nuestra misión educativa. 
              Desde la introducción a los fundamentos de Blockchain hasta estrategias de inversión avanzadas, ofrecemos un currículo que 
              capacita a nuestros usuarios con el conocimiento necesario para tomar decisiones informadas y navegar con confianza en este 
              mercado dinámico. Cada módulo ha sido desarrollado por expertos, garantizando contenido relevante, actualizado y de fácil 
              comprensión. En conjunto, estas plataformas no solo generan valor, sino que construyen una comunidad sólida y educada, 
              dispuesta a liderar el futuro digital.</p>

              <h2>🔮 El Futuro: Liderando la Próxima Ola Cripto</h2>
              <p style={{ textAlign: 'justify' }}>Mirando hacia el futuro, nuestra hoja de ruta es ambiciosa, con innovaciones que seguirán revolucionando el espacio cripto. 
                No nos conformamos con ser solo una plataforma; aspiramos a ser pioneros en la próxima generación de soluciones blockchain.<br></br>

                Visualizamos un futuro donde la interacción con los criptoactivos sea tan fluida y omnipresente como el uso de la moneda 
                fiduciaria hoy. Esto se traducirá en:<br></br>

                <strong>Expansión de la Bóveda y Diversificación de Activos:</strong> Continuaremos ampliando nuestra oferta de activos y oportunidades de 
                inversión, incluyendo nuevos tokens y productos financieros descentralizados (DeFi) que maximicen el potencial de nuestros 
                socios.<br></br>

                <strong>Integración de Aplicaciones Móviles:</strong> El lanzamiento de nuestras aplicaciones nativas para iOS y Android permitirá un acceso 
                ininterrumpido y optimizado a todas las funcionalidades de DMG, poniendo el poder del ecosistema en la palma de la mano de 
                cada usuario.<br></br>

                <strong>Avanzada Gobernanza Descentralizada:</strong> Fomentaremos una verdadera descentralización, otorgando a nuestros holders de tokens DMG 
                un poder de voto significativo en las decisiones clave del proyecto, asegurando que la comunidad sea el verdadero motor de 
                nuestro progreso.<br></br>

                <strong>Exploración de Nuevas Fronteras Tecnológicas:</strong> Invertiremos en investigación y desarrollo de tecnologías emergentes 
                como Web3 Gaming (Play-to-Earn), NFTs con utilidad real, y soluciones de identidad digital descentralizada, siempre buscando 
                integrar aquellas que aporten valor tangible a nuestros usuarios.<br></br>

                Alianzas Estratégicas Globales: Forjaremos lazos con líderes de la industria, instituciones académicas y proyectos 
                disruptivos para fortalecer nuestra infraestructura y expandir nuestra huella global.<br></br>

                En DMG, el futuro no es solo una promesa, es una hoja de ruta activa y en constante evolución. 
                Estamos construyendo más que una plataforma; estamos forjando el camino hacia un futuro financiero más inclusivo, 
                transparente y potente para todos. Únete a nosotros en este emocionante viaje.</p>


        </div>

        {/* --- Conéctate --- */}
        <div className={styles.contentBlock}>
          <h2>🌐 Conéctate con Nosotros</h2>
          <p style={{ textAlign: 'justify' }}>Nuestra operación es 100% digital, con alcance global. Síguenos en nuestras plataformas para no perderte ninguna actualización, 
            noticia o evento:</p>
          <div className={styles.socialGrid}>
            <a href="https://t.me/tu_canal" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/tu_usuario" target="_blank" rel="noopener noreferrer">Twitter/X</a><br></br>
          </div><br></br>
          <h2>📍 Nuestras Ubicaciones</h2>
          <p style={{ textAlign: 'justify' }}>Como una empresa 100% digital y global, Digital Market Group opera sin fronteras físicas, lo que nos permite ofrecer soporte y 
            servicios en cualquier parte del mundo. Nuestra infraestructura robusta y nuestros equipos distribuidos aseguran una presencia 
            constante y accesible para todos nuestros usuarios, adaptándonos a las necesidades de un mercado global.<br></br>

            Si bien priorizamos la eficiencia y el acceso remoto, comprendemos la importancia de la conexión. Por ello, 
            nuestras operaciones se centran en canales digitales avanzados y una comunicación fluida. Para cualquier consulta o asistencia 
            personalizada, no dudes en contactarnos a través de nuestros canales oficiales.</p>
        </div>

        {/* --- Soporte --- */}
        <div className={styles.contentBlock}>
          <h2>🤝 Soporte y Asistencia</h2>
          <p style={{ textAlign: 'justify' }}>Tu experiencia en Digital Market Group es nuestra prioridad fundamental. Nos esforzamos por ofrecerte un soporte accesible, 
            rápido y de alta calidad para que todas tus interacciones con nuestra plataforma sean fluidas y satisfactorias.</p><br></br>

          <h3>Canales de Soporte:</h3>
          <p style={{ textAlign: 'justify' }}>Bot de WhatsApp 🤖:<br></br>
          Para preguntas rápidas, dudas frecuentes o asistencia instantánea, nuestro avanzado Bot de WhatsApp está disponible 24 horas al día, 
          7 días a la semana. Es tu primera línea de apoyo para obtener respuestas eficientes sin demoras.<br></br><br></br>

          Formulario de Contacto ✉️:<br></br>
          Si necesitas realizar consultas más detalladas, tienes solicitudes específicas o requieres asistencia personalizada que exceda las 
          capacidades del bot, puedes utilizar nuestro formulario de contacto dedicado. Nuestro equipo de soporte revisará tu solicitud y se 
          pondrá en contacto contigo a la brevedad posible.</p><br></br>

          <p style={{ textAlign: 'justify' }}>Innovación en el Soporte con IA:<br></br>
          Estamos en un proceso continuo de mejora. Actualmente, nos encontramos implementando agentes de Inteligencia Artificial 
          para potenciar aún más la calidad y eficiencia de nuestro servicio de soporte. Esta iniciativa busca:<br></br><br></br>

          Ofrecer respuestas más precisas y contextuales.<br></br>

          Reducir los tiempos de espera para resoluciones.<br></br>

          Proporcionar una experiencia de asistencia más intuitiva y adaptada a tus necesidades individuales.<br></br><br></br>

          En Digital Market Group, estamos comprometidos con tu éxito y satisfacción, asegurando que siempre tengas el apoyo que necesitas, 
          cuando lo necesitas.</p><br></br>

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