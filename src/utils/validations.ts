import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Nome deve conter apenas letras'),
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Telefone deve estar no formato (00) 00000-0000')
    .min(1, 'Telefone é obrigatório'),
  planType: z
    .string()
    .min(1, 'Selecione um tipo de plano'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(500, 'Mensagem deve ter no máximo 500 caracteres')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;