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
import ShopLayout from "./components/shop/Layout";
import { ShopAccount, ShopCheckout, ShopHome, ShopListing } from "./pages/shop";
import NotFound from "./pages/not-found";
import CheckAuth from "./components/common/CheckAuth";
import UnauthPage from "./pages/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = false;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth Route */}
        <Route
          path="auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin Route */}
        <Route
          path="admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Shop Route */}
        <Route
          path="shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route index element={<ShopHome />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="account" element={<ShopAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
}

export default App;
