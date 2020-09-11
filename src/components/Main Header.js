import React from "react";
import styled from "styled-components";

const Header = () => {
  const StyledHeader = styled.div`
    color: white;
    font-size: 50px;

    h1 {
      color: darkcyan;
      text-shadow: 2px 5px yellowgreen;
    }
  `;

  return (
    <StyledHeader className="poke-header">
      <h1> What is that Pokemon! </h1>
    </StyledHeader>
  );
};

export default Header;
