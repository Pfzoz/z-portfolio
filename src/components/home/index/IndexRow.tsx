import { IndexDiv, IndexEntry, IndexFixDiv, IndexTitle } from "./contents";

export default function IndexRow() {
  return (
    <IndexDiv>
      <IndexFixDiv>
        <IndexTitle>Index</IndexTitle>
        <IndexEntry href="#welcomeSection">Bem Vindo</IndexEntry>
        <IndexEntry href="#projectSection">Projeto Atual</IndexEntry>
      </IndexFixDiv>
    </IndexDiv>
  );
}
