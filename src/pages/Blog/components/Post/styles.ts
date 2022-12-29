import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)` // Quando clico em determinado post, ele na verdade é um link, e me redireciona para o caminho que desejo
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]};
  border: 2px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1; // vai ocupar o maximo que tiver para ele ocupar, mesmo se o conteudo dele não for tão grande assim
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content; // vai ocupar o máximo do tamanho do conteudo dele
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  p {
    overflow: hidden; // vai fazer o texto não ser entregue inteiro, e cortado caso preciso
    text-overflow: ellipsis; // vai deixar os 3 pontinhos
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; // passou de quatro linhas, o overflow hidden tem efeito
  }
`;
