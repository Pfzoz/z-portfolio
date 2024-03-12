import ClusterTable from "@/components/portfolio/fat16/ClusterTable";
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
import FATTable from "@/components/portfolio/fat16/FATTable";
import {
  DefaultPostInfo,
  DefaultPostInfoP,
} from "@/components/portfolio/contents";
import BRStruct from "@/components/portfolio/fat16/BRStruct";
import Image from "next/image";
import Link from "next/link";
import { Fat16Gif, Fat16Link } from "@/components/portfolio/fat16/contents";

export default function Fat16() {
  return (
    <MainContainer>
      <div>
        <Title>FAT16</Title>
      </div>
      <DefaultPostInfo>
        <DefaultPostInfoP>Data: 09/03/2024</DefaultPostInfoP>
        <DefaultPostInfoP>Tags: C, Sistemas Operacionais</DefaultPostInfoP>
      </DefaultPostInfo>
      <CodeDiv style={{ marginTop: "1em" }}>
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
        Sistemas de arquivos em sistemas operacionais são de suma importância e,
        normalmente, o plano de visão mais comum ao usuário de um sistema. São
        eles os responsáveis por estruturar os dados armazenados na memória
        secundária, garantir eficiência e acesso aos arquivos.
      </Paragraph>
      <SubTitle>File Allocation Table (FAT)</SubTitle>
      <Paragraph>
        O sistema de arquivos FAT foi originalmente desenvolvido como o sistema
        de arquivos para disquetes por volta de 1977, mas logo se tornou o
        sistema de arquivos para os sistemas operacionais MS-DOS e Windows 95.
      </Paragraph>
      <Paragraph>
        Sua estrutura é relativamente simples, consistindo de tabelas
        denominadas {`"tabelas de alocação de arquivos"`}, ou FAT. Essas tabelas
        consistem de entradas para regiões da memória que chamamos de clusters.
        Cada cluster é composto por um ou mais setores do disco, nota-se que
        cada disco físico possuí setores de tamanhos diferentes, mas normalmente
        seguem um padrão de 512 bytes. <br /> Mas o tamanho máximo de um arquivo
        claramente não pode ser 512 bytes, por isso ele pode compor diversos
        clusteres, e para descobrir os clusteres basta utilizar o cluster
        inicial como índice na tabela FAT, onde estará o segundo cluster, e
        assim em diante até encontrar o valor 0xFF, que dita que não há mais
        clusters para aquele arquivo.
      </Paragraph>
      <Paragraph>
        Ao reunir cada cluster de forma ordenada, basta utilizar esses valores
        na região de dados definida pelo sistema de arquivos. Na tabela a
        seguir, é possível ver um exemplo desse procedimento.
      </Paragraph>
      <ClusterTable />
      <Paragraph>
        Neste caso, se o primeiro cluster de um arquivo fosse 0x00, então seu
        último cluster seria 0x04.
      </Paragraph>
      <SubTitle>Estrutura FAT & Boot Record</SubTitle>
      <Paragraph>
        Mas onde encontramos essa tabela FAT na memória pra começo de conversa?
        E as informações do arquivo, como seu primeiro cluster? É ai que entra o{" "}
        <span style={{ fontWeight: "bold" }}>Boot Record</span>. Mas antes,
        vamos observar a figura a seguir, para termos uma noção de como um
        sistema de arquivos FAT é organizado.
      </Paragraph>
      <FATTable />
      <Paragraph>
        Como podemos ver, o sistema operacional tem uma garantia: o Boot Record
        é a estrutura de dados que sempre estará no ínicio da memória. É
        justamente por isso que o Boot Record serve de armazenamento das
        informações cruciais para o sistema. Entre elas o Boot Record dita a
        quantidade de tabelas FAT, sendo que as extras são cópias de garantia; a
        quantidade de setores reservados que precisamos pular para alcançarmos
        as tabelas FAT, e assim por diante.
      </Paragraph>
      <SubTitle>Diretório Raiz & Dados</SubTitle>
      <Paragraph>
        Após lermos o Boot Record e nos localizarmos dentro da memória, podemos
        começar a vasculhar os arquivos. Mas por onde começamos? Afinal não
        sabemos o cluster inicial de nenhum arquivo nem mesmo seu nome.
      </Paragraph>
      <Paragraph>
        Para realizar essa tarefa precisamos fazer uso do{" "}
        <span style={{ fontWeight: "bold" }}>Diretório Raíz</span>. Essa
        estrutura de dados que fica logo após as tabelas FAT constitui de
        entradas de diretórios. Cada uma dessas entradas é uma estrutura de
        dados que nos dá o nome, tamanho, primeiro cluster, entre outras
        informações do arquivo.
      </Paragraph>
      <Paragraph>
        Conseguimos! Para explorar os arquivos, basta ler o Boot Record,
        conseguir a localização do Diretório Raíz, ler todas as entradas, voltar
        para Tabela FAT, achar todos os clusters do arquivo, e então seguir para
        área de Dados, que fica após o Diretório Raíz. Então é só usar os
        clusters do arquivo para conseguir os offset das regiões de memória do
        arquivo.
      </Paragraph>
      <SubTitle>Um Leitor de FAT16 em C</SubTitle>
      <Paragraph>
        Para minha implementação de um leitor de FAT16, utilizei a linguagem de
        programação C, que por mais que baixo nível, acabou facilitando as
        coisas.
      </Paragraph>
      <Paragraph>
        Struct no C possibilita criar uma estrutura de dados parecida com uma
        classe com diferentes parâmetros, ou um dicionário. Mas o importante é
        que como qualquer outro tipo em C, pode receber um valor equivalente ao
        seu tamanho. Então podemos ler diretamente do arquivo todas as
        informações do Boot Record com um simples fread(&boot_record_struct,
        ...) com a struct certa. Em seguida temos a estrutura que representa o
        Boot Record.
      </Paragraph>
      <BRStruct />
      <Paragraph>
        Aqui tivemos que utilizar o __attribute__((packed)) do C, devido ao fato
        da linguagem sempre sempre ter um tamanho fixo de 1 byte que serve para
        evitar falhas na cache. Se não fizermos isso, podemos pegar lixo de
        memória já que o C verá toda variável como 1 byte inteiro.
      </Paragraph>
      <Paragraph>
        Depois disso foi só criar uma struct similar, mas para as entradas do
        Diretório Raíz, ler todas entradas, guardar as informações, e deixar o
        usuário ler o arquivo que desejasse:
      </Paragraph>
      <Fat16Gif
        src="/images/fat16-running.gif"
        width={1920}
        height={1080}
        alt="fat16 code running"
      ></Fat16Gif>
      <Paragraph>
        Todo o código fonte esta disponível repositório do meu{" "}
        <Fat16Link href={"https://github.com/Pfzoz/Fat16"}>github</Fat16Link>.
        Também deixo as referências úteis do formato FAT16.
      </Paragraph>
      <Paragraph style={{ fontWeight: "bold" }}>Referências</Paragraph>
      <Paragraph>
        <Fat16Link href={"https://wiki.osdev.org/FAT"}>
          https://wiki.osdev.org/FAT
        </Fat16Link>
      </Paragraph>
    </MainContainer>
  );
}
