import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../compoents/Loader/Loader";
import Pagination from "../../compoents/Pagination/Pagination";
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

  if (pageLoading) return <Loader />;

  return (
    <div className="container ">
      <Link to="/" className="btn ">
        {" "}
        Back to Search
      </Link>
      <ShowUsers userData={userData} />
      <Repositories pageLoading={pageLoading} repositories={repositoryData} />
      <Pagination username={username} setRepositories={setReposotoryData} />
    </div>
  );
};

export default Profile;
