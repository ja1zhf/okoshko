"use client";
import Image from "next/image";
import { PageDiv, SubmitButton } from "@/app/styles/style";
import {
  AvatarBlockDiv,
  AvatarEditButton,
  AvatarLoadButton,
  ProfileDiv,
  ProfileInputDiv,
  ProfilePageTitle,
} from "./style";
import InputItem from "@/app/components/input/inputItem";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import AddressInput from "@/app/components/address/addressInput";
import districts from "@/app/districts";
import SelectItem from "@/app/components/select/selectItem";
import { truncateText } from "@/tools/tools";
import UserContext from "@/contexts/userContext";

interface UpdateResponse {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  remove_avatar: false;
  avatar: string;
  district: string;
  address: string;
  specialities: number[];
  description: string;
}

const Page = () => {
  const { user, setUser } = useContext(UserContext);

  const [profile, setProfile] = useState<EditProfileType>();

  const [districtsOptions, setDistrictsOptions] = useState<
    {
      id: string;
      title: string;
    }[]
  >([]);
  const [cityOptions, setCityOptions] = useState<
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
  const [cityInput, setCityInput] = useState("");
  const [avatar, setAvatar] = useState("");
  const [buttonText, setButtonText] = useState("");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setButtonText(event.target.files[0].name);
      const formData = new FormData();

      formData.append("avatar", event.target.files[0]);

      const response = await fetch(
        `https://dev.okoshko.space/users/profile/picture/`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        },
      );
      const result: { avatar_url: string } = await response.json();

      setAvatar(result.avatar_url);

      setUser({
        ...user!,
        avatar_url: result.avatar_url,
      });
    }
  };

  const deleteAvatar = async () => {
    await fetch(`https://dev.okoshko.space/users/profile/picture/delete/`, {
      method: "DELETE",
      credentials: "include",
    });

    setAvatar("");
    setUser({
      ...user!,
      avatar_url: "",
    });
  };

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    let tempCity: { id: string; title: string }[] = [];

    districts.map((city) => {
      tempCity.push({ id: city.city, title: city.city });
    });

    setCityOptions(tempCity);
    setCityInput(tempCity[0].id);

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
      setAvatar(result.user_profile.avatar_url);
      setCityInput(result.user_profile.city);
      if(result.master_profile) {
        setDescriptionInput(result.master_profile.description);
        setDistrictInput(result.master_profile.district);
        setSelectedAddress(result.master_profile.address);
      }

      setProfile(result);
    })();
  }, []);

  useEffect(() => {
    const city = districts.find((item) => item.city === cityInput);

    if (city) {
      let temp: { id: string; title: string }[] = [];

      city.district.map((district) => {
        temp.push({ id: district, title: district });
      });

      setDistrictsOptions(temp);
      setDistrictInput(temp[0].id);
    }
  }, [cityInput]);

  const submit = async () => {
    const formData = new FormData();
    formData.append("first_name", firstNameInput);
    formData.append("last_name", lastNameInput);
    formData.append("email", emailInput);
    formData.append("city", cityInput);
    formData.append("district", districtInput);
    formData.append("address", selectedAddress);
    formData.append("description", descriptionInput);

    const response = await fetch(
      `https://dev.okoshko.space/users/profile/update/`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      },
    );

    const result: UpdateResponse = await response.json();

    setFirstNameInput(result.first_name);
    setLastNameInput(result.last_name);
    setEmailInput(result.email);
    setDescriptionInput(result.description);
    setDistrictInput(result.district);
    setSelectedAddress(result.address);
    setCityInput(result.city);

    setUser({
      ...user!,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
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
            src={avatar ? avatar : "/img/no_avatar.jpg"}
            style={{ objectFit: "cover" }}
          />
          <div>
            <AvatarLoadButton htmlFor="file-upload">
              {buttonText ? truncateText(buttonText, 9) : "Загрузить"}
            </AvatarLoadButton>
            <input
              id="file-upload"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <AvatarEditButton
            type="submit"
            value={"Удалить"}
            onClick={deleteAvatar}
          />
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
              title="Город"
              options={cityOptions}
              selectedOption={cityInput}
              setSelectedOption={setCityInput}
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
