import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
    url: "https://Facebook.com",
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
    url: "https://Instagram.com",
  },
  {
    name: "YouTube",
    icon: iconStyle(FaYoutube),
    url: "https://YouTube.com",
  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
    url: "https://Twitter.com",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    url: "https://LinkedIn.com",
  },
];

export const footerData = [
  {
    title: "Principal",
    links: ["Blog", "FAQs", "Suporte", "Sobre nós"],
  },
  {
    title: "Produto",
    links: ["Login", "Pessoal", "Empresa", "Equipe"],
  },
  {
    title: "Imprensa",
    links: ["Logos", "Eventos", "Histórias"],
  },
  {
    title: "Legal",
    links: ["LGPT", "Política de Privacidade", "Termos de Serviços"],
  },
];
