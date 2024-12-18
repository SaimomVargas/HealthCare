import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">HealthCare+</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Início</a>
            <a href="#plans" className="text-gray-700 hover:text-blue-600">Planos</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600">Benefícios</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:flex items-center text-blue-600 hover:text-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              <span>0800 123 4567</span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a href="#home" className="block px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Início
            </a>
            <a href="#plans" className="block px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Planos
            </a>
            <a href="#benefits" className="block px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Benefícios
            </a>
            <a href="#contact" className="block px-3 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Contato
            </a>
            <a href="#contact" className="flex items-center px-3 py-3 rounded-lg text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              <Phone className="w-4 h-4 mr-2" />
              <span>0800 123 4567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}