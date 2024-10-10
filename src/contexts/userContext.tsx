import { createContext } from "react";

interface UserContextType {
  user: UserType | null;
  setUser: (newUser: UserType | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
