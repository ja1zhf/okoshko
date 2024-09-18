import { Dispatch, SetStateAction, createContext } from "react";

interface UserContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
