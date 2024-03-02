import { IndexDiv, IndexEntry, IndexFixDiv, IndexTitle } from "./contents";

export default function IndexRow() {
  return (
    <IndexDiv>
      <IndexFixDiv>
        <IndexTitle>Index</IndexTitle>
        <IndexEntry>Welcome</IndexEntry>
      </IndexFixDiv>
    </IndexDiv>
  );
}
