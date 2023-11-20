import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/pages/LoginPage'
import { UserRoutes } from './user/routers/UserRoutes'
export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/*'
          element={<UserRoutes />}
        />
      </Routes>
    </main>
  )
}