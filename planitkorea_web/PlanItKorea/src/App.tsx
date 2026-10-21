import React, { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import Footer from "./component/Footer";
import CustomerBar from "./component/CustomerBar";

import IndexHome from "./pages/home/Home";
import Login from "./pages/Login/login/Login";
import SignUp from "./pages/Login/signup/SignUp";
import IdSearch from "./pages/Login/IdSearch";
import PasswordSearch from "./pages/Login/findPassword/PasswordSearch";
import MyPageMain from "./pages/MyPage/MyPageMain";
import FrequentlyQuestion from "./pages/CustomerService/FrequentlyQuestion";
import InquiryCRUD from "./pages/CustomerService/InquiryCRUD";
import Notification from "./pages/CustomerService/Notification";
import InquiryHistory from "./pages/CustomerService/InquiryHistory";
import ReservationCheck from "./pages/MyPage/ReservationCheck";
// import WishList from "./pages/MyPage/WishList";
// import AllProductPage from "./pages/Product/AllProductPage";
// import DetailProduct from "./pages/Product/DetailProduct"
import PaymentPage from "./pages/Product/PaymentPage";
import AppContainer from "./layouts/AppContainer";
import MainContainer from "./layouts/MainContainer";
import { useCookies } from "react-cookie";
import useAuthStore from "./stores/use.auth.store";
import ResetPasswordPage from "./pages/Login/findPassword/ResetPasswordPage";
import SnsSuccess from "./pages/Login/login/SnsSuccess";
import AuthRedirectHandler from "./pages/Login/signup/AuthRedirectHandler";
import WishList from "./pages/MyPage/WishList";
import AllProductPage from "./pages/Product/AllProductPage";
import DetailProduct from "./pages/Product/DetailProduct";
import axios from "axios";
import PaymentSuccess from "./pages/Product/PaymentSuccess";



// 로그인이 필요한 페이지: 토큰이 없으면 로그인 화면으로 보내고, 로그인 후 원래 페이지로 복귀
function RequireAuth({ children }: { children: React.ReactElement }) {
  const [cookies] = useCookies(["token"]);
  const location = useLocation();
  if (!cookies.token) {
    return <Navigate to="/signin" replace state={{ from: location.pathname + location.search }} />;
  }
  return children;
}

function App() {
  const location = useLocation();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const { setUserId, login, logout } = useAuthStore();

  useEffect(() => {
    if (cookies.token) {
      login(cookies.token);
      axios.get('http://localhost:4040/api/v1/users', {
        headers: {
          Authorization: `Bearer ${cookies.token}`
        }
      }).then((response) => {
        const userId = response.data?.data?.userId;
        if (!userId) throw new Error("유효하지 않은 사용자 정보");
        setUserId(userId);
        localStorage.setItem("userId", userId);
      }).catch(() => {
        // 만료되었거나 다른 환경에서 발급된 토큰이면 정리하고 로그아웃 상태로 전환
        removeCookie("token", { path: "/" });
        localStorage.removeItem("userId");
        logout();
      })
    } else {
      logout();
    }
  }, [cookies.token, login, logout]);

  const showSearch =
    location.pathname === "/" ||
    location.pathname.startsWith("/allProductPage") ||
    location.pathname.startsWith("/detailProduct");

  const CustomerLine = [
    "/notification",
    "/inquiryCRUD",
    "/frequentlyQuestion",
    "/inquiryHistory",
  ];

  const showCustomer = CustomerLine.includes(location.pathname);

  return (
    <>
      <AppContainer>
        <Header />
        {showSearch && <SearchBar />}
        {showCustomer && <CustomerBar />}
        <MainContainer>
          <Routes>
            <Route path="/" element={<IndexHome />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/sns-success" element={<SnsSuccess />} />
            <Route path="/idSearch" element={<IdSearch />} />
            <Route path="/passwordSearch" element={<PasswordSearch />} />
            <Route path="/auth" element={<AuthRedirectHandler />} />
            <Route path="/findPassword/verify" element={<ResetPasswordPage />} />


            <Route
              path="/frequentlyQuestion"
              element={<FrequentlyQuestion />}
            />
            <Route path="/inquiryCRUD/edit/:inquiryId" element={<RequireAuth><InquiryCRUD /></RequireAuth>} />
            <Route path="/inquiryCRUD" element={<RequireAuth><InquiryCRUD /></RequireAuth>} />
            <Route path="/inquiryHistory" element={<RequireAuth><InquiryHistory /></RequireAuth>} />
            <Route path="/notification" element={<Notification />} />

            <Route path="/myPageMain" element={<RequireAuth><MyPageMain /></RequireAuth>} />
            <Route path="/reservationCheck" element={<RequireAuth><ReservationCheck /></RequireAuth>} />
            <Route path="/wishList" element={<RequireAuth><WishList /></RequireAuth>} />

            <Route path="/allProductPage" element={<AllProductPage />} />
            <Route path="/paymentPage" element={<RequireAuth><PaymentPage /></RequireAuth>} />
            <Route path="/kakaoPay/success" element={<PaymentSuccess />} />
            <Route path="/detailProduct/:productId" element={<DetailProduct />} />
            <Route path="/allProductPage/:category?" element={<AllProductPage />} />
          </Routes>
        </MainContainer>

        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
