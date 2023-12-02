import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase.config";
import { authContext } from "./authContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("There's no user");
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribed();
  }, []);

  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.error("Error al registrar:", error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, responseGoogle);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
