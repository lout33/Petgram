import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { ListOfPhotoCardsComponent } from "./../components/ListOfPhotoCards";

export const GET_PHOTOS = gql`
  query getAllPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <div>Pe</div>;
  }
  if (error) {
    return <div>PeError</div>;
  }
  data;
  return <ListOfPhotoCardsComponent {...data}></ListOfPhotoCardsComponent>;
};

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => {
  console.log({ categoryId });
  return (
    <Query query={GET_PHOTOS} variables={{ categoryId }}>
      {renderProp}
    </Query>
  );
};
