import { Route, Routes } from "react-router-dom";
import React from "react";
import MainPage from "./Main/MainPage";
import CategoryBody from "./Main/CategoryBody";
import SearchBody from "./Main/SearchBody";
import CartPage from "./Cart/CartPage";
import AdminPage from "./Admin/AdminPage";
import AdminItemForm from "./Admin/AdminItemFrom";
import AdminDetailPage from "./Admin/AdminDetailPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/items/:category"} element={<CategoryBody />} />
        <Route path={"/search/:keyword"} element={<SearchBody />} />
        <Route path={"/item/:num"} element={<SearchBody />} />
        <Route path={"/cart/:userId"} element={<CartPage />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/admin/itemForm"} element={<AdminItemForm />} />
        <Route
          path={"/admin/itemDetail/:itemId"}
          element={<AdminDetailPage />}
        />
      </Routes>
    </div>
  );
}
export default Router;
