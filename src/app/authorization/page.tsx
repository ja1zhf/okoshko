"use client";

import InputItem from "../components/input/inputItem";
import { PageDiv, SubmitButton } from "../styles/style";
import { LoginPageTitle } from "./style";

const Page = () => {
  return (
    <PageDiv>
      <LoginPageTitle>Вход или регистрация</LoginPageTitle>
      <InputItem title="Эл. почта" />
      <InputItem title="Пароль" />
      <SubmitButton>Войти</SubmitButton>
    </PageDiv>
  );
};

export default Page;
