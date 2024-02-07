import React, { useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailCard from "../components/DetailCard";
import ToggleFavorite from "../components/ToggleFavorite";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../hooks/useMoveBack";
import { useUserById } from "../hooks/useUserById";
import Loading from "../components/Loading";
import { useFavorites } from "../context/favoritesContext";
import { toast } from "react-toastify";

export default function DetailPage() {
  const { favList, dispatch } = useFavorites();

  const { id } = useParams<{ id: string }>();
  const searchedUser = id;
  const moveBack = useMoveBack();
  const { user, isLoading, error } = useUserById({ id: Number(searchedUser) });

  console.log(favList);
  const isUserFavorited = Boolean(
    favList.find((userFav) => userFav.login === searchedUser)
  );
  const handleToggleFavorite = () => {
    console.log(isUserFavorited);
    if (isUserFavorited) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: user,
      });
      toast.success("Removed from Favorites");
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: user,
      });
      toast.success("Favorite added successfully!");
    }
  };
  if (isLoading) {
    // Handle loading state
    return <Container>Loading...</Container>;
  }
  if (error) {
    return <p>User not found </p>;
  }
  return (
    <StyledPage>
      <Header>
        <HeaderContent>
          <StyledButton onClick={moveBack}>
            <HiOutlineArrowLongLeft />
          </StyledButton>
          <p>@{user.name}</p>
        </HeaderContent>
      </Header>
      <Container>
        <DetailCard>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                width={110}
                height={110}
              />
              <DetailContainer>
                <StyledTitle>
                  <h3>{user.name}</h3>
                  <StyledButton onClick={handleToggleFavorite}>
                    <ToggleFavorite isFavorite={isUserFavorited} />
                  </StyledButton>
                </StyledTitle>
                <div>
                  <CompanyName>{user.company}</CompanyName>
                  <Bio>{user.bio}</Bio>
                </div>
                <FollowerDetails>
                  <ItemDetail>
                    <Value>{user.followers}</Value>
                    <Label>FOLLOWER</Label>
                  </ItemDetail>
                  <ItemDetail>
                    <Value>{user.following}</Value>
                    <Label>FOLLOWER</Label>
                  </ItemDetail>
                  <ItemDetail>
                    <Value>{user.public_repos}</Value>
                    <Label>FOLLOWER</Label>
                  </ItemDetail>
                </FollowerDetails>
              </DetailContainer>
            </>
          )}
        </DetailCard>
      </Container>
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
  gap: 1rem;
`;
const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3rem;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`;
const DetailContainer = styled.div`
  margin-left: 1rem;
  gap: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0;
  margin-bottom: 1rem;
`;
const CompanyName = styled.p`
  color: #3556b8;
  font-size: 12px;
`;
const Bio = styled.p`
  color: #797979;
  font-size: 13px;
`;
const FollowerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0;
`;
const Label = styled.p`
  font-size: 9px;
`;
const Value = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
