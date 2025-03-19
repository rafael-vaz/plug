import photo1 from "/src/assets/img/users/user01.png";
import photo2 from "/src/assets/img/users/user02.png";
import photo3 from "/src/assets/img/users/user03.png";
import photo4 from "/src/assets/img/users/user04.png";
import photo5 from "/src/assets/img/users/user05.png";

interface IFeedbackCardsMap {
  name: string;
  photo: string;
  stars: number;
  comment: string;
}

const FeedbackCardsMap: IFeedbackCardsMap[] = [
  {
    name: "Pedro Silva",
    photo: photo1,
    stars: 5,
    comment:
      "A integração do novo sistema foi rápida e eficiente, melhorando nossos processos internos. Excelente trabalho!",
  },
  {
    name: "Arthur Pereira",
    photo: photo2,
    stars: 5,
    comment:
      "O suporte foi impecável! Resolveram problemas antes mesmo que surgissem. Total confiança na equipe.",
  },
  {
    name: "Fernanda Ribeiro",
    photo: photo3,
    stars: 5,
    comment:
      "A solução de segurança superou nossas expectativas. Dados protegidos e equipe mais consciente sobre cibersegurança.",
  },
  {
    name: "Amanda Silva",
    photo: photo4,
    stars: 5,
    comment:
      "O suporte técnico foi essencial para otimizar nossa infraestrutura. Agilidade e eficiência que fazem toda a diferença!",
  },
  {
    name: "Ricardo Martins",
    photo: photo5,
    stars: 5,
    comment:
      "A equipe solucionou nossas demandas de TI com precisão e rapidez. Atendimento excepcional e altamente profissional!",
  },
];

export default FeedbackCardsMap;
