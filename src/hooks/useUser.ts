import { useEffect, useState } from "react";

const useUser = (): [
  ProfileType | null,
  (newUser: ProfileType | null) => void,
] => {
  const [user, setUser] = useState<ProfileType | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      const user: ProfileType = JSON.parse(userStorage);

      setUser(user);
    }
  }, []);

  const setNewUser = (newUser: ProfileType | null) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return [user, setNewUser];
};

export default useUser;
