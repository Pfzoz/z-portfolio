import Link from "next/link";
import {
  PostsDescription,
  PostsImage,
  PostsImageDiv,
  PostsRow,
  PostsTextDiv,
  PostsTitle,
} from "./contents";

export default function PortfolioPost({
  imageSrc,
  title,
  description,
  href,
  alt,
}: {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  alt?: string;
}) {
  return (
    <PostsRow>
      <PostsImageDiv>
        <Link href={href}>
          <PostsImage
            alt={alt ? alt : title + " image"}
            src={imageSrc}
            width={400}
            height={400}
          ></PostsImage>
        </Link>
      </PostsImageDiv>
      <PostsTextDiv>
        <PostsTitle href={href}>{title}</PostsTitle>
        <PostsDescription>{description}</PostsDescription>
      </PostsTextDiv>
    </PostsRow>
  );
}
