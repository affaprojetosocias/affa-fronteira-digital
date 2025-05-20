
import { PiggyBank } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contribute = () => {
  const pixCNPJ = "57.954.461/0001-10";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCNPJ);
    alert('CNPJ copiado para a área de transferência!');
  };

  return (
    <section id="como-contribuir" className="section-padding bg-black text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Como Contribuir</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              Nosso projeto é gratuito e comunitário. Oferecemos merenda, materiais e aulas com carinho e dedicação. Com sua ajuda, podemos continuar fortalecendo a nossa cultura na fronteira. Contribua com qualquer valor!
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <PiggyBank className="h-16 w-16 mr-4" />
              <div>
                <p className="font-medium text-lg">Seu apoio faz a diferença!</p>
                <p className="text-gray-300">Cada contribuição ajuda a manter nossas ações</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Card className="bg-white text-black">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Pix / CNPJ</h3>
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <p className="text-xl font-mono tracking-wider">{pixCNPJ}</p>
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    className="bg-black text-white hover:bg-gray-800 w-full"
                  >
                    Copiar CNPJ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
