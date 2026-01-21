import { IconProps } from "@phosphor-icons/react";
import { Medal } from "@phosphor-icons/react";
import { SketchLogo } from "@phosphor-icons/react";
import { Users } from "@phosphor-icons/react";

interface IAboutUsItemsMap {
  icon: React.ElementType<IconProps>;
  title: string;
  text: string;
}

const AboutUsItemsMap: IAboutUsItemsMap[] = [
  {
    icon: Medal,
    title: "Qualidade",
    text: "Utiliza-mos rotineiramente uma moderna filosofia de trabalho, baseada na qualidade dos serviços.",
  },
  {
    icon: SketchLogo,
    title: "Experiência",
    text: "Experiência de sobra pode oferecer assistência técnica qualificada e com preços justos.",
  },
  {
    icon: Users,
    title: "Diferencial",
    text: "Trabalhamos com atendimentos em tempo recorde e suporte por acesso remoto express.",
  },
];

export default AboutUsItemsMap;
