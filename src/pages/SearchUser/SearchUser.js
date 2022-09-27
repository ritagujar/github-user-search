import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputSection } from "./styles";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const inputText = event.target.username.value;
    if (username) {
      navigate(`/${inputText}`);
    } else {
      alert("Please Enter username");
    }
    event.target.reset();
  };

  return (
    <div>
      <InputSection>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </InputSection>
    </div>
  );
};

export default SearchUser;
