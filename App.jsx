
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

function NurseryApp() {
  const [page, setPage] = React.useState("home");

  return (
    <div>
      {page === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <h2>Bring Nature Into Your Home</h2>
            <p>Discover beautiful plants for every space.</p>

            <button onClick={() => setPage("plants")}>
              Get Started
            </button>

            <AboutUs />
          </div>
        </div>
      )}

      {page === "plants" && (
        <ProductList
          onContinueShopping={() => setPage("home")}
          onViewCart={() => setPage("cart")}
        />
      )}

      {page === "cart" && (
        <CartItem
          onContinueShopping={() => setPage("plants")}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NurseryApp />
    </Provider>
  );
}
