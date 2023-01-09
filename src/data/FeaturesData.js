import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = {
  title: "Nós oferecemos",
  options: [
    {
      name: "Melhor segurança",
      description: "Nós oferecemos a melhor securança para nossos clientes",
      icon: iconStyle(BsFillShieldLockFill),
      imgClass: "one",
    },
    {
      name: "Facilidade",
      description: "Sistema fácil e simples de usar e integrar",
      icon: iconStyle(IoIosOptions),
      imgClass: "two",
    },
    {
      name: "Manutenção",
      description: "Código escrito com o melhor padrão, o que faz ser altamente sustentável",
      icon: iconStyle(GrHostMaintenance),
      imgClass: "three",
    },
    {
      name: "Suporte 24/7",
      description: "Nosso time sempre disponível para você",
      icon: iconStyle(BiSupport),
      imgClass: "four",
    },
    {
      name: "Preço",
      description: "Melhor custo/benefício do mercado",
      icon: iconStyle(BiDollar),
      imgClass: "five",
    },
    {
      name: "Escalabilidade",
      description: "Você cresce, nós suprimos a demanda, com servidores distribuidos em todo globo",
      icon: iconStyle(AiOutlineCloudUpload),
      imgClass: "six",
    },
  ],
};
