"use client";

import UserContext from "@/contexts/userContext";
import { useEffect, useState } from "react";

const ContextWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      const user: UserType = JSON.parse(userStorage);

      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextWrapper;
