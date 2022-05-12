import React from "react";
import Button from "@mui/material/Button";
import { Form } from "react-final-form";
import logo from "./assets/logo.svg";
import {
  LoginForm,
  FormWrapper,
  ButtonWrapper,
} from "./assets/LoginPageStyledComponents";
import LoginField from "./components/LoginField";
import { useTranslation } from "react-i18next";
import { checkPassword } from "../../utils";
import { FORM_ERROR } from "final-form";

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const onSubmit = (input: { login: string; password: string }) => {
    const isMatchPassword = checkPassword(input.login, input.password);
    if (isMatchPassword) {
    } else {
      return { [FORM_ERROR]: t("loginPage.incorrectUser") };
    }
  };
  return (
    <FormWrapper>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: any = {};
          if (!values.login) {
            errors.login = "loginPage.emptyField";
          }
          if (!values.password) {
            errors.password = "loginPage.emptyField";
          }
          return errors;
        }}
        render={({ submitError, handleSubmit }) => (
          <LoginForm onSubmit={handleSubmit}>
            <img src={logo} />

            <LoginField name="login" label="loginPage.login" />

            <LoginField
              name="password"
              label="loginPage.password"
              isPassword={true}
            />
            {submitError && <h4> {submitError}</h4>}
            <ButtonWrapper>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                {t("loginPage.signIn")}
              </Button>
            </ButtonWrapper>
          </LoginForm>
        )}
      />
    </FormWrapper>
  );
};

export default LoginPage;
