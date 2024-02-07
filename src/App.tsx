import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { FavoritesProvider } from "./context/favoritesContext";

function App() {
  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="detail/:id" element={<DetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  );
}

export default App;
