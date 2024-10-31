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

  const [firstNameInput, setFirstNameInput] = useState<string>(
    user ? user.first_name : "",
  );
  const [lastNameInput, setLastNameInput] = useState<string>(
    user ? user.last_name : "",
  );
  const [phoneInput, setPhoneInput] = useState<string>(user ? user.phone : "");
  const [emailInput, setEmailInput] = useState<string>(
    user ? (user.email ? user.email : "") : "",
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
        </ProfileInputDiv>
        <InputItem
          title="Телефон"
          isNumber={true}
          canBeEmpty={false}
          isDisabled={true}
          inputValue={phoneInput}
          setInputValue={setPhoneInput}
        />
        <InputItem
          title="Эл. почта"
          isNumber={false}
          canBeEmpty={true}
          inputValue={emailInput}
          setInputValue={setEmailInput}
        />
        <SubmitButton whileTap={{ scale: 0.9 }}>Сохранить</SubmitButton>
      </ProfileDiv>
    </PageDiv>
  );
};

export default Page;
