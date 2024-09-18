import { PageDarkOverlay } from "@/app/styles/style";
import {
  ProfileAvatar,
  ProfileButton,
  ProfileButtonsDiv,
  ProfileEditButton,
  ProfileInfoDiv,
  ProfileLineDiv,
  ProfileNameText,
  ProfileNumberText,
  ProfilePopupDiv,
} from "./style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";

interface Props {
  user: UserType | null;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopupItem = (props: Props) => {
  const { user, setIsActive } = props;

  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menu = [
    {
      title: "Мои заказы",
      href: "/orders",
    },
    {
      title: "Мои услуги",
      href: "/services",
    },
    {
      title: "Мое расписние",
      href: "/schedule",
    },
    {
      title: "Выход",
      href: "logout",
    },
  ];

  const menuCLick = async (href: string) => {
    if (href === "logout") {
      // const response = await fetch(
      //   "https://dev.okoshko.space/users/auth/sign-out",
      //   {
      //     method: "GET",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   },
      // );
      //
      // const result = await response.json();
    } else {
      router.push(href);
    }
    setIsActive(false);
  };

  const click = () => {
    setIsActive(false);
    router.push("/profile");
  };

  useEffect(() => {
    const cookies = document.cookie;
    const myCookieValue = cookies
      ? cookies
          .split("; ")
          .find((c) => c.startsWith("auth="))
          ?.split("=")[1]
      : null;

    console.log(myCookieValue);
  }, []);

  return (
    <PageDarkOverlay>
      <ProfilePopupDiv ref={divRef}>
        <ProfileInfoDiv>
          <ProfileAvatar
            alt="avatar"
            width={70}
            height={70}
            src="/img/avatar.png"
          />
          <ProfileNameText>
            {user?.first_name} {user?.last_name[0]}.
          </ProfileNameText>
          <ProfileNumberText>+{user?.phone}</ProfileNumberText>
          <ProfileEditButton onClick={() => click()}>
            Редактировать
          </ProfileEditButton>
        </ProfileInfoDiv>
        <ProfileButtonsDiv>
          {menu.map((item, index) => (
            <div key={index}>
              <ProfileButton onClick={() => menuCLick(item.href)}>
                {item.title}
              </ProfileButton>
              {index + 1 !== menu.length && <ProfileLineDiv />}
            </div>
          ))}
        </ProfileButtonsDiv>
      </ProfilePopupDiv>
    </PageDarkOverlay>
  );
};

export default ProfilePopupItem;
