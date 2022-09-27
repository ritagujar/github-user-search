import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const github = axios.create({
  baseURL: "https://api.github.com/",
});

const useSearch = (username) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const { data } = await github.get(`users/${username}`);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 404) {
          console.log("User Not found");
        }
      }
    };
    if (username) {
      getUser();
    } else {
      console.log("Enter name");
    }
  }, [username, navigate]);

  return [userData, setUserData, loading];
};

export default useSearch;
