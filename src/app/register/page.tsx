"use client";

import { useContext, useState } from "react";
import InputItem from "../components/input/inputItem";
import { PageDiv, SubmitButton } from "../styles/style";
import { RegisterLink, RegisterPageTitle } from "./style";
import { useRouter } from "next/navigation";
import UserContext from "@/contexts/userContext";

interface SignUpData {
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

  const [signUpData, setSignUpData] = useState<SignUpData | null>(null);
  const [phoneInput, setPhoneInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const sendSignIn = async () => {
    const response = await fetch(
      "https://dev.okoshko.space/users/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneInput,
          first_name: firstNameInput,
          last_name: lastNameInput,
        }),
      },
    );

    const result = await response.json();
    setSignUpData(result);
  };

  const sendCheck = async () => {
    const response = await fetch("https://dev.okoshko.space/users/auth/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phoneInput }),
    });

    const result: CheckData = await response.json();

    if (result.status === 200) {
      localStorage.setItem("user", JSON.stringify(result.user));
      setUser(result.user);
      router.push("/");
    }
  };

  return (
    <PageDiv>
      <RegisterPageTitle>Регистрация</RegisterPageTitle>
      {!signUpData && (
        <>
          <InputItem
            title="Номер телефона"
            isNumber={true}
            canBeEmpty={false}
            inputValue={phoneInput}
            setInputValue={setPhoneInput}
          />
          <InputItem
            title="Имя"
            isNumber={false}
            canBeEmpty={false}
            inputValue={firstNameInput}
            setInputValue={setFirstNameInput}
          />
          <InputItem
            title="Фамилия"
            isNumber={false}
            canBeEmpty={false}
            inputValue={lastNameInput}
            setInputValue={setLastNameInput}
          />
          <SubmitButton onClick={sendSignIn}>Создать аккаунт</SubmitButton>
        </>
      )}
      {signUpData?.registered && (
        <>
          <p>
            Чтобы подтвердить номер телефона, позвоните на{" "}
            <b>{signUpData.phone_to_call}</b>, дождитесь завершения звонка,
            затем нажмите кнопку "Проверить"
          </p>
          <SubmitButton onClick={sendCheck}>Проверить</SubmitButton>
        </>
      )}
      <RegisterLink href="/login">Войти в существующий аккаунт</RegisterLink>
    </PageDiv>
  );
};

export default Page;
