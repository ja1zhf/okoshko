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
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopupItem = (props: Props) => {
  const { setIsActive } = props;

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
      href: "/",
    },
  ];

  const menuCLick = (href: string) => {
    router.push(href);
    setIsActive(false);
  };

  const click = () => {
    setIsActive(false);
    router.push("/profile");
  };

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
          <ProfileNameText>Елизавета К.</ProfileNameText>
          <ProfileNumberText>+7 951 653-20-07</ProfileNumberText>
          <ProfileEditButton onClick={() => click()}>
            Редактировать
          </ProfileEditButton>
        </ProfileInfoDiv>
        <ProfileButtonsDiv>
          {menu.map((item, index) => (
            <>
              <ProfileButton onClick={() => menuCLick(item.href)}>
                {item.title}
              </ProfileButton>
              {index + 1 !== menu.length && <ProfileLineDiv />}
            </>
          ))}
        </ProfileButtonsDiv>
      </ProfilePopupDiv>
    </PageDarkOverlay>
  );
};

export default ProfilePopupItem;
