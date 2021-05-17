import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  background-color: #000;
  overflow: hidden;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  overflow: hidden;
`;

const LabelWelcome = styled.label`
  width: 60%;
  font-weight: 700;
  font-size: 1.875rem;
  text-align: center;
  color: #ff0000;
  line-height: 2.5rem;
`;

const LabelAccessYourAccount = styled.label`
  font-weight: 200;
  width: 60%;
  font-size: 20px;
  color: #84848d;
  line-height: 27px;
  text-align: left;
`;

const InputUserNamePassword = styled.input`
  width: 60%;
  height: 3.125rem;
  padding-left: 0.938rem;
  align-self: center;
  border-radius: 6.25rem;
  border-color: #fff;
  margin-bottom: 1rem;
`;

const ImageAvengersWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  @media screen and (min-height: 769px) {
    margin-top: 8vh;
    margin-bottom: 6.4vh;
  }
`;

const SavePasswordForgotPasswordWrapper = styled.div`
  display: flex;
  width: 58%;
  color: "#000";
`;

const SavePasswordCheckboxLabel = styled.label`
  color: #84848d;
  cursor: default;
  font-size: 15px;
  line-height: 20px;
  align-self: flex-start;
`;

const CustomCheckBoxInput = styled.input`
  appearance: none;
  background-color: #fff;
  height: 14px;
  width: 14px;
  border: 1px solid #ff0000;
  border-radius: 4px;
  display: block;
  cursor: pointer;

  &:active {
    -moz-appearence: none;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:checked {
    -moz-appearence: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #ff0000;
    border: 1px solid #84848d;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #fff;

    &::after {
      content: "\u2714";
      font-size: 9px;
      display: flex;
      justify-content: center;
    }
  }
`;

const ForgotPassword = styled.a`
  font-size: 15px;
  color: #84848d;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #ff0000;
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 390px;
  height: 65px;
  margin-top: 20px;
  background-color: #ff0000;
  color: #fff;
  font-size: 27px;
  font-weight: 500;
  border: 1px solid #707070;
  border-radius: 100px;
`;

const SignUpText = styled.p`
  width: 390px;
  color: #84848d;
`;

const SignUpLink = styled.a`
  text-decoration: none;
  color: #ff0000;

  &:hover {
    color: #84848d;
  }
`;

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <LabelWelcome>Bem-vindo(a) de volta!</LabelWelcome>
        <LabelAccessYourAccount>Acesse sua conta</LabelAccessYourAccount>
        <InputUserNamePassword placeholder="Usuário" />
        <InputUserNamePassword placeholder="Senha" type="password" />
        <SavePasswordForgotPasswordWrapper>
          <CustomCheckBoxInput
            type="checkbox"
            name="savePassword"
            id="savePassword"
          />
          <SavePasswordCheckboxLabel htmlFor="savePassword">
            {" "}
            Salvar Login
          </SavePasswordCheckboxLabel>
          <ForgotPassword href="/" rel="noopener">
            Esqueci a senha
          </ForgotPassword>
        </SavePasswordForgotPasswordWrapper>
        <LoginButton>Entrar</LoginButton>
        <SignUpText>
          Ainda não tem o login?&nbsp;
          <SignUpLink href="/login" rel="noopenner">
            Cadastre-se
          </SignUpLink>
        </SignUpText>
      </LoginForm>
      <ImageAvengersWrapper>
        <img src="/images/avengers.png" alt="Vingadores" title="Vingadores" />
      </ImageAvengersWrapper>
    </LoginWrapper>
  );
};

export default Login;
