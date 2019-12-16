import React from "react";
import { PhotoCard } from "../PhotoCard";
export const ListOfPhotoCardsComponent = ({ photos }) => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo}></PhotoCard>
      ))}
    </ul>
  );
};
