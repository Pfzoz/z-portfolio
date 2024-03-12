"use client";

import styled from "styled-components";

export const MUDiv = styled.div<{ $justifyContent?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1rem;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "start"};
`;

export const MU = styled.span<{
  width: string;
  $themeColor: string;
  $active?: string;
}>`
  display: block;
  height: 0.22rem;
  width: 0;
  background-color: ${(props) => props.$themeColor};
  transition: ease-in-out 0.8s;
  ${(props) =>
    props.$active && props.$active === "true" && `width: ${props.width};`}
`;
