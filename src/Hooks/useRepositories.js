import axios from "axios";
import { useEffect, useState } from "react";

const useRepositories = (username, setRepositories) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);
  const [newer, setNewer] = useState(true);

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
        console.log(error);
      }
    };

    getRepose();
  }, [page, size, username, pageNumber, setRepositories, newer]);

  useEffect(() => {
    const url = `https://api.github.com/users/${username}`;

    const getPage = async () => {
      try {
        const { data } = await axios.get(url);
        const numberOfPage = data.public_repos / size;
        setPageNumber(Math.ceil(numberOfPage));
      } catch (error) {
        console.log(error);
      }
    };

    getPage();
  }, [size, username, page, pageNumber]);

  return { pageLoading, page, setPage, pageNumber, setNewer, newer };
};

export default useRepositories;
