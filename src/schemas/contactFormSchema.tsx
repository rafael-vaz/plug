import { z } from "zod";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const contactFormSchema = z.object({
  name: z
    .string()
    .min(8, { message: "O nome deve ter pelo menos 8 caracteres." }),
  email: z.string().email({ message: "Informe um e-mail válido." }),
  phone: z
    .string()
    .refine((val) => val === "" || phoneRegex.test(val), {
      message: "O telefone deve estar no formato (00) 00000-0000.",
    })
    .optional(),
  country: z.string().min(1, { message: "Informe um país." }),
  message: z
    .string()
    .min(10, "O texto deve possuir no mínimo 10 caracteres")
    .max(500, "O texto deve possuir no máximo 500 caracteres"),
});

export default contactFormSchema;
