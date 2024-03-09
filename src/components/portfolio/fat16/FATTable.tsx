import { FATTableBlock, FATTableDiv } from "./contents";

export default function FATTable() {
  return (
    <FATTableDiv>
      <FATTableBlock>Boot Record</FATTableBlock>
      <FATTableBlock>Setores Reservados ...</FATTableBlock>
      <FATTableBlock>Tabela FAT</FATTableBlock>
      <FATTableBlock>Tabela FAT (Cópias) ...</FATTableBlock>
      <FATTableBlock>Diretório Raíz</FATTableBlock>
      <FATTableBlock>Dados</FATTableBlock>
    </FATTableDiv>
  );
}
