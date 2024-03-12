"use client";

import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { MU, MUDiv } from "./contents";

export default function MovingUnderline({
  widthFactor,
  $justifyContent,
}: {
  widthFactor: number;
  $justifyContent: string;
}) {
  const theme = useTheme();
  const [active, setActive] = useState("false");
  useEffect(() => {
    setActive("true");
  }, []);

  return (
    <MUDiv $justifyContent={$justifyContent}>
      <MU
        width={`${widthFactor}%`}
        $themeColor={theme.fourth}
        $active={active}
      />
      <MU
        width={`${100 - widthFactor}%`}
        $themeColor={theme.secondary}
        $active={active}
      />
    </MUDiv>
  );
}
