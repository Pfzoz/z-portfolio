import MovingUnderline from "@/components/reusable/MovingUnderline";
import { AboutMain, AboutTitle } from "./contents";

export default function About() {
  return (
    <AboutMain>
      <AboutTitle>About</AboutTitle>
      <MovingUnderline widthFactor={40} justifyContent={"right"} />
    </AboutMain>
  );
}
