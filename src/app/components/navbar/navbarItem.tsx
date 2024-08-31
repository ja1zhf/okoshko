"use client"

import Image from "next/image";
import { AppTitle, NavbarDiv, NavbarText, ProfileButton } from "./style";
import { useState } from "react";
import ProfilePopupItem from "./components/profilePopupItem";

const NavbarItem = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarDiv>
      <AppTitle href="/">ОКОШКО</AppTitle>
      <ProfileButton onClick={() => setIsActive(true)}>
        <Image alt="profile" width={20} height={20} src="/profile.svg" />
        <NavbarText>Елизавета К.</NavbarText>
      </ProfileButton>
      {
        isActive && (
          <ProfilePopupItem setIsActive={setIsActive} />
        )
      }
    </NavbarDiv>
  );
};

export default NavbarItem;
