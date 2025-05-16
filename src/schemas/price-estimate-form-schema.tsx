import { z } from "zod";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const priceEstimateFormSchema = z.object({
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
  operatingSystem: z
    .string()
    .min(1, { message: "Selecione um sistema operacional." }),
  country: z.string().min(1, { message: "Informe um país." }),
  servers: z.coerce
    .number()
    .int()
    .min(1, { message: "É necessário pelo menos 1 servidor." })
    .max(50, { message: "O limite máximo é de 50 servidores." }),
  routers: z.coerce
    .number()
    .int()
    .max(50, { message: "O limite máximo é de 50 roteadores." })
    .optional(),
  switchs: z.coerce
    .number()
    .int()
    .max(50, { message: "O limite máximo é de 50 switchs." })
    .optional(),
  desktops: z.coerce
    .number()
    .int()
    .max(50, { message: "O limite máximo é de 50 desktops." })
    .optional(),
  printers: z.coerce
    .number()
    .int()
    .max(50, { message: "O limite máximo é de 50 impressoras." })
    .optional(),
  notebooks: z.coerce
    .number()
    .int()
    .max(50, { message: "O limite máximo é de 50 notebooks." })
    .optional(),
});

export default priceEstimateFormSchema;
