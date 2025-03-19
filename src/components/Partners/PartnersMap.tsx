import logoAWS from "../../assets/img/servicos/parceiros/aws.png";
import logoBitdefender from "../../assets/img/servicos/parceiros/bitdefender.png";
import logoCisco from "../../assets/img/servicos/parceiros/cisco.png";
import logoIntelbras from "../../assets/img/servicos/parceiros/intelbras.png";
import logoLenovo from "../../assets/img/servicos/parceiros/lenovo.png";
import logoMicrosoft from "../../assets/img/servicos/parceiros/microsoft.png";

interface IPartner {
  name: string;
  logo: string;
}

const PartnersMap: IPartner[] = [
  { name: "Microsoft", logo: logoMicrosoft },
  { name: "AWS", logo: logoAWS },
  { name: "Cisco", logo: logoCisco },
  { name: "Intelbras", logo: logoIntelbras },
  { name: "Bitdefender", logo: logoBitdefender },
  { name: "Lenovo", logo: logoLenovo },
];

export default PartnersMap;
