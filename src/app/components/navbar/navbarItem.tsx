import Image from "next/image";
import { AppTitle, NavbarDiv, NavbarText, ProfileLink } from "./style";

const NavbarItem = () => {
  return (
    <NavbarDiv>
      <AppTitle href="/">ОКОШКО</AppTitle>
      <ProfileLink href="/profile">
        <Image alt="profile" width={20} height={20} src="/profile.svg" />
        <NavbarText>Елизавета К.</NavbarText>
      </ProfileLink>
    </NavbarDiv>
  );
};

export default NavbarItem;
