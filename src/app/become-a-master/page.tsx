"use client";

import UserContext from "@/contexts/userContext";
import { PageDiv } from "../styles/style";
import { BecomeMasterPageTitle } from "./style";
import { useContext } from "react";

interface SwitchRoleType {
  current_role: string;
  status: number;
}

const Page = () => {
  const { user, setUser } = useContext(UserContext);

  const switchRole = async () => {
    const response = await fetch(
      "https://dev.okoshko.space/users/switch_role/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result: SwitchRoleType = await response.json();

    let tempUser = user!;
    tempUser.role = result.current_role;
    setUser(tempUser);
  };

  return (
    <PageDiv>
      <BecomeMasterPageTitle>Стать мастером</BecomeMasterPageTitle>
      <button onClick={switchRole}>Стать мастером</button>
    </PageDiv>
  );
};

export default Page;