
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/lovable-uploads/59dfc8a1-39f1-4ea9-b65a-96c79005bd1f.png"
              alt="AFFA - Projetos Sociais"
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in">
            Associação Fortalecendo Famílias
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Transformando vidas na fronteira Brasil–Paraguai através do esporte, música e cultura
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <a href="#quem-somos">Conheça nosso trabalho</a>
            </Button>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 hover:text-black">
              <a href="#como-contribuir">Como contribuir</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
