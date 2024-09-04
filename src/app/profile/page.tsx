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

const Page = () => {
  const profile = {
    avatar: "/img/avatar.png",
    phone: "+79876543210",
    email: "user@site.com",
  };

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
          <InputItem title="Имя" />
          <InputItem title="Фамилия" />
        </ProfileInputDiv>
        <InputItem title="Телефон" />
        <InputItem title="Эл. почта" />
        <SubmitButton>Сохранить</SubmitButton>
      </ProfileDiv>
    </PageDiv>
  );
};

export default Page;
