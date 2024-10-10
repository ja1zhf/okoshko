"use client";

import UserContext from "@/contexts/userContext";
import useUser from "@/hooks/useUser";

const ContextWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useUser();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextWrapper;
