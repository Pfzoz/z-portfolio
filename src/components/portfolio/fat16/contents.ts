"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ClusterStyledTable = styled.table`
  border: 1px solid ${(props) => props.theme.text};
  width: 30%;
  padding: 0.5em;
  font-family: "Roboto Thin";
  font-size: 1.5em;
  color: ${(props) => props.theme.text};
`;

export const FATTableDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px dashed ${(props) => props.theme.text};
  font-family: "Roboto Thin";
  font-size: 2rem;
  padding: 1em;
  gap: 1em;
  max-width: 80%;
  height: fit-content;
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 1420px) {
    flex-direction: column;
  }
`;

export const FATTableBlock = styled.div`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
`;

export const StructCodePre = styled.pre`
  width: 80%;
  font-size: 1.4rem;
  color: seagreen;
  background-color: black;
  border: 5px solid ${(props) => props.theme.fourth};

  @media screen and (max-width: 1000px) {
    font-size: 0.7rem;
  }

`;

export const Fat16Gif = styled(Image)`
  border: 2px solid ${(props) => props.theme.text};
  width: 80vw;
  height: 60vw;
  max-width: 1920px;
  max-height: 1080px;

  @media screen and (max-width: 1000px) {
    width: 70vw;
    height: 70vw;
  }

`;

export const Fat16Link = styled(Link)`
  text-decoration: none underline;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.fourth};
  }

  &:active {
    color: ${(props) => props.theme.text};
  }
`;
