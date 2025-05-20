
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisionMission = () => {
  return (
    <section id="visao-missao" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Nossa Visão e Missão</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8" />
                <CardTitle>Visão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Sonhamos com uma geração de crianças e adolescentes fortalecida em valores, talentos e esperança. 
                Queremos ser um farol na fronteira onde o amor ao próximo transforma realidades, unem famílias e 
                constroem um futuro mais justo, solidário e cheio de propósito.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8" />
                <CardTitle>Missão</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                Despertar e desenvolver os talentos de crianças e adolescentes nas áreas musical, 
                esportiva e cultural, promovendo valores, inclusão e oportunidades que transformam 
                vidas e inspiram um futuro de esperança na nossa comunidade fronteiriça.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
