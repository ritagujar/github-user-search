import styled from "styled-components";

export const RepoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
