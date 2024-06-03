import { useContext } from "react";
import { AuthContent } from "../providers/AuthProvider";

const useAuth = () => {
  const authInfo = useContext(AuthContent);
  return authInfo;
};

export default useAuth;
