import { useEffect, useState } from "react";

const useUser = (): [UserType | null, (newUser: UserType | null) => void] => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      const user: UserType = JSON.parse(userStorage);

      setUser(user);
    }
  }, []);

  const setNewUser = (newUser: UserType | null) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return [user, setNewUser];
};

export default useUser;
