
import { Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Quem somos?</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="p-4 rounded-full bg-black text-white w-40 h-40 flex items-center justify-center overflow-hidden">
              <img
                src="/lovable-uploads/59dfc8a1-39f1-4ea9-b65a-96c79005bd1f.png"
                alt="AFFA - Projetos Sociais"
                className="h-32 w-32 object-contain"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">
              A Associação Fortalecendo Famílias (AFFA) é um projeto social que nasceu com o objetivo de fortalecer crianças e adolescentes da comunidade fronteiriça por meio do esporte, da música e da cultura. Acreditamos na força das nossas raízes, da união e da diversidade da fronteira Brasil–Paraguai. Atuamos com aulas gratuitas e ações que promovem talentos, valores e esperança, construindo juntos um futuro mais justo e solidário.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold text-lg">Fundação</h3>
                <p>24 de julho de 2024</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold text-lg">Localização</h3>
                <p>Ponta Porã - MS</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-bold text-lg">Foco</h3>
                <p>Esporte, Música e Cultura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
