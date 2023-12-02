import React from "react";
import { AppRouter } from "./AppRouter";
import { AuthContextProvider } from './auth/context/authContextProvider.jsx';
import { ProjectContextProvider } from "./user/context/projectContextProvider.jsx";

export function App() {
  return (
    <AuthContextProvider>
      <ProjectContextProvider>
        <AppRouter />
      </ProjectContextProvider>
    </AuthContextProvider>
  );
}