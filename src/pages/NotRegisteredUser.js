import React, { Fragment, useContext } from "react";
import { Context } from "./../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              console.log(data);

              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && "El usuario ya existe manito";
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            ></UserForm>
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;

              activateAuth(login);
            });
          };

          const errorMsg = error && "La constrasena o el usario no existe";
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar Sesion"
              onSubmit={onSubmit}
            ></UserForm>
          );
        }}
      </LoginMutation>
    </Fragment>
  );
};
