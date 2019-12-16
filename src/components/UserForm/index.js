import React, { useState, Fragment } from "react";
import { userInputValue } from "./../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styled";
import { SubmitButton } from "./../SubmitButton";
//activateAuth
export function UserForm({ onSubmit, title, error, disabled }) {
  const email = userInputValue("");
  const password = userInputValue("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>

        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          // value={email.value}
          // onChange={email.onChange}
          type="email"
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
          // value={password.value}
          // onChange={password.onChange}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
}
