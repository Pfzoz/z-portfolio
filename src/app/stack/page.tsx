import MovingUnderline from "@/components/reusable/MovingUnderline";
import { StackMain, StackTitle } from "./contents";

export default function Stack() {
  return <StackMain>
    <StackTitle>Stack</StackTitle>
    <MovingUnderline widthFactor={50} justifyContent='center'/>
  </StackMain>;
}
