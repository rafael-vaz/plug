import atendimentoImg from "/src/assets/img/home/banner/atendimento.webp";
import cibersegurancaImg from "/src/assets/img/home/banner/ciberseguranca.webp";
import manutencaoImg from "/src/assets/img/home/banner/manutencao.webp";
import redesImg from "/src/assets/img/home/banner/redes.webp";
import suporteImg from "/src/assets/img/home/banner/suporte.webp";

export interface ISliderItem {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

const SliderItemsMap: ISliderItem[] = [
  {
    id: "soluções_suporte_ti",
    title: "Soluções em Suporte de TI",
    text: "Oferecemos suporte de TI completo, cuidando de computadores, redes e segurança. Nossa equipe experiente garante eficiência, desempenho e tranquilidade para o seu negócio.",
    image: suporteImg,
    imageAlt: "Mulher sorridente, sentada à frente de um computador.",
  },
  {
    id: "reparo_computadores",
    title: "Reparo de Computadores",
    text: "Realizamos manutenção preventiva e corretiva em computadores, garantindo alta performance, maior vida útil dos equipamentos e segurança para seus dados.",
    image: manutencaoImg,
    imageAlt:
      "As mãos de um homem realizando manutenção em um dispositivo móvel sobre uma mesa, rodeada de diversas ferramentas.",
  },
  {
    id: "conectividade_redes",
    title: "Conectividade de Redes",
    text: "Planejamos, instalamos e otimizamos redes para oferecer conectividade estável e eficiente, adaptada às necessidades do seu ambiente corporativo.",
    image: redesImg,
    imageAlt: "Homem segurando uma planilha em meio a um datacenter.",
  },
  {
    id: "segurança_digital",
    title: "Segurança Digital",
    text: "Proteja seu negócio com soluções avançadas de segurança digital, incluindo firewall, monitoramento, e prevenção contra ameaças cibernéticas.",
    image: cibersegurancaImg,
    imageAlt:
      "Homem segurando um tablet, com projeções de elementos ilustrativos relacionadas ao tema de segurança.",
  },
  {
    id: "atendimento_remoto",
    title: "Atendimento Remoto",
    text: "Conte com suporte remoto rápido e eficiente para resolver problemas de TI sem a necessidade de deslocamento, otimizando tempo e recursos.",
    image: atendimentoImg,
    imageAlt:
      "Mulher sentada à frente de um computador, utilizando um headset.",
  },
];

export default SliderItemsMap;
