import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  background-color: #000;
  overflow: hidden;
  @media screen and (min-height: 769px) {
    padding-bottom: calc(100vh - 769px);
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  overflow: hidden;
`;

const LabelWelcome = styled.label`
  font-family: Axiforma, sans-serif;
  font-weight: bold;
  font-size: 1.875rem;
  text-align: center;
  color: #ff0000;
  line-height: 2.5rem;
`;

const LabelAccessYourAccount = styled.label`
  font-family: Axiforma, sans-serif;
  font-weight: 200;
  font-size: 20px;
  color: #84848d;
  line-height: 27px;
  margin-left: 9.5rem;
`;

const InputUserNamePassword = styled.input`
  width: 390px;
  height: 50px;
  align-self: center;
  border-radius: 100px;
  border-color: #fff;
  margin-bottom: 1rem;
`;

const ImageAvengersWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  @media screen and (min-height: 769px) {
    @media screen and (min-height: 769px) {
      margin-top: 8vh;
    }
  }
`;

const SavePasswordForgotPasswordWrapper = styled.div`
  align-self: center;
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
          <input type="checkbox" />
        </SavePasswordForgotPasswordWrapper>
      </LoginForm>
      <ImageAvengersWrapper>
        <img src="/images/avengers.png" alt="Vingadores" title="Vingadores" />
      </ImageAvengersWrapper>
    </LoginWrapper>
  );
};

export default Login;
