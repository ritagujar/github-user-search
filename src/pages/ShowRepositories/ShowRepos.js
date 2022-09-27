import React from "react";
import { RepoSection } from "./styles";

const ShowRepos = ({ repository }) => {
  const { name, description, topics, html_url } = repository;

  return (
    <RepoSection>
      <a href={html_url}>
        <h2>{name}</h2>
      </a>
      <p>{description}</p>

      {topics.map((topic, index) => {
        return <button key={index}>{topic}</button>;
      })}
    </RepoSection>
  );
};

export default ShowRepos;
