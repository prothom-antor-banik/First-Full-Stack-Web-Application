import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import ProductPage from "./pages/user/ProductPage";
import ProductDetailsPage from "./pages/user/ProductDetailsPage";
import CartPage from "./pages/user/CartPage";
import OrderItemPage from "./pages/user/OrderItemPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import AdminPage from "./pages/admin/AdminPage";
import ProductsPage from "./pages/admin/ProductsPage";
import OrdersPage from "./pages/admin/OrdersPage";
import UsersPage from "./pages/admin/UsersPage";
import SummaryPage from "./pages/admin/SummaryPage";
import CreatProductPage from "./pages/admin/CreateProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import ReceivedOrderPage from "./pages/staff/ReceivedOrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" errorElement={<Error />}>
          <Route index element={<ProductPage />} />
          <Route path="product/:Id" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderItemPage />} />
          <Route path="profile/" element={<UserProfilePage />} />
        </Route>
        <Route path="admin" errorElement={<Error />}>
          <Route index element={<AdminPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="summary" element={<SummaryPage />} />
          <Route path="create-product" element={<CreatProductPage />} />
          <Route path="update-product" element={<UpdateProductPage />} />
        </Route>
        <Route
          path="stuff"
          element={<ReceivedOrderPage />}
          errorElement={<Error />}
        />
        <Route path="login" element={<LoginPage />} errorElement={<Error />} />
        <Route
          path="register"
          element={<RegisterPage />}
          errorElement={<Error />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
