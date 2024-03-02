import { Paragraph, SubTitle } from "@/components/text/contents";
import { MidRow } from "./contents";

export default function MiddleRow() {
  return (
    <MidRow>
      <SubTitle>Bem vindo meu blog!</SubTitle>
      <Paragraph width="80%">
        Olá, eu sou Pedro Henrique Ferreira Zoz, um estudante de gradução do
        curso Ciência da Computação, localizado na Unioeste (Universidade Estadual do Oeste
        do Paraná, Brasil). Minha natureza sempre foi criar, e a programação
        possibilitou um rumo para esta natureza.
      </Paragraph>
      <Paragraph width="80%">
        Atualmente escolhi como foco de minha carreira a área de Aprendizado de
        Máquina, onde os métodos matemáticos por baixo sempre me cativam. No entanto, procuro sempre expandir minhas habilidades para as mais
        variadas áreas, de web dev até game dev, além de outros projetos.
      </Paragraph>
      <Paragraph width="80%">
        Fique livre para explorar neste blog meus projetos e atualizações!
      </Paragraph>
    </MidRow>
  );
}
