import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useUsers } from "../hooks/useUsers";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  isFavorit: boolean;
}

export default function HomePage() {
  const [query, setQuery] = useState<string>("");

  const { users, isLoading } = useUsers();

  if (isLoading) return <Loading />;

  // Check if users is an array
  if (!Array.isArray(users)) {
    console.error("Invalid users data:", users);
    return null;
  }

  const searchData = users.filter((el: User) => el.login.includes(query));

  return (
    <StyledPage>
      <Header>
        <SearchBar query={query} setQuery={setQuery} />
      </Header>
      {query.length >= 2 ? (
        searchData.length === 0 ? (
          <CardList>
            <p>🔍 No result found !</p>
          </CardList>
        ) : (
          <CardList>
            {searchData.map((user: User) => (
              <Card user={user} key={user.id} />
            ))}
          </CardList>
        )
      ) : null}
    </StyledPage>
  );
}

const CardList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3rem;
`;

const StyledPage = styled.div`
  background-color: #f0eeee;
  height: 100rem;
`;
