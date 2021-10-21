import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Anywhere Fitness</StyledHeaderTitle>
      <StyledUl>
        <li>
          <Styledlink href='#'>Dashboard</Styledlink>
        </li>
        <li>
          <Styledlink href='#'>Classes</Styledlink>
        </li>
        <li>
          <Styledlink href='#'>Contact Us</Styledlink>
        </li>
        <li>
          <Styledlink href='#'>Log Out</Styledlink>
        </li>
      </StyledUl>
    </StyledHeader>
  );
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (min-width: 769px) {
    display: flex;
    display: none;
  }
`;

const Styledlink = styled.a`
  font-size: 0.99em;
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
`;

const StyledHeader = styled.div`
  background-color: black;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHeaderTitle = styled.span`
  font-size: 2rem;
  color: white;
  text-align: center;
  display: block;
`;
