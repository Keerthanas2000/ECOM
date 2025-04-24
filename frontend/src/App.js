import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Jewelery from "./pages/Jewelery";
import Living from "./pages/Living";
import Details from "./pages/Details";
import CartDetails from "./screens/cartedItems";
import CheckoutCardForm from "./screens/CheckoutCardForm";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/login";
import OtpVerify from "./pages/otpverify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp/:mobile" element={<OtpVerify />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men"
          element={
            <ProtectedRoute>
              <Men />
            </ProtectedRoute>
          }
        />
        <Route
          path="/women"
          element={
            <ProtectedRoute>
              <Women />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kids"
          element={
            <ProtectedRoute>
              <Kids />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jewelery"
          element={
            <ProtectedRoute>
              <Jewelery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/living"
          element={
            <ProtectedRoute>
              <Living />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <CheckoutCardForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
