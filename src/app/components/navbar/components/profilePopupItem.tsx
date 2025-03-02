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
import IndicatorItem from "../../indicator/indicatorItem";

interface Props {
  user: ProfileType;
  setUser: (newUser: ProfileType | null) => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopupItem = (props: Props) => {
  const { user, setUser, setIsActive } = props;

  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const [menu, setMenu] = useState<{ title: string; href: string }[] | null>(
    null,
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (user.role === "user") {
      setMenu([
        {
          title: "Мои заказы",
          href: "/orders",
        },
        {
          title: "Выход",
          href: "logout",
        },
      ]);
    } else if (user.role === "master") {
      setMenu([
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
      ]);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuCLick = async (href: string) => {
    if (href === "logout") {
      setUser(null);
      localStorage.removeItem("user");

      await fetch("https://dev.okoshko.space/users/auth/sign-out", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      router.push(href);
    }
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
            src={user.avatar_url ? user.avatar_url : "/img/no_avatar.jpg"}
            style={{ objectFit: "cover" }}
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
          {menu?.map((item, index) => (
            <div key={index}>
              <ProfileButton onClick={() => menuCLick(item.href)}>
                {item.title}
                {user.role === "master" && item.href === "/orders" && (
                  <IndicatorItem top={-4} right={-14} />
                )}
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
