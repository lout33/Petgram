import React, { Fragment } from "react";
import { Link, Image, ImageLoadingWrapper } from "./styled";

export const Category = ({ cover = "#", path = "#", emoji = "?", loading }) => {
  return (
    <Link to={path}>
      {loading ? (
        <ImageLoadingWrapper> </ImageLoadingWrapper>
      ) : (
        <Fragment>
          <Image src={cover} alt="" />
          {emoji}
        </Fragment>
      )}
    </Link>
  );
};
