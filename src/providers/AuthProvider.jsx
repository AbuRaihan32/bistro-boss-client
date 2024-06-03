import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContent = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // ! createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // ! social Login
  const googleLogin = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  // ! signIn user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // ! logOut
  const logoutUser = () => {
    return signOut(Auth);
  };

  // ! update User Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ! observer for user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      const userInfo = { email: currentUser?.email };
      if (currentUser) {
        // TODO: create token
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access_token", res.data.token);
          }
        });
      } else {
        // TODO: clear Token
        localStorage.removeItem("access_token");
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logoutUser,
    updateUserProfile,
    googleLogin,
  };

  return (
    <AuthContent.Provider value={authInfo}>{children}</AuthContent.Provider>
  );
};

export default AuthProvider;
