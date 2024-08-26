import Image from "next/image";
import { AppTitle, NavbarDiv, NavbarText, ProfileDiv } from "./style";

const NavbarItem = () => {
  return (
    <NavbarDiv>
      <AppTitle href="/">ОКОШКО</AppTitle>
      <ProfileDiv>
        <Image alt="profile" width={20} height={20} src="/profile.svg" />
        <NavbarText>Елизавета К.</NavbarText>
      </ProfileDiv>
    </NavbarDiv>
  );
};

export default NavbarItem;
