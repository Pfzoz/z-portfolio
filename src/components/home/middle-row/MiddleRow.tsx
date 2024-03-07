import { MidRow, NextLogo, Paragraph, SubTitle } from "./contents";

export default function MiddleRow() {
  return (
    <MidRow>
      <SubTitle style={{marginTop: 0}} id="welcomeSection">Bem vindo meu blog!</SubTitle>
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
        outras tecnologias como o Material UI e Styled Components estou criando
        esse website para expor meus projetos.
      </Paragraph>
      <NextLogo src="/images/next-js-logo.png" />
      <Paragraph width="80%">
        NextJS é uma framework baseada em React que possibilita uma estrutura de
        código mais organizada e flexível. Um de seus grandes pontos é seu App
        Router, que permite organizar diferentes rotas em diretórios específicos
        do projeto.
      </Paragraph>
      <SubTitle id="feedSection">Feed</SubTitle>
    </MidRow>
  );
}
