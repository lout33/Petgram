import React, { Fragment } from "react";
import { ListOfPhotoCardsWithQuery } from "./../container/ListOfPhotoCards";
import { ListOfCategories } from "./../components/ListOfCategories";

import { Helmet } from "react-helmet";
import { Layout } from "./../components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title={`Tu app favorita de mascotas`}
      subtitle={`Con petgram puedes encontrar animales muy bonito`}
    >
      <ListOfCategories></ListOfCategories>
      <ListOfPhotoCardsWithQuery
        categoryId={categoryId}
      ></ListOfPhotoCardsWithQuery>
      )
    </Layout>
  );
};
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
