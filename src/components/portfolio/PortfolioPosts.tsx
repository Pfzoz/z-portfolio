"use client";

import { useEffect, useState } from "react";
import {
  PostsDescription,
  PostsDiv,
  PostsImage,
  PostsRow,
  PostsTextDiv,
  PostsTitle,
} from "./contents";
import Link from "next/link";
import PortfolioPost from "./PortfolioPost";

export default function PortfolioPosts() {
  const [active, setActive] = useState("false");
  useEffect(() => {
    setActive("true");
  }, []);
  return (
    <PostsDiv $active={active}>
      <PortfolioPost
        imageSrc="/images/FAT.png"
        title="Um Leitor de FAT16 em C"
        href="/portfolio/fat16"
        description="Nesse projeto que fez parte da minha disciplina de Sistemas Operacionais
        , meu objetivo foi criar um leitor de sistemas de arquivos em format FAT16. 
        Foi ótimo para relembrar o comforto de programar em C para tarefas low-level, 
        e aprender muito sobre sistemas de arquivos."
      ></PortfolioPost>
    </PostsDiv>
  );
}
