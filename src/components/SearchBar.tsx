import React from "react";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

const StyledInput = styled.input`
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;

interface SearchBarProps {
  query?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ query = "", setQuery }) => {
  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    if (setQuery) {
      setQuery(e.target.value);
    }
  }

  return (
    <>
      <StyledButton>
        <HiMagnifyingGlass />
      </StyledButton>
      <StyledInput
        placeholder="Search for GitHub users.."
        onChange={handleQuery}
        value={query}
      />
    </>
  );
};

export default SearchBar;
