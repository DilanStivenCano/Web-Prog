import { Routes, Route } from 'react-router-dom';
import { DashboardPage, ItemDetailPage } from '../pages';

export function UserRoutes() {
  return (
    <main>
        <Routes>
            <Route
                path="/dashboard"
                element={<DashboardPage />}
            />

            <Route 
                path="/detail" 
                element={<ItemDetailPage />} />
        </Routes>
    </main>
  )
}
