"use client";

import Image from "next/image";
import { PageDiv, SubmitButton } from "../styles/style";
import {
  AvatarBlockDiv,
  AvatarEditButton,
  AvatarLoadButton,
  ProfileDiv,
  ProfileInputDiv,
  ProfileKindDiv,
  ProfilePageTitle,
} from "./style";
import InputItem from "../components/input/inputItem";
import { ChangeEvent, useEffect, useState } from "react";
import AddressInput from "../components/address/addressInput";
import { notFound } from "next/navigation";
import KindButton from "./components/kindButton";
import districts from "@/app/districts";
import SelectItem from "../components/select/selectItem";

const Page = () => {
  const [profile, setProfile] = useState<EditProfileType>();

  const [districtsOptions, setDistrictsOptions] = useState<
    {
      id: string;
      title: string;
    }[]
  >([]);

  const [firstNameInput, setFirstNameInput] = useState<string>("");
  const [lastNameInput, setLastNameInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [districtInput, setDistrictInput] = useState("");
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [avatarInput, setAvatarInput] = useState<File | null>(null);
  const [masterKind, setMasterKind] = useState<number[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAvatarInput(event.target.files[0]);
    }
  };

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://dev.okoshko.space/users/profile/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result: EditProfileType = await response.json();

      setFirstNameInput(result.user_profile.first_name);
      setLastNameInput(result.user_profile.last_name);
      setPhoneInput(result.user_profile.phone);
      setEmailInput(result.user_profile.email);
      setDescriptionInput(result.master_profile.description);
      setDistrictInput(result.master_profile.district);
      setSelectedAddress(result.master_profile.address);
      setMasterKind(result.master_profile.specialities);

      setProfile(result);
    })();

    const city = districts.find(
      (item) => item.city === localStorage.getItem("city"),
    );

    if (city) {
      let temp: { id: string; title: string }[] = [];

      city.district.map((district) => {
        temp.push({ id: district, title: district });
      });

      setDistrictsOptions(temp);
      setDistrictInput(temp[0].id);
    }
  }, []);

  const submit = async () => {
    const formData = new FormData();
    formData.append("first_name", firstNameInput);
    formData.append("last_name", lastNameInput);
    formData.append("email", emailInput);
    formData.append("city", "");
    formData.append("district", districtInput);
    formData.append("address", selectedAddress);
    formData.append("description", descriptionInput);

    masterKind.map((speciality) => {
      formData.append("specialities", speciality);
    });

    if (avatarInput) {
      formData.append("avatar", avatarInput);
    }

    await fetch(`https://dev.okoshko.space/users/profile/update/`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });
  };

  return (
    <PageDiv>
      <ProfilePageTitle>Мой профиль</ProfilePageTitle>
      <ProfileDiv>
        <AvatarBlockDiv>
          <Image
            alt="avatar"
            width={140}
            height={140}
            src={
              profile?.user_profile.avatar_url
                ? profile.user_profile.avatar_url
                : "/img/non_avatar.jpg"
            }
          />
          <div>
            <AvatarLoadButton htmlFor="file-upload">Загрузить</AvatarLoadButton>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <AvatarEditButton type="submit" value={"Удалить"} />
        </AvatarBlockDiv>
        <ProfileInputDiv>
          <ProfileKindDiv>
            <KindButton
              id={1}
              title="Ногти"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
            <KindButton
              id={3}
              title="Брови и ресницы"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
            <KindButton
              id={4}
              title="Уход за лицом"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
            <KindButton
              id={5}
              title="Макияж"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
            <KindButton
              id={6}
              title="Волосы"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
            <KindButton
              id={7}
              title="Тело"
              masterKind={masterKind}
              setMasterKind={setMasterKind}
            />
          </ProfileKindDiv>
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
        {profile?.user_profile.role === "master" && (
          <>
            <InputItem
              title="Описание"
              isNumber={false}
              canBeEmpty={true}
              inputValue={descriptionInput}
              setInputValue={setDescriptionInput}
            />
            <SelectItem
              title="Район"
              options={districtsOptions}
              selectedOption={districtInput}
              setSelectedOption={setDistrictInput}
            />
            <AddressInput onAddressSelect={handleAddressSelect} />
          </>
        )}
        <SubmitButton whileTap={{ scale: 0.9 }} onClick={submit}>
          Сохранить
        </SubmitButton>
      </ProfileDiv>
    </PageDiv>
  );
};

export default Page;
