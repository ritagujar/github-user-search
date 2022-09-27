import styled from "styled-components";

export const RepoSection = styled.div`
  border: 1px solid black;
  padding: 10px;
  font-family: var(--font-alt);

  button {
    height: fit-content;
    width: fit-content;
    border: 1px solid black;
    padding: 10px;
    margin: 2px;
    background-color: var(--color-golden-light);
    color: var(--color-black);
  }

  a {
    text-decoration: none;
    h2 {
      color: var(--color-black);

      font-weight: 600;
    }
  }

  p {
    margin: 10px 0;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div``;
