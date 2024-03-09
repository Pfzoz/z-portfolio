"use client";

import styled, { css, keyframes } from "styled-components";

const typing = keyframes`
  from { 
    width: 0em;
    border-right: 0.1rem solid;
  };
  to { 
    width: 100%;
    border-right: 0.1rem solid;
  }
`;

const typingBorderless = keyframes`
  from { 
    width: 0em;
  };
  to { 
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 0.8em;
  margin-top: 1em;
  align-content: center;
  font-weight: normal;
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
  overflow: hidden;
  white-space: nowrap;
  margin: 1em auto;
  width: fit-content;
  border-right: 0.1rem solid transparent;
  animation: ${typing};
  animation-duration: 3.5s;
`;

export const SubTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 0.8em;
  margin-top: 1em;
  align-content: center;
  font-weight: normal;
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
`

export const CodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1em;
  min-height: 80%;
  background-color: black;
  font-family: "Roboto Thin";
  font-size: 1.5em;
  justify-content: start;
  align-items: start;
  align-self: flex-start;
  margin-left: 2em;
  border: 1px solid ${(props) => props.theme.third};
`;

export const CodeText = styled.p<{ $active?: string }>`
  color: lightgreen;
  font-size: 1.5rem;
  margin-top: 0.8em;
  font-family: "Roboto Thin";
  font-weight: normal;
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingBorderless} 6s steps(85, end);
`;


export const CodeInceptionText = styled(CodeText)`
  white-space: normal;
  max-height: 5em;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }
`

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  font-family: "Roboto Thin";
  font-size: 1.5em;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 80%;
  width: 100%;
`;

export const Paragraph = styled.p<{ width?: string }>`
  font-size: 1.6rem;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: fit-content;
  background-color: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
  align-content: center;
  margin: 1.5em 0;
  width: 80%;
`;

export const FatContent = `import { CodeDiv, CodeText, MainContainer, Title } from "./contents";

export default function Fat16() {

  return (
    <MainContainer>
      <div>
        <Title>FAT16</Title>
      </div>
      <CodeDiv>
        <CodeText>=== INICIALIZANDO FAT 16 ===</CodeText>
        <CodeText>
          Buscando entradas do diretório root...
        </CodeText>
        <CodeText>Entrada encontrada!</CodeText>
        <div>
          <CodeText>== ENTRADA: {"'FAT16.tsx'"} ==</CodeText>
          <CodeText>nome_arquivo: {"'FAT16.tsx'"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>atributos: {"0x32"} (arquivo)</CodeText>
          <CodeText style={{ marginTop: 0 }}>reservado_windows_nt: {"0x0"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>tempo_criação: {"99"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>hora_criada: {"48461"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>data_criada: {"22632"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>ultimo_acesso: {"22632"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>msb_cluster: {"0"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>ultima_modificacao_tempo: {"48092"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>ultima_modificacao_data: {"48092"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>lsb_cluster: {"4"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>tamanho_arquivo: {"752B"}</CodeText>
        </div>
        <CodeText>======================</CodeText>
        <CodeText>Encontrando clusters: [ 4 ]</CodeText>
        <CodeText>Montando arquivo...</CodeText>
        <CodeText>Arquivo montado!</CodeText>
        <CodeText>FAT16.tsx:</CodeText>
        <CodeInceptionText>Glitch no matrix 0.0</CodeInceptionText>
      </CodeDiv>
    </MainContainer>
  );
}
`