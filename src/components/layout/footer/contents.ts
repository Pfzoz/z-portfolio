import Link from "next/link";
import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  align-items: center;
  gap: 5em;
  justify-content: center;
  background-color: ${(props) => props.theme.fourth};
  border: 2px solid black;
  border-left: none;
  border-right: none;
  box-shadow: ${props => props.theme.mode === "light" ? "0 -0.2rem 0.1rem black" : "0 -0.2rem 0.1rem gray"};
`;

export const FooterButton = styled(Link)`
  &:hover {
    cursor: pointer;
    filter: drop-shadow(
      0 0 0.2rem
        ${(props) => (props.theme.mode === "light" ? "black" : "#909090")}
    );
    transition: ease-in-out 0.1s;
  }

  &:active {
    filter: drop-shadow(
      0 0 0.1rem
        ${(props) => (props.theme.mode === "light" ? "black" : "#909090")}
    );
  }
`;
