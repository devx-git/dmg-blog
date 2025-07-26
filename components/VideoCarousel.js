// components/VideoCarousel.js
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos
import { Carousel } from 'react-responsive-carousel';

// Lista de IDs de videos de YouTube
const videoIds = ['zuWYFugthjs','7dzGW1K7JCE','ua-f4NlA0Nc','0HO8hNH64ro','S_wMIEbJJV8', 'e1CMTL4QM7M','81jqhQIdgQc', 'fU-24SJzyl4', 'qJ66iMD6Ud0']; // Ejemplo: Reemplaza con tus IDs

export default function VideoCarousel() {
  return (
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      useKeyboardArrows={true}
    >
      {videoIds.map(videoId => (
        <div key={videoId} className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Carousel>
  );
}