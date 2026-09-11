import { Route, Routes } from "react-router";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin/Layout";
import {
  AdminFeatures,
  AdminOrders,
  AdminProducts,
  Dashboard,
} from "./pages/admin";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
