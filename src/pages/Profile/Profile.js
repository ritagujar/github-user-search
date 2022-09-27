import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRepositories from "../../Hooks/useRepositories";
import useSearch from "../../Hooks/useSearch";
import Repositories from "../Repository/Repositories";
import ShowUsers from "../ShowUsers/ShowUsers";

const Profile = () => {
  const { username } = useParams();

  const [repositoryData, setReposotoryData] = useState([]);

  const [userData] = useSearch(username);
  const { pageLoading } = useRepositories(username, setReposotoryData);

  // console.log(userData);

  return (
    <div className="container ">
      <ShowUsers userData={userData} />
      <Repositories pageLoading={pageLoading} repositories={repositoryData} />
    </div>
  );
};

export default Profile;
