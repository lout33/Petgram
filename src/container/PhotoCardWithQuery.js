import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { PhotoCard } from "./../components/PhotoCard";
export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
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
  const { photo = {} } = data;
  return <PhotoCard {...photo}></PhotoCard>;
};

export const PhotoCardWithQuery = ({ id }) => {
  // console.log({ id });
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
};
