import photo1 from "/src/assets/img/users/user01.webp";
import photo2 from "/src/assets/img/users/user02.webp";
import photo3 from "/src/assets/img/users/user03.webp";
import photo4 from "/src/assets/img/users/user04.webp";
import photo5 from "/src/assets/img/users/user05.webp";

interface IFeedbackCardsMap {
  id: string;
  name: string;
  photo: string;
  stars: number;
  comment: string;
}

const FeedbackCardsMap: IFeedbackCardsMap[] = [
  {
    id: "feedback-1",
    name: "Pedro Silva",
    photo: photo1,
    stars: 5,
    comment:
      "A integração do novo sistema foi rápida e eficiente, melhorando nossos processos internos. Excelente trabalho!",
  },
  {
    id: "feedback-2",
    name: "Arthur Pereira",
    photo: photo2,
    stars: 5,
    comment:
      "O suporte foi impecável! Resolveram problemas antes mesmo que surgissem. Total confiança na equipe.",
  },
  {
    id: "feedback-3",
    name: "Fernanda Ribeiro",
    photo: photo3,
    stars: 5,
    comment:
      "A solução de segurança superou nossas expectativas. Dados protegidos e equipe mais consciente sobre cibersegurança.",
  },
  {
    id: "feedback-4",
    name: "Amanda Silva",
    photo: photo4,
    stars: 5,
    comment:
      "O suporte técnico foi essencial para otimizar nossa infraestrutura. Agilidade e eficiência que fazem toda a diferença!",
  },
  {
    id: "feedback-5",
    name: "Ricardo Martins",
    photo: photo5,
    stars: 5,
    comment:
      "A equipe solucionou nossas demandas de TI com precisão e rapidez. Atendimento excepcional e altamente profissional!",
  },
];

export default FeedbackCardsMap;
