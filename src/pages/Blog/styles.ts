import styled from "styled-components";

export const PostListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr)); //responsivo automatico, basicamente ele tem o auto-fit, que vai dar o resize nele, de acordo com o minimo ta tela permitido
  gap: 2rem;
  margin-bottom: 14rem;
`