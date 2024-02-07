import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import ToggleFavorite from "./ToggleFavorite";

const StyledHeader = styled.header`
  background-color: #fff; /* Set your desired background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust values as needed */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.6rem;
`;
const StyledNav = styled(NavLink)`
  border: none;
  background-color: white;
  margin-left: 10rem;
`;

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Header({ children, ...rest }: HeaderProps) {
  const loc = useLocation();
  const isFavPage = Boolean(loc.pathname === "/favorites");

  return (
    <StyledHeader>
      {children}
      <StyledNav to={isFavPage ? "/homepage" : "/favorites"}>
        <ToggleFavorite isFavorite={isFavPage} />
      </StyledNav>
    </StyledHeader>
  );
}
