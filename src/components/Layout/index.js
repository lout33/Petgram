import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Div, Title, Subtitle } from "./styled";
export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <Title>{title} | Petgram </Title>}
        {subtitle && <meta name="description" content={subtitle}></meta>}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </Fragment>
  );
};
