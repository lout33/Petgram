import React from "react";
import ReactDom from "react-dom";
import { App } from "./App.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-luis.luisyupanqui.now.sh/graphql",
  request: operation => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: { authorization }
    });
  },
  onError: error => {
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  }
});
ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
