import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App2T() {
  return (
    <BrowserRouter>
      <Link to="/products/1">1번상품</Link>
      <Link to="/products/1/notice">1번상품상세설명</Link>
      <Link to="/products/2">2번상품</Link>
      <Link to="/products/2/notice">2번상품상세설명</Link>
      <Link to="/products/3">3번상품</Link>
      <Link to="/products/3/notice">3번상품상세설명</Link>
      <Routes>
        <Route path="/" element={<home />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNotice />}
        ></Route>
        <Route path="/cart" element={<cart />}></Route>
        <Route path="/users">
          <Route path="notice" element={<NoticePage />}></Route>
          <Route path="coupon" element={<CouponPage />}></Route>
          <Route path="question" element={<QuestionPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
