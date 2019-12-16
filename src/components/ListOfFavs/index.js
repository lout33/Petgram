import React from "react";
import { Grid, Link, Image } from "./styles";
import PropTypes from "prop-types";
export const ListOfFavs = ({ favs = [] }) => {
  return favs.map(fav => (
    <Grid key={fav.id}>
      <Link to={`/detail/${fav.id}`}>
        <Image src={fav.src}></Image>
      </Link>
    </Grid>
  ));
};
ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
};
