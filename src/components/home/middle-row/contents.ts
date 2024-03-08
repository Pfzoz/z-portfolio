"use client";

import styled from "styled-components";

export const MidRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  width: 60%;
  padding: 4em 0;
  background-color: ${(props) => props.theme.primary};
  border-right: 0.2rem dashed rgba(0, 0, 0, 0.4);
  border-left: 0.2rem dashed rgba(0, 0, 0, 0.4);
  font-family: "Roboto Thin";
  align-items: center;
  gap: 1.3em;

  .textOff {
    opacity: 0%;
  }

  @media only screen and (max-width: 768px) {
    .default {
      border: none;
    }
  }
`;

export const Paragraph = styled.p<{ width?: string }>`
  font-size: 1.5rem;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: fit-content;
  background-color: ${(props) => props.theme.contrast};
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
  align-content: center;
`;
export const SubTitle = styled.h2<{ width?: string }>`
  font-size: 3rem;
  margin-bottom: 0.8em;
  margin-top: 2em;
  height: fit-content;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  align-content: center;
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
`;

export const NextLogo = styled.img`
margin: 1.5em 0;
  ${(props) =>
    props.theme.mode === "dark"
      ? "filter: invert(1) drop-shadow(0.1rem 0.1rem 0.2rem #ffffff)"
      : "filter: drop-shadow(0.1rem 0.1rem 0.2rem #000f00)"}
`;
