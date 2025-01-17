import React, { useState } from 'react'; // Certifique-se de importar React e useState
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './ProjectsImages.css';

const ProjectsImages = ({ images }) => {
  if (!images || !images.length) return null;

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // Definindo o estado
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageTemplate = (image) => (
    <div className="carousel-item">
      <img 
        src={image.src} 
        alt="Projeto" 
        className="carousel-image"
      />
    </div>
  );

  return (
    <section id="projects-images" className="section projects-images">
      <h2 className="section__title">Imagens dos Projetos</h2>

      <div className="carousel-wrapper">
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div
              key={image.id || index} 
              className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
              role="button" 
              tabIndex={0} 
              onClick={() => setCurrentImageIndex(index)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCurrentImageIndex(index);
                }
              }}
            >
              <img 
                src={image.src} 
                alt={`Miniatura ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="carousel-container">
          <Carousel
            value={images}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={imageTemplate}
            circular
            autoplayInterval={null} 
            showIndicators
            showNavigators
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsImages;
