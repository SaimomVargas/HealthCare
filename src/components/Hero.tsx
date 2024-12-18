import React from 'react';
import { Shield, Users, Building2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Mobile-first approach with reversed order */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image comes first on mobile */}
          <div className="relative animate-scale-in order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1676313125237-cacf3e880dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profissional de saúde sorrindo"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content comes second on mobile */}
          <div className="animate-fade-in order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Cuide de Quem Importa: Encontre o Plano de Saúde Perfeito!
            </h1>
            <p className="mt-4 md:mt-6 text-lg text-gray-600">
              Descubra os melhores planos de saúde do Brasil para você, sua família ou sua empresa.
            </p>
            {/* Vertical stack on mobile, horizontal on desktop */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a 
                href="#plans"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center hover-lift"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors hover-lift flex items-center justify-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>

        {/* Benefits cards with improved mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16 stagger-children animate-fade-in">
          <div className="bg-white p-6 rounded-xl shadow-lg card-hover transform transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Para Família</h3>
            <p className="text-gray-600">Acesso rápido a consultas, exames e hospitais de excelência para toda sua família.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg card-hover transform transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Para Empresas</h3>
            <p className="text-gray-600">Reduza o absenteísmo e aumente a produtividade com colaboradores mais saudáveis.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg card-hover transform transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proteção Total</h3>
            <p className="text-gray-600">Evite custos elevados com saúde em emergências e tenha tranquilidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}