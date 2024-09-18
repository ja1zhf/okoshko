"use client";

import Image from "next/image";
import { PageDiv, SubmitButton } from "../styles/style";
import {
  AvatarBlockDiv,
  AvatarEditButton,
  ProfileDiv,
  ProfileInputDiv,
  ProfilePageTitle,
} from "./style";
import InputItem from "../components/input/inputItem";
import { useContext, useState } from "react";
import UserContext from "@/contexts/userContext";

const Page = () => {
  const { user } = useContext(UserContext);

  const profile = {
    avatar: "/img/avatar.png",
  };

  const [firstNameInput, setFirstNameInput] = useState<
    string | undefined | null
  >(user?.first_name);
  const [lastNameInput, setLastNameInput] = useState<string | undefined | null>(
    user?.last_name,
  );
  const [phoneInput, setPhoneInput] = useState<string | undefined | null>(
    user?.phone,
  );
  const [emailInput, setEmailInput] = useState<string | undefined | null>(
    user?.email,
  );

  return (
    <PageDiv>
      <ProfilePageTitle>Мой профиль</ProfilePageTitle>
      <ProfileDiv>
        <AvatarBlockDiv>
          <Image alt="avatar" width={140} height={140} src={profile.avatar} />
          <AvatarEditButton>Загрузить</AvatarEditButton>
          <AvatarEditButton>Удалить</AvatarEditButton>
        </AvatarBlockDiv>
        <ProfileInputDiv>
          <InputItem
            title="Имя"
            inputValue={firstNameInput}
            setInputValue={setFirstNameInput}
          />
          <InputItem
            title="Фамилия"
            inputValue={lastNameInput}
            setInputValue={setLastNameInput}
          />
        </ProfileInputDiv>
        <InputItem
          title="Телефон"
          inputValue={phoneInput}
          setInputValue={setPhoneInput}
        />
        <InputItem
          title="Эл. почта"
          inputValue={emailInput}
          setInputValue={setEmailInput}
        />
        <SubmitButton>Сохранить</SubmitButton>
      </ProfileDiv>
    </PageDiv>
  );
};

export default Page;
