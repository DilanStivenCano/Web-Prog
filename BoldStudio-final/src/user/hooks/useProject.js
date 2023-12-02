import { useContext } from "react";
import { ProjectContext } from "../context/projectContext";

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    console.error("Error creating project context");
  }
  return context;
};