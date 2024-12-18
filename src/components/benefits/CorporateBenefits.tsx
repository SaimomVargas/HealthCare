import React from 'react';
import { TrendingUp, Users, PiggyBank, Brain, Building, LineChart, Award, Heart } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Redução do Absenteísmo',
    description: 'Menos faltas e maior produtividade com colaboradores saudáveis.'
  },
  {
    icon: Users,
    title: 'Retenção de Talentos',
    description: 'Atraia e mantenha os melhores profissionais com benefícios valorizados.'
  },
  {
    icon: PiggyBank,
    title: 'Incentivos Fiscais',
    description: 'Deduções no Imposto de Renda e alívio na folha de pagamento.'
  },
  {
    icon: Brain,
    title: 'Produtividade',
    description: 'Equipe mais engajada e focada com suporte médico adequado.'
  },
  {
    icon: Building,
    title: 'Cobertura Personalizada',
    description: 'Planos adaptados ao perfil e tamanho da sua empresa.'
  },
  {
    icon: LineChart,
    title: 'Custo-Benefício',
    description: 'Preços mais acessíveis em planos empresariais.'
  },
  {
    icon: Award,
    title: 'Vantagem Competitiva',
    description: 'Destaque-se no mercado com benefícios que fazem a diferença.'
  },
  {
    icon: Heart,
    title: 'Bem-Estar',
    description: 'Programas de saúde integrados e prevenção de doenças ocupacionais.'
  }
];

export default function CorporateBenefits() {
  return (
    <section id="corporate-benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Transforme o Bem-Estar em Produtividade!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Benefícios exclusivos para empresas que valorizam seus colaboradores
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}