import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = {
  personal: [
    {
      question: 'O que está incluso no plano básico?',
      answer: 'O plano básico inclui consultas médicas, exames laboratoriais, internações, cirurgias e atendimento de urgência/emergência, conforme regulamentação da ANS.'
    },
    {
      question: 'Como funciona a telemedicina?',
      answer: 'A telemedicina permite consultas online 24h com médicos através do nosso aplicativo ou site, oferecendo praticidade e rapidez no atendimento.'
    },
    {
      question: 'Existe carência para começar a usar o plano?',
      answer: 'Sim, os períodos de carência variam conforme o procedimento, seguindo as normas da ANS. Urgências e emergências têm cobertura imediata.'
    }
  ],
  corporate: [
    {
      question: 'Qual o número mínimo de colaboradores para contratar?',
      answer: 'Nossos planos empresariais podem ser contratados a partir de 2 colaboradores, com condições especiais para empresas de diferentes portes.'
    },
    {
      question: 'Existem opções personalizadas para cada empresa?',
      answer: 'Sim, oferecemos planos flexíveis que podem ser adaptados às necessidades específicas da sua empresa e orçamento.'
    },
    {
      question: 'Como funciona a coparticipação?',
      answer: 'A coparticipação é opcional e permite reduzir o valor da mensalidade. Quando ativa, o colaborador paga uma pequena parte do valor dos procedimentos realizados.'
    }
  ]
};

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Perguntas Frequentes
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Para Pessoa Física</h3>
            <div className="space-y-4">
              {faqs.personal.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Para Empresas</h3>
            <div className="space-y-4">
              {faqs.corporate.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}