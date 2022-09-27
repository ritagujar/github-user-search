import React from "react";
import { BioSeaction, HeaderSection, ImageSection } from "./styles";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiLink2 } from "react-icons/fi";

const ShowUsers = ({ userData }) => {
  const { avatar_url, name, location, twitter_username, bio, url } = userData;

  return (
    <HeaderSection>
      <ImageSection>
        <img src={avatar_url} alt="profile" />
        <p>
          <span>
            {" "}
            <FiLink2 />
          </span>
          {url}
        </p>
      </ImageSection>
      <BioSeaction>
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>
          <span>
            <IoLocationSharp />
          </span>
          {location}
        </p>
        {twitter_username && (
          <p>
            <span>
              {" "}
              <AiOutlineTwitter />
            </span>{" "}
            https://twitter.com/{twitter_username}
          </p>
        )}
      </BioSeaction>
    </HeaderSection>
  );
};

export default ShowUsers;
