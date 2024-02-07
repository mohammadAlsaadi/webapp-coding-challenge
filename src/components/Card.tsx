import React from "react";
import styled from "styled-components";
import ToggleFavorite from "./ToggleFavorite";
import { useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/favoritesContext";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  isFavorit: boolean;
}

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const navigate = useNavigate();
  const { favList } = useFavorites();
  const path = useLocation();
  const pagePath = path.pathname;
  const id = pagePath === "/favorites" ? Number(user.login) : user.id;
  console.log(id);
  const isUserFavorited = Boolean(
    Number(favList.find((userFav) => userFav.login)?.login) === id
  );

  return (
    <>
      <StyledCard onClick={() => navigate(`/detail/${user.id}`)}>
        <StyledImg
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          width={35}
          height={35}
        />
        <CardContent>
          <P>@{user.login}</P>

          <ToggleFavorite isFavorite={isUserFavorited} />
        </CardContent>
      </StyledCard>
    </>
  );
};

export default Card;

const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  background-color: white;
  padding: 10px;
  height: 25px;
  border-bottom: 0.5px solid;
  border-color: #d5d5d5;
  &:hover {
    background-color: #f7f6f6;
  }
`;

const StyledImg = styled.img`
  border-radius: 2rem;
  margin-right: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const P = styled.p`
  font-size: small;
`;
