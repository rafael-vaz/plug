import atendimentoIcon from "/src/assets/img/icons/atendimento.svg";
import experienciaIcon from "/src/assets/img/icons/experiencia.svg";
import satisfacaoIcon from "/src/assets/img/icons/satisfacao.svg";
import servicosIcon from "/src/assets/img/icons/servicos.svg";

interface IQualityCard {
  icon: string;
  iconAlt: string;
  title: string;
  text: string;
}

const QualityCardsMap: IQualityCard[] = [
  {
    icon: satisfacaoIcon,
    iconAlt: "",
    title: "99.9%",
    text: "Clientes satisfeitos",
  },
  {
    icon: atendimentoIcon,
    iconAlt: "",
    title: "45000+",
    text: "Atendimentos",
  },
  {
    icon: servicosIcon,
    iconAlt: "",
    title: "20+",
    text: "Serviços oferecidos",
  },
  {
    icon: experienciaIcon,
    iconAlt: "",
    title: "16",
    text: "Anos de experiência",
  },
];

export default QualityCardsMap;
