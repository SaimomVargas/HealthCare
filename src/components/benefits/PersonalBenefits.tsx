import React from 'react';
import { Clock, Building2, Heart, Phone, Wallet, Activity, Users, Shield } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: Clock,
    title: 'Acesso Rápido',
    description: 'Consultas e exames sem longas filas de espera. Atendimento ágil com especialistas.'
  },
  {
    icon: Building2, // Changed from Hospital to Building2
    title: 'Rede Credenciada',
    description: 'Hospitais e clínicas renomadas em todo o país, com cobertura nacional.'
  },
  {
    icon: Heart,
    title: 'Cuidado Continuado',
    description: 'Programas de saúde preventiva e acompanhamento médico personalizado.'
  },
  {
    icon: Wallet,
    title: 'Economia',
    description: 'Evite gastos inesperados com emergências médicas e tenha descontos exclusivos.'
  },
  {
    icon: Phone,
    title: 'Telemedicina',
    description: 'Consultas online 24/7, práticas e seguras, sem sair de casa.'
  },
  {
    icon: Activity,
    title: 'Cobertura Ampla',
    description: 'Consultas, exames, internações e cirurgias com a melhor assistência.'
  },
  {
    icon: Users,
    title: 'Flexibilidade',
    description: 'Planos adaptados para diferentes perfis: individuais, familiares ou idosos.'
  },
  {
    icon: Shield,
    title: 'Atendimento 24/7',
    description: 'Suporte médico e cobertura para emergências a qualquer momento.'
  }
];

export default function PersonalBenefits() {
  return (
    <section id="personal-benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Cuidar da Sua Saúde Nunca Foi Tão Simples!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubra todos os benefícios de ter um plano de saúde individual
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