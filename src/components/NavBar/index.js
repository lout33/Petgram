import React from "react";
import { Nav, Link } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

export const NavBar = () => {
  const SIZE = "32px";
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE}></MdHome>
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={SIZE}></MdFavoriteBorder>
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE}></MdPersonOutline>
      </Link>
    </Nav>
  );
};
