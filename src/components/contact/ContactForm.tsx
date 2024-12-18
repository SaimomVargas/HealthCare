import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '../../utils/validations';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        plan_type: data.planType === 'individual' ? 'Pessoa Física' : 'Empresa',
        message: data.message,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso!');
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      toast.error('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    if (phoneNumber.length <= 2) return phoneNumber;
    if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            Nome Completo
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
              errors.fullName ? 'border-red-500' : 
              watch('fullName') ? 'border-green-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            placeholder="Digite seu nome"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            {...register('phone')}
            onChange={(e) => {
              e.target.value = formatPhoneNumber(e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
              errors.phone ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
            placeholder="(00) 00000-0000"
            maxLength={15}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Tipo de Plano
          </label>
          <select
            {...register('planType')}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
              errors.planType ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
          >
            <option value="">Selecione uma opção</option>
            <option value="individual">Pessoa Física</option>
            <option value="corporate">Empresa</option>
          </select>
          {errors.planType && (
            <p className="mt-1 text-sm text-red-600">{errors.planType.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Mensagem
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none`}
            placeholder="Como podemos ajudar?"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white px-6 py-4 rounded-lg font-medium transition-all ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>
    </form>
  );
}