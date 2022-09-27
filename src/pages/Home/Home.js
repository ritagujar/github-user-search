import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import { HeaderSection } from "./styles";

const Home = () => {
  return (
    <HeaderSection>
      <h1>Welcome to Github User Search</h1>
      <p>Please Enter the username Ex /ritagujar</p>
      <SearchUser />
    </HeaderSection>
  );
};

export default Home;
