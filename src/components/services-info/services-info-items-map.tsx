import { IconProps } from "@phosphor-icons/react";
import { Globe, Headset, ShieldCheck, Wrench } from "@phosphor-icons/react";
import { ReactNode } from "react";

import coverCiberseguranca from "../../assets/img/servicos/detalhes/ciberseguranca.webp";
import coverInfra from "../../assets/img/servicos/detalhes/infraestrutura.webp";
import coverReparo from "../../assets/img/servicos/detalhes/manutencao.webp";
import coverSuporte from "../../assets/img/servicos/detalhes/suporte.webp";

interface IServicesInfoItemsMap {
  id: string;
  cover: string;
  altCover: string;
  icon: React.ElementType<IconProps>;
  title: string;
  buttonText: string;
  text: ReactNode;
}

const ServicesInfoItemsMap: IServicesInfoItemsMap[] = [
  {
    id: "reparo_computadores",
    cover: coverReparo,
    altCover: "Homem segurando um processador e inserindo-o em uma placa-mãe.",
    icon: Wrench,
    buttonText: "Reparo",
    title: "Reparo de computadores",
    text: (
      <>
        <p>
          O reparo de computadores é essencial para corrigir falhas técnicas e
          manter o desempenho ideal dos dispositivos. Com manutenção adequada, é
          possível resolver problemas sem a necessidade de substituição,
          economizando tempo e recursos. Confira os serviços mais comuns:
        </p>
        <ul>
          <li>
            <b>Troca de componentes</b>: substituição de HDs, memórias, placas
            ou telas danificadas
          </li>
          <li>
            <b>Limpeza interna</b>: remoção de poeira para evitar
            superaquecimento.
          </li>
          <li>
            <b>Remoção de vírus</b>: eliminação de malwares.
          </li>
          <li>
            <b>Recuperação de dados</b>: recuperação de arquivos perdidos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "infraestrutura_redes",
    cover: coverInfra,
    altCover:
      "Cabos de rede e fibra óptica posicionados à frente de um teclado de computador.",
    icon: Globe,
    buttonText: "Infraestrutura",
    title: "Infraestrutura de redes",
    text: (
      <>
        <p>
          A infraestrutura de redes é fundamental para garantir a conectividade
          e o desempenho eficiente dos sistemas de comunicação. Com a
          configuração correta, é possível evitar falhas e melhorar a segurança
          da informação. Confira os serviços mais comuns:
        </p>
        <ul>
          <li>
            <b>Instalação de cabeamento</b>: organização e estruturação de redes
            cabeadas.
          </li>
          <li>
            <b>Configuração de roteadores</b>: ajuste de redes Wi-Fi para melhor
            cobertura.
          </li>
          <li>
            <b>Segurança de rede</b>: implementação de firewalls e criptografia.
          </li>
          <li>
            <b>Monitoramento</b>: análise de tráfego para evitar falhas e
            invasões.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cibersegurança",
    cover: coverCiberseguranca,
    altCover:
      "Mulher utilizando um notebook, com ilustrações relacionadas à segurança digital decorando a tela.",
    icon: ShieldCheck,
    buttonText: "Cibersegurança",
    title: "Cibersegurança",
    text: (
      <>
        <p>
          A cibersegurança é essencial para proteger sistemas contra ameaças
          digitais e garantir a integridade dos dados. Com as medidas adequadas,
          é possível evitar ataques e vazamentos de informações. Confira os
          serviços mais comuns:
        </p>
        <ul>
          <li>
            <b>Proteção contra malware</b>: detecção e remoção de vírus e
            spyware.
          </li>
          <li>
            <b>Criptografia de dados</b>: segurança para informações sensíveis.
          </li>
          <li>
            <b>Controle de acesso</b>: restrição de usuários não autorizados.
          </li>
          <li>
            <b>Monitoramento contínuo</b>: análise de ameaças em tempo real.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "suporte_remoto",
    cover: coverSuporte,
    altCover:
      "Homem usando um headset, sentado em frente a um notebook, participando de uma conversa remota.",
    icon: Headset,
    buttonText: "Suporte",
    title: "Suporte remoto",
    text: (
      <>
        <p>
          O suporte remoto é uma solução eficiente para resolver problemas
          técnicos sem a necessidade de deslocamento. Com atendimento ágil, é
          possível solucionar falhas rapidamente. Confira os serviços mais
          comuns:
        </p>
        <ul>
          <li>
            <b>Configuração de software</b>: instalação e ajustes de programas.
          </li>
          <li>
            <b>Resolução de erros</b>: diagnóstico e correção de falhas do
            sistema.
          </li>
          <li>
            <b>Otimização do desempenho</b>: ajustes para melhorar a velocidade.
          </li>
          <li>
            <b>Suporte a usuários</b>: orientação para uso de sistemas e
            ferramentas.
          </li>
        </ul>
      </>
    ),
  },
];

export default ServicesInfoItemsMap;
