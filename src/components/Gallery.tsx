
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

const Gallery = () => {
  // Real project images
  const images = [
    {
      src: "/affa-fronteira-digital/lovable-uploads/56dc4cb5-4bca-4885-af05-1b0d8345c318.png",
      alt: "Aula de dança paraguaia",
    },
    {
      src: "/affa-fronteira-digital/lovable-uploads/f37d5259-94be-4a76-a28d-19d8798dc05a.png",
      alt: "Aula de jiu-jitsu com as crianças",
    },
    {
      src: "/affa-fronteira-digital/lovable-uploads/cb811b26-ca30-4e6b-a187-181557fdda1f.png",
      alt: "Meninas com vestidos de dança paraguaia",
    },
    {
      src: "/affa-fronteira-digital/lovable-uploads/a75e3d88-bb93-4556-bf32-ac12cb0c5bc0.png",
      alt: "Crianças segurando violões nas aulas de música",
    },
    {
      src: "/affa-fronteira-digital/lovable-uploads/a460e792-2a50-4ba8-b027-6e01b18a52b3.png",
      alt: "Criança tocando teclado",
    },
    {
      src: "/affa-fronteira-digital/lovable-uploads/febed574-3b07-4106-a987-f15305c9e611.png",
      alt: "Aula de jiu-jitsu com as crianças no tatame",
    },
  ];

  // Check if the device is mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">FOTOS DO NOSSO PROJETO</h2>
        
        {isMobile ? (
          // Mobile carousel view
          <div className="px-4">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden border-none shadow-md">
                      <div className="image-container p-2">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-auto h-auto max-w-full max-h-[300px] mx-auto"
                        />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mr-2" />
                <CarouselNext className="relative static ml-2" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md group p-3">
                <div className="flex justify-center items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-auto h-auto max-w-full max-h-[250px]"
                  />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
