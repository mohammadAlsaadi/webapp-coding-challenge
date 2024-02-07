import React from "react";
import styled from "styled-components";

interface DetailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function DetailCard({ children }: DetailCardProps) {
  return <DetailCardContainer>{children}</DetailCardContainer>;
}
const DetailCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 22rem;
  background-color: white;
  padding: 10px;
  height: 8rem;
  border: 0.1px solid;
  border-color: #dddbdb;
  border-radius: 10px;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
`;
