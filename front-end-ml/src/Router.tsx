
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockPage from "./pages/product/stock/page";
import { ProductCreatePage } from "./pages/product/create/page";

export function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/product/stock" element={<StockPage/>}/>
                    <Route path="/product/create" element={<ProductCreatePage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}