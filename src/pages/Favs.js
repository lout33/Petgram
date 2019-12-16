import React, { Fragment } from "react";
import { FavsWithQuery } from "./../container/GetFavorites";
import { Helmet } from "react-helmet";
import { Layout } from "./../components/Layout";

export default () => (
  <Layout title={`Tus favs`} subtitle={`Aqui podes encontras tus favoritos`}>
    <Helmet>
      <title>Petgram-Tu favoritos</title>
      <meta
        name="description"
        content="Con petgram puedes encontrar tus animales preferidos muy bonitos"
      />
    </Helmet>
    <FavsWithQuery></FavsWithQuery>
  </Layout>
);
