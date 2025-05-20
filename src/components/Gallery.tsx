
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder images until real images are provided
  const images = [
    {
      src: "https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Crianças praticando jiu-jitsu",
    },
    {
      src: "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Aula de música para crianças",
    },
    {
      src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Apresentação de dança paraguaia",
    },
    {
      src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Crianças tocando instrumentos",
    },
    {
      src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Eventos comunitários",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Confraternização da AFFA",
    },
  ];

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">FOTOS DO NOSSO PROJETO</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md group">
              <div className="image-container aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
