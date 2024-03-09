import {
  CodeDiv,
  CodeInceptionText,
  CodeText,
  FatContent,
  MainContainer,
  Paragraph,
  SubTitle,
  Title,
} from "./contents";

export default function Fat16() {
  return (
    <MainContainer>
      <div>
        <Title>FAT16</Title>
      </div>
      <CodeDiv>
        <CodeText>=== INICIALIZANDO FAT 16 ===</CodeText>
        <CodeText>Buscando entradas do diretório root...</CodeText>
        <CodeText>Entrada encontrada!</CodeText>
        <div>
          <CodeText>== ENTRADA: {"'FAT16.tsx'"} ==</CodeText>
          <CodeText>nome_arquivo: {"'FAT16.tsx'"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>
            atributos: {"0x32"} (arquivo)
          </CodeText>
          <CodeText style={{ marginTop: 0 }}>
            reservado_windows_nt: {"0x0"}
          </CodeText>
          <CodeText style={{ marginTop: 0 }}>tempo_criação: {"99"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>hora_criada: {"48461"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>data_criada: {"22632"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>ultimo_acesso: {"22632"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>msb_cluster: {"0"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>
            ultima_modificacao_tempo: {"48092"}
          </CodeText>
          <CodeText style={{ marginTop: 0 }}>
            ultima_modificacao_data: {"48092"}
          </CodeText>
          <CodeText style={{ marginTop: 0 }}>lsb_cluster: {"4"}</CodeText>
          <CodeText style={{ marginTop: 0 }}>
            tamanho_arquivo: {"752B"}
          </CodeText>
        </div>
        <CodeText>======================</CodeText>
        <CodeText>Encontrando clusters: [ 4 ]</CodeText>
        <CodeText>Montando arquivo...</CodeText>
        <CodeText>Arquivo montado!</CodeText>
        <CodeText>FAT16.tsx:</CodeText>
        <CodeInceptionText>{FatContent}</CodeInceptionText>
      </CodeDiv>
      <SubTitle>Sistemas de Arquivos</SubTitle>
      <Paragraph>
        Sistemas de arquivos em sistemas operacionais são de suma importância.
        São responsáveis por manipular os dados da memória secundária, garantir eficiência,
      </Paragraph>
    </MainContainer>
  );
}
