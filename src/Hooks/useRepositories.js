import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useRepositories = (username, setRepositories) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);
  const [newer, setNewer] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setPageLoading(true);

    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${size}${
      newer ? "&sort=created" : ""
    }`;

    const getRepose = async () => {
      try {
        const { data } = await axios.get(url);

        if (data.length > 0) {
          setRepositories(data);
          setPageLoading(false);
        }
      } catch (error) {
        setPageLoading(false);
        navigate("/user-not-found");
        console.log(error);
      }
    };

    getRepose();
  }, [page, size, username, pageNumber, setRepositories, newer, navigate]);

  useEffect(() => {
    const url = `https://api.github.com/users/${username}`;

    const getPage = async () => {
      try {
        const { data } = await axios.get(url);
        const numberOfPage = data.public_repos / size;
        setPageNumber(Math.ceil(numberOfPage));
      } catch (error) {
        console.log(error);
        navigate("/user-not-found");
      }
    };

    getPage();
  }, [size, username, page, pageNumber, navigate]);

  return { pageLoading, page, setPage, pageNumber, setNewer, newer };
};

export default useRepositories;
