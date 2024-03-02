"use client";

import { useTheme } from "styled-components";
import { MU, MUDiv } from "./contents";
import { useEffect, useState } from "react";

export default function MovingUnderline() {
  const theme = useTheme();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, [])

  return (
    <MUDiv>
      <MU width="60%" color={theme.fourth} active={active}/>
      <MU width="40%" color={theme.secondary} active={active}/>
    </MUDiv>
  );
}
