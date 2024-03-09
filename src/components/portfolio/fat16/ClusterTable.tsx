import { ClusterStyledTable } from "./contents";

export default function ClusterTable() {
  return (
    <ClusterStyledTable>
      <thead>
        <tr>
          <th>Entrada</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0x00</td>
          <td>0x01</td>
        </tr>
        <tr>
          <td>0x01</td>
          <td>0x02</td>
        </tr>
        <tr>
          <td>0x02</td>
          <td>0x03</td>
        </tr>
        <tr>
          <td>0x03</td>
          <td>0x04</td>
        </tr>
        <tr>
          <td>0x04</td>
          <td>0xFF</td>
        </tr>
      </tbody>
    </ClusterStyledTable>
  );
}
