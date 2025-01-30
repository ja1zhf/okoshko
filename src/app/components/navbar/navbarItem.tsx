"use client";

import Image from "next/image";
import {
  AppTitle,
  NavbarAuthLink,
  NavbarDiv,
  NavbarRightSideDiv,
  NavbarText,
  ProfileButton,
  ProfileLeftSideDiv,
} from "./style";
import { useContext, useState } from "react";
import ProfilePopupItem from "./components/profilePopupItem";
import Link from "next/link";
import UserContext from "@/contexts/userContext";
import DistrictItem from "./components/districtItem";
import IndicatorItem from "../indicator/indicatorItem";

const NavbarItem = () => {
  const { user, setUser } = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarDiv>
      <NavbarRightSideDiv>
        <AppTitle href="/">ОКОШКО</AppTitle>
        <DistrictItem />
      </NavbarRightSideDiv>
      <ProfileLeftSideDiv>
        {user ? (
          <>
            <Link href="/favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M 9.5449219 4 C 5.9299219 4 3 6.9299219 3 10.544922 C 3 16.837321 10.298975 22.849799 13.708984 25.527344 A 2 2 0 0 0 13.71875 25.535156 C 13.742115 25.5535 13.773881 25.579629 13.796875 25.597656 L 13.798828 25.595703 A 2 2 0 0 0 15 26 A 2 2 0 0 0 16.203125 25.595703 L 16.203125 25.597656 C 16.209855 25.59238 16.219801 25.585381 16.226562 25.580078 C 16.231704 25.576045 16.23898 25.570455 16.244141 25.566406 A 2 2 0 0 0 16.263672 25.548828 C 19.663109 22.880904 27 16.852336 27 10.544922 C 27 6.9299219 24.070078 4 20.455078 4 C 17.000078 4 15 7 15 7 C 15 7 12.999922 4 9.5449219 4 z"></path>
              </svg>
            </Link>
            <ProfileButton onClick={() => setIsActive(true)}>
              <Image alt="profile" width={20} height={20} src="/profile.svg" />
              <NavbarText>
                {user.first_name && user.first_name} {user.last_name && user.last_name[0]}.
                {user.role === "master" && <IndicatorItem top={-14} right={-12}/>}
              </NavbarText>
            </ProfileButton>
          </>
        ) : (
          <NavbarAuthLink href="/login">Войти</NavbarAuthLink>
        )}
      </ProfileLeftSideDiv>
      {isActive && user && (
        <ProfilePopupItem
          user={user}
          setUser={setUser}
          setIsActive={setIsActive}
        />
      )}
    </NavbarDiv>
  );
};

export default NavbarItem;
