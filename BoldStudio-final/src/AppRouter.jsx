import { Routes, Route } from "react-router-dom";
import { GlobalPage } from "./user/pages/GlobalPage/GlobalPage";
import { ControllerAdminPage, LoginAdminPage } from "./auth/pages";
import { PrivateRoute } from "./PrivateRoute";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="/login" element={<LoginAdminPage />} />
        <Route
          path="/controllerAdmin"
          element={
            <PrivateRoute>
              <ControllerAdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}
