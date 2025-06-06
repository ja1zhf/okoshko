"use client";

import { useContext, useState } from "react";
import InputItem from "@/app/components/input/inputItem";
import { PageDiv, SubmitButton } from "@/app/styles/style";
import { NumberLink, RegisterLink, RegisterPageTitle } from "./style";
import { useRouter } from "next/navigation";
import UserContext from "@/contexts/userContext";
import { usePopup } from "@/contexts/popupContext";
import PhoneInputItem from "@/app/components/phoneInput/inputItem";
import { cleanPhoneNumber } from "@/tools/tools";

interface SignUpData {
  status: number;
  registered: boolean;
  call_to_phone: string;
}

interface CheckData {
  status: number;
  message: string;
  user: ProfileType;
}

const Page = () => {
  const router = useRouter();

  const { showPopup } = usePopup();

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
          phone: cleanPhoneNumber(phoneInput),
          first_name: firstNameInput,
          last_name: lastNameInput,
        }),
      },
    );

    const result = await response.json();
    if (result.status === 200 && result.call_to_phone && !result.registered) {
      setSignUpData(result);
    } else if (result.status === 409) {
      showPopup("failure", result.erorr);
    }
  };

  const sendCheck = async () => {
    const response = await fetch("https://dev.okoshko.space/users/auth/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ phone: cleanPhoneNumber(phoneInput) }),
    });

    const result: CheckData = await response.json();

    if (result.status === 200) {
      setUser(result.user);
      router.push("/");
    }
  };

  return (
    <PageDiv>
      <RegisterPageTitle>Регистрация</RegisterPageTitle>
      {!signUpData && (
        <>
          <PhoneInputItem
            title="Номер телефона"
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
          <SubmitButton onClick={sendSignIn} whileTap={{ scale: 0.9 }}>
            Создать аккаунт
          </SubmitButton>
        </>
      )}
      {signUpData && (
        <>
          <p>
            Чтобы подтвердить номер телефона,
            <NumberLink href={`tel:+${signUpData.call_to_phone}`}>
              позвоните на <b>{signUpData.call_to_phone}</b>
            </NumberLink>
            , дождитесь завершения звонка, затем нажмите кнопку "Проверить"
            (звонок бесплатный)
          </p>
          <SubmitButton onClick={sendCheck} whileTap={{ scale: 0.9 }}>
            Проверить
          </SubmitButton>
        </>
      )}
      <RegisterLink href="/login">Войти в существующий аккаунт</RegisterLink>
    </PageDiv>
  );
};

export default Page;
