import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">Entre em Contato</h2>
      <p className="mt-4 text-lg text-gray-600">
        Invista na sua saúde ou na saúde de quem trabalha com você.
        Nossa equipe está pronta para ajudar.
      </p>
      
      <div className="mt-8 space-y-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-900">Telefone</p>
            <p className="text-gray-600">0800 123 4567</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-900">Email</p>
            <p className="text-gray-600">contato@healthcare.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-900">Localização</p>
            <p className="text-gray-600">São Paulo, SP</p>
          </div>
        </div>
      </div>
    </div>
  );
}