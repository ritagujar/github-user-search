import React from "react";
import useRepositories from "../../Hooks/useRepositories";
import {
  PaginationSection,
  PaginationContainer,
  ButtonContainer,
} from "./styles";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ username, setRepositories }) => {
  const { page, setPage, pageNumber, setNewer, newer } = useRepositories(
    username,
    setRepositories
  );

  return (
    <PaginationContainer>
      <PaginationSection>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          {" "}
          «
        </button>
        {pageNumber &&
          [...Array(pageNumber).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number + 1)}
              className={`${page === number + 1 ? "active" : "none"}`}
            >
              {number + 1}
            </button>
          ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pageNumber ? true : false}
        >
          »
        </button>
      </PaginationSection>
      <ButtonContainer>
        <button onClick={() => setNewer(false)} disabled={newer ? false : true}>
          {" "}
          <BsArrowLeft style={{ marginRight: "10px" }} />
          Older
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => setNewer(true)}
          disabled={newer ? true : false}
        >
          Newer
          <BsArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </ButtonContainer>
    </PaginationContainer>
  );
};

export default Pagination;
