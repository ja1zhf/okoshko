import { createContext } from "react";

interface UserContextType {
  user: ProfileType | null;
  setUser: (newUser: ProfileType | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
