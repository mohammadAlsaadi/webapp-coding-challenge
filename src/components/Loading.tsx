import styled from "styled-components";

import React from "react";

export default function Loading() {
  return <Container>Loading ...</Container>;
}

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3rem;
`;
