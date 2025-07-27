// components/VideoCarousel.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function VideoCarousel({ videos }) { // Recibe 'videos' como prop
  // Si no hay videos, no muestra nada
  if (!videos || videos.length === 0) {
    return <p>No hay videos disponibles en este momento.</p>;
  }

  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true}>
      {videos.map(video => (
        <div key={video.id} className="video-container">
          <iframe 
            src={`https://www.youtube.com/embed/${video.attributes.youtubeVideoId}`}
            title={video.attributes.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Carousel>
  );
}