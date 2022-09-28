import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
`;
export const PaginationSection = styled.div`
  button {
    height: 2rem;
    width: 2rem;
    border: 1px solid var(--color-black);
    cursor: pointer;

    &:hover {
      background-color: var(--color-golden);
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
      background: var(--color-gray);
    }

    @media screen and (max-width: 650px) {
      height: 1.5rem;
      width: 1.5rem;
      font-size: 0.6rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 6.5rem;
    font-size: 0.9rem;
    border: 1px solid var(--color-black);
    border-radius: 1.5rem;
    background: transparent;
    color: var(--color-black);
    cursor: pointer;

    &:hover {
      background-color: var(--color-golden);
      border: 1px solid var(--color-golden);
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
      background: var(--color-gray);
    }

    @media screen and (max-width: 650px) {
      height: 2rem;
      width: 6rem;
      font-size: 0.8rem;
    }
  }
`;
