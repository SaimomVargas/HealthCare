import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}