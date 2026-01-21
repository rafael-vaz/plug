interface IServicePlanCard {
  id: string;
  name: string;
  text?: string;
  price?: number;
  billingFrequency?: "ano" | "mês";
  benefits: string[];
  buttonText: string;
  color?: "blue" | "white";
  recommended?: boolean;
}

const ServicePlanCardMap: IServicePlanCard[] = [
  {
    id: "essential",
    name: "Essencial",
    price: 300,
    billingFrequency: "mês",
    benefits: [
      "Suporte remoto básico",
      "Manutenção preventiva",
      "Configuração inicial",
    ],
    buttonText: "Assinar Essencial",
  },
  {
    id: "professional",
    name: "Profissional",
    price: 540,
    billingFrequency: "mês",
    benefits: [
      "Suporte remoto avançado",
      "Monitoramento de redes",
      "Manutenção mensal",
      "Consultoria técnica",
      "Atualizações de sistemas",
      "Gerenciamento de backups",
    ],
    buttonText: "Assinar Profissional",
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Empresarial",
    text: "Fale conosco",
    benefits: [
      "Suporte 24/7 dedicado",
      "Monitoramento avançado",
      "Plano de cibersegurança",
      "Gestão de servidores",
      "Auditoria de redes",
      "Manutenção proativa",
      "Consultoria estratégica",
      "Treinamento em TI",
      "Configuração personalizada",
    ],
    buttonText: "Entrar em contato",
    color: "blue",
  },
];

export default ServicePlanCardMap;
