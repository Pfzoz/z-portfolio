"use client";

import styled from "styled-components";

export const MUDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  height: 1rem;
`;

export const MU = styled.span<{ width: string; color: string; $active?: string}>`
  display: block;
  height: 0.22rem;
  width: 0;
  align-self: flex-start;
  background-color: ${(props) => props.color};
  transition: ease-in-out 0.8s;
  ${(props) => props.$active && props.$active === "true" && `width: ${props.width};`}
`;
