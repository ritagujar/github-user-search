import React from "react";
import { InputSection } from "./styles";

const SearchUser = () => {
  const submitHanlder = () => {};

  return (
    <div>
      <InputSection>
        <form action="" onSubmit={submitHanlder}>
          <input type="text" placeholder="username" />
          <button>Search</button>
        </form>
      </InputSection>
    </div>
  );
};

export default SearchUser;
