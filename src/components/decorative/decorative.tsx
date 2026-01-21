import decoArrow from "/src/assets/img/deco/deco_arrow.svg";
import decoCircles from "/src/assets/img/deco/deco_circles.svg";
import decoWaves from "/src/assets/img/deco/deco_waves.svg";

type DecoType = "circles" | "arrow" | "waves";

interface IDecorativeProps {
  type: DecoType;
  className: string;
}

const DecoTypesMap: { [key in DecoType]: string } = {
  circles: decoCircles,
  arrow: decoArrow,
  waves: decoWaves,
};

const Decorative = ({ type, className }: IDecorativeProps) => {
  return (
    <img
      src={DecoTypesMap[type]}
      className={className}
      data-type={type}
      alt="Ícone decorativo"
      loading="lazy"
    />
  );
};

export default Decorative;
