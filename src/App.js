import React, { Fragment, useContext, Suspense } from "react";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { Router, Redirect } from "@reach/router";
import { Logo } from "./components/Logo";

import { NavBar } from "./components/NavBar";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

// import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div>Pe</div>}>
      <GlobalStyle></GlobalStyle>
      <Logo></Logo>
      <Router>
        <NotFound default></NotFound>
        <Home path="/"></Home>
        <Home path="/pet/:categoryId"></Home>
        <Detail path="/detail/:detailId"></Detail>
        {!isAuth && <NotRegisteredUser path="/login"></NotRegisteredUser>}
        {!isAuth && <Redirect noThrow from="/favs" to="/login"></Redirect>}
        {!isAuth && <Redirect noThrow from="/user" to="/login"></Redirect>}
        {isAuth && <Redirect noThrow from="/login" to="/"></Redirect>}

        <Favs path="/favs"></Favs>
        <User path="/user"></User>
      </Router>

      <NavBar></NavBar>
    </Suspense>
  );
};
