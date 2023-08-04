import React from "react";
import { StyledSocialMediaElement } from "./style";

const SocialMediaElement = ({ url, icon, name }) => {
  return (
    <StyledSocialMediaElement className="social-media-element">
      <button>
        <img src={icon} alt={name} />
      </button>
    </StyledSocialMediaElement>
  );
};

export default SocialMediaElement;
