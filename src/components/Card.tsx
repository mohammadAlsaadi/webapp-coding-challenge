import React from "react";
import styled from "styled-components";
import ToggleFavorite from "./ToggleFavorite";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/favoritesContext";

interface User {
  login: string;
  avatar_url: string;
  id: number;
  // Add other properties as needed
}

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const navigate = useNavigate();
  const { favList, dispatch } = useFavorites();

  const isUserFavorited = Boolean(
    favList.find((userfav) => userfav.login === user.login)
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
