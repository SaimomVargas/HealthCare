import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Unimed',
    description: 'Maior rede de atendimento do Brasil',
    features: [
      'Cobertura nacional',
      'Telemedicina 24h',
      'Rede própria de hospitais',
      'Desconto em farmácias'
    ]
  },
  {
    name: 'Amil',
    description: 'Excelência em atendimento',
    features: [
      'Hospitais premium',
      'Reembolso rápido',
      'App exclusivo',
      'Programas preventivos'
    ]
  },
  {
    name: 'Bradesco Saúde',
    description: 'Tradição e qualidade',
    features: [
      'Maior rede credenciada',
      'Cobertura internacional',
      'Clube de benefícios',
      'Central 24h'
    ]
  }
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Planos</h2>
          <p className="mt-4 text-xl text-gray-600">
            Escolha o plano ideal para você ou sua empresa
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 stagger-children">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-2xl shadow-lg card-hover animate-fade-in">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center animate-slide-in">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center hover-lift"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}