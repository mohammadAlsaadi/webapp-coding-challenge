import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";
interface ToggleFavoriteProps {
  isFavorite: boolean;
}
export default function ToggleFavorite({ isFavorite }: ToggleFavoriteProps) {
  return (
    <>
      {isFavorite ? (
        <HiStar color="yellow" size="17" />
      ) : (
        <HiOutlineStar size="16" />
      )}
    </>
  );
}
