import React from "react";
// import Loader from "../../compoents/Loader/Loader";
import ShowRepos from "../ShowRepositories/ShowRepos";
import useSearch from "../../Hooks/useSearch";
import { RepoContainer } from "./styles";

const Repositories = ({ repositories, pageLoading }) => {
  // console.log(repositories);

  const { loading } = useSearch();

  console.log(loading);
  console.log(pageLoading);

  // if (loading & pageLoading) return <Loader />;

  return (
    <div className="card">
      <RepoContainer>
        {repositories.map((repository) => (
          <ShowRepos key={repository.id} repository={repository} />
        ))}
      </RepoContainer>
    </div>
  );
};

export default Repositories;
