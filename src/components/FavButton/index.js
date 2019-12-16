import React, { useContext } from "react";
import { Button, Alert, TextAlert } from "./styled";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";

//props is auth
import { Context } from "./../../Context";

export function FavButton({ likes, liked, onClick, callAlert }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  const { isAuth } = useContext(Context);

  return (
    <Button onClick={onClick}>
      <div>Joder esto no se renderiza</div>
      <Icon size="32px"></Icon>
      {likes}likes!
      {console.log("/////////////////////")}
      {console.log(isAuth)}
      {isAuth ? (
        <div></div>
      ) : (
        <Alert>
          <TextAlert>You has to be an user to add to favorites </TextAlert>
        </Alert>
      )}
    </Button>
  );
}

FavButton.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
