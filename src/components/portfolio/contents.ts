"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const DefaultPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.text};
  padding: 1em;

  @media screen and (max-width: 1000px) {
    width: 70%;
  }

`;

export const DefaultPostInfoP = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

export const PostsDiv = styled.div<{ $active?: string }>`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1em;
  transition: ease-in-out 0.8s;

  ${(props) => (props.$active === "true" ? "opacity: 100%" : "opacity: 0%")}
`;

export const PostsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const PostsTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (max-width: 1000px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
  }
`;

export const PostsTitle = styled(Link)`
  color: ${(props) => props.theme.text};
  font-size: 3rem;
  font-family: "Roboto Thin";
  font-weight: normal;
  text-decoration: underline;
  transition: ease-in-out 0.1s;

  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 50%);
  }

  &:active {
    color: hsl(0, 0%, 100%);
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const PostsDescription = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  text-align: justify;
`;

export const PostsImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    width: 100%;
  }
`;

export const PostsImage = styled(Image)`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 3rem;
  object-fit: cover;
  object-position: -1.5vw;
  transition: ease-in-out 0.1s;
  grid-row: 2;

  &:hover {
    cursor: pointer;
    border-color: hsl(0, 0%, 50%);
  }

  &:active {
    border-color: hsl(0, 0%, 100%);
  }

  @media screen and (max-width: 1000px) {
    width: 50vw;
    height: 50vw;
    border-radius: 8vw;
  }
`;
