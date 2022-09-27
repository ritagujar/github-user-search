import styled from "styled-components";

export const HeaderSection = styled.div`
  padding: 1rem;
  border: 1.5px dotted var(--color-golden);
  margin: 0.7rem 0;
  display: flex;
  flex-direction: row;
  padding-left: 3rem;
  /* justify-content: space-evenly; */
`;

export const ImageSection = styled.div`
  img {
    height: 9rem;
    border-radius: 50%;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-black);
    span {
      padding-top: 3px;
      padding-right: 5px;
    }
  }
`;

export const BioSeaction = styled.div`
  h1 {
    font-size: 1.8rem;
    font-family: var(--font-alt);
    font-weight: 600;
  }

  p {
    margin-top: 5px;
  }

  span {
    padding-top: 9px;
    padding-right: 5px;
  }
`;
