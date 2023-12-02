import { useContext } from "react";
import { authContext } from "../context/authContext";

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creating auth context");
  }
  return context;
};