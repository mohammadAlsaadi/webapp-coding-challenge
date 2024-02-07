import React from "react";
import Header from "../components/Header";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Card from "../components/Card";
import { useUsers } from "../hooks/useUsers";
import Loading from "../components/Loading";
import { useFavorites } from "../context/favoritesContext";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  isFavorit: boolean;
}

export default function FavoritesPage() {
  const moveBack = useMoveBack();
  const { isLoading } = useUsers();
  const { favList } = useFavorites();

  if (isLoading) return <Loading />;

  return (
    <StyledPage>
      <Header>
        <HeaderContent>
          <StyledButton onClick={moveBack}>
            <HiOutlineArrowLongLeft />
          </StyledButton>
          <P>Favorites</P>
        </HeaderContent>
      </Header>
      {isLoading && <Loading />}
      {favList.length === 0 ? (
        <CardList>
          <p>🔍 No Favorites found !</p>
        </CardList>
      ) : (
        <CardList>
          {favList.map((user: User) => (
            <Card user={user} key={user.id} />
          ))}
        </CardList>
      )}
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background-color: #f0eeee;
  height: 100rem;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5.5rem;
  width: 5.5rem;
`;
const P = styled.p`
  font-size: medium;
`;
const CardList = styled.div`
  display: flex;
  margin-top: 0.6rem;
  flex-direction: column;
  align-items: center;

  border-radius: 0.3rem;
`;
