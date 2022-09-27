import React from "react";
import ShowRepos from "../ShowRepositories/ShowRepos";
import { RepoContainer } from "./styles";

const Repositories = ({ repositories, pageLoading }) => {
  console.log(repositories);
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
