
import { Award, Music, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      title: 'Aulas de Jiu-Jitsu',
      description: 'Terças, das 18h às 19:30h',
      icon: <img src="/lovable-uploads/9a7c0a50-19dd-4f09-8da4-486f79940e9d.png" alt="Jiu-Jitsu" className="w-full h-full object-cover" />,
      color: 'bg-gray-900'
    },
    {
      title: 'Aulas de Música',
      description: 'Teclado e violão | Terças, das 18h às 19:30h',
      icon: <img src="/lovable-uploads/436a2092-ca40-4596-ad84-ab6d79efe602.png" alt="Música" className="w-full h-full object-cover" />,
      color: 'bg-gray-800'
    },
    {
      title: 'Aulas de Dança Paraguaia',
      description: 'Sábados, das 14:30h às 16:30h',
      icon: <img src="/lovable-uploads/e9476d98-1e63-4543-8b19-4def78f577f6.png" alt="Dança Paraguaia" className="w-full h-full object-cover" />,
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
