
import { Award, Music, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      title: 'Aulas de Jiu-Jitsu',
      description: 'Terças, das 18h às 19:30h',
      icon: <img src="/affa-fronteira-digital/lovable-uploads/b277a815-47e3-4af9-9f7e-cef66c1ef4a1.png" alt="Jiu-Jitsu" className="w-full h-full object-cover" />,
      color: 'bg-gray-900'
    },
    {
      title: 'Aulas de Música',
      description: 'Teclado e violão | Terças, das 18h às 19:30h',
      icon: <img src="/affa-fronteira-digital/lovable-uploads/0c582ca1-19de-414d-ac72-b0cd7dd3f4dd.png" alt="Música" className="w-full h-full object-cover" />,
      color: 'bg-gray-800'
    },
    {
      title: 'Aulas de Dança',
      description: 'Dança regional e ballet | Sábados, das 14:30h às 16:30h',
      icon: <img src="/affa-fronteira-digital/lovable-uploads/616e6f22-1a8c-40ce-8341-7b740a8d4f78.png" alt="Dança" className="w-full h-full object-cover" />,
      color: 'bg-gray-700'
    }
  ];

  return (
    <section id="nossas-acoes" className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <h2 className="section-title">Nossas Ações</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transform transition-transform hover:-translate-y-1">
              <div className={`${program.color} h-32 flex justify-center items-center text-white overflow-hidden`}>
                {program.icon}
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium">
            Todas as aulas e atividades são <span className="font-bold">gratuitas</span> e abertas à comunidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
