import React, { useEffect, useRef, useState, Fragment } from "react";
import { Img, ImgWrapper, Article } from "./styled";
import { useNearScreen } from "./../../hooks/useNearScreen";
import { FavButton } from "./../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {toggleLike => {
              [callAlert, setCallAlert] = useState(false);
              const handleFavClick = () => {
                if (!isAuth) {
                  setCallAlert(true);
                }
                toggleLike({ variables: { input: { id } } });
              };
              return (
                <Fragment>
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                    callAlert={callAlert}
                  ></FavButton>
                </Fragment>
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName}Value mub be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName}Value mub be greater than cero`);
    }
  }
};
