"use client";

import { useContext, useState } from "react";
import InputItem from "../components/input/inputItem";
import { PageDiv, SubmitButton } from "../styles/style";
import { LoginLink, LoginPageTitle } from "./style";
import { useRouter } from "next/navigation";
import UserContext from "@/contexts/userContext";

interface SignInData {
  status: number;
  registered: boolean;
  phone_to_call: string;
}

interface CheckData {
  status: number;
  message: string;
  user: UserType;
}

const Page = () => {
  const router = useRouter();

  const { setUser } = useContext(UserContext);

  const [signInData, setSignInData] = useState<SignInData | null>(null);
  const [phoneInput, setPhoneInput] = useState<string>("");

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
      credentials: "include",
      body: JSON.stringify({ phone: phoneInput }),
    });

    const result: CheckData = await response.json();

    if (result.status === 200) {
      setUser(result.user);
      router.push("/");
    }
  };

  return (
    <PageDiv>
      <LoginPageTitle>Вход</LoginPageTitle>
      {!signInData && (
        <>
          <InputItem
            title="Номер телефона"
            isNumber={true}
            canBeEmpty={false}
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
      <LoginLink href="/register">Создать новый аккаунт</LoginLink>
    </PageDiv>
  );
};

export default Page;
