"use client";

import { useState } from "react";
import InputItem from "../components/input/inputItem";
import { PageDiv, SubmitButton } from "../styles/style";
import { LoginPageTitle } from "./style";

interface SignInData {
  status: number;
  registered: boolean;
  phone_to_call: string;
}

const Page = () => {
  const [signInData, setSignInData] = useState<SignInData | null>(null);
  const [phoneInput, setPhoneInput] = useState("");

  const sendSignIn = async () => {
    const response = await fetch(
      "https://dev.okoshko.space/users/auth/sign-in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneInput }),
      },
    );

    const result = await response.json();
    setSignInData(result);
  };

  const sendCheck = async () => {
    const response = await fetch("https://dev.okoshko.space/users/auth/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phoneInput }),
    });

    const result = await response.json();
    // setData(result);
  };

  return (
    <PageDiv>
      <LoginPageTitle>Вход</LoginPageTitle>
      {!signInData && (
        <>
          <InputItem
            title="Номер телефона"
            inputValue={phoneInput}
            setInputValue={setPhoneInput}
          />
          <SubmitButton onClick={sendSignIn}>Войти</SubmitButton>
        </>
      )}
      {signInData?.registered && (
        <>
          <p>
            Чтобы подтвердить номер телефона, позвоните на{" "}
            <b>{signInData.phone_to_call}</b>, дождитесь завершения звонка,
            затем нажмите кнопку "Проверить"
          </p>
          <SubmitButton onClick={sendCheck}>Проверить</SubmitButton>
        </>
      )}
    </PageDiv>
  );
};

export default Page;
