import Link from "next/link";
import {
  MidRow,
  NewsContainer,
  NewsHeadline,
  NextLogo,
  Paragraph,
  SubTitle,
} from "./contents";

export default function MiddleRow() {
  return (
    <MidRow>
      <SubTitle style={{ marginTop: 0 }} id="welcomeSection">
        Bem vindo meu blog!
      </SubTitle>
      <Paragraph width="80%">
        Olá, eu sou Pedro Henrique Ferreira Zoz, um estudante de gradução do
        curso Ciência da Computação, localizado na Unioeste (Universidade
        Estadual do Oeste do Paraná, Brasil). Minha natureza sempre foi criar, e
        a programação possibilitou um rumo para esta natureza.
      </Paragraph>
      <Paragraph width="80%">
        Atualmente escolhi como foco de minha carreira a área de Aprendizado de
        Máquina, onde os métodos matemáticos por baixo sempre me cativam. No
        entanto, procuro sempre expandir minhas habilidades para as mais
        variadas áreas, de web dev até game dev, além de outras ideias.
      </Paragraph>
      <Paragraph width="80%">
        Fique livre para explorar neste blog meus projetos e atualizações!
      </Paragraph>
      <SubTitle id="projectSection">Projeto Atual</SubTitle>
      <Paragraph width="80%">
        Atualmente estou trabalhando... neste blog! Usando a framework NextJS e
        outras tecnologias como o Styled Components estou criando
        esse website para expor meus projetos.
      </Paragraph>
      <NextLogo src="/images/next-js-logo.png" />
      <Paragraph width="80%">
        NextJS é uma framework baseada em React que possibilita uma estrutura de
        código mais organizada e flexível. Um de seus grandes pontos é seu App
        Router, que permite organizar diferentes rotas em diretórios específicos
        do projeto.
      </Paragraph>
      <SubTitle id="newsSection">Novidades</SubTitle>
      <NewsContainer>
        <NewsHeadline width="80%">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={"/portfolio/fat16"}
          >
            Eu criei um explorador de sistemas de arquivos em FAT16!
          </Link>
        </NewsHeadline>
        <Paragraph width="80%">
          Este projeto desenvolvido dentro da matéria de Sistemas Operacionais
          consiste em um código capaz de navegar por uma imagem de um sistema de
          arquivos em formato FAT16. Foi uma experiência em tanto estruturar um
          algoritmo para um sistema que já se encontrou e muitas vezes ainda se
          encontra presente em milhares de dispositivos.
        </Paragraph>
      </NewsContainer>
    </MidRow>
  );
}
