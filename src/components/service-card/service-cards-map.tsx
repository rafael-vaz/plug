// covers
import cibersegurancaCover from "/src/assets/img/home/servicos/ciberseguranca.webp";
import infraestruturaCover from "/src/assets/img/home/servicos/infraestrutura.webp";
import manutencaoCover from "/src/assets/img/home/servicos/manutencao.webp";
import suporteCover from "/src/assets/img/home/servicos/suporte.webp";
import cibersegurancaIcon from "/src/assets/img/icons/ciberseguranca.svg";
import infraestruturaIcon from "/src/assets/img/icons/infraestrutura.svg";
// icons
import manutencaoIcon from "/src/assets/img/icons/manutencao.svg";
import suporteIcon from "/src/assets/img/icons/suporte.svg";

interface IServiceCardItem {
  title: string;
  text: string;
  cover: string;
  coverAlt: string;
  icon: string;
  iconAlt: string;
}

const ServiceCardsMap: IServiceCardItem[] = [
  {
    title: "Assistência Técnica",
    text: "Cuidamos da manutenção de computadores com serviços rápidos e eficientes, garantindo performance máxima.",
    cover: manutencaoCover,
    coverAlt:
      "Homem realizando manutenção em uma placa de circuito, sobre uma mesa repleta de diversos componentes computacionais.",
    icon: manutencaoIcon,
    iconAlt: "Ícone de Suporte Técnico",
  },
  {
    title: "Infraestrutura de Redes",
    text: "Oferecemos infraestrutura de redes com cabeamento estruturado, configuração de equipamentos e manutenção.",
    cover: infraestruturaCover,
    coverAlt:
      "Homem analisando o cabeamento de redes em uma sala de servidores.",
    icon: infraestruturaIcon,
    iconAlt: "Ícone de Conectividade Global",
  },
  {
    title: "Cibersegurança",
    text: "Disponibilizamos soluções em cibersegurança, como análise de vulnerabilidades, firewalls, e monitoramento para proteger sua rede e dados.",
    cover: cibersegurancaCover,
    coverAlt:
      "Pessoa anônima sentada à frente de um notebook, com uma ilustração relacionada à segurança digital exibida em sua tela.",
    icon: cibersegurancaIcon,
    iconAlt: "Ícone de Segurança Verificada",
  },
  {
    title: "Suporte Remoto",
    text: "Fornecemos suporte remoto especializado, com diagnóstico, resolução de problemas e manutenção de sistemas de TI à distância.",
    cover: suporteCover,
    coverAlt:
      "Mulher sorridente, utilizando um headset e sentada à mesa, diante de um computador.",
    icon: suporteIcon,
    iconAlt: "Ícone de Suporte ao Cliente",
  },
];

export default ServiceCardsMap;
