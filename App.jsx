
import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

export default function App() {
  const [started, setStarted] = React.useState(false);

  return (
    <div>
      {!started ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <h2>Bring Nature Into Your Home</h2>
            <p>Discover beautiful plants for every space.</p>
            <button onClick={() => setStarted(true)}>
              Get Started
            </button>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div>
          <nav className="navbar">
            <h2>Paradise Nursery</h2>
            <button onClick={() => setStarted(false)}>Home</button>
            <button onClick={() => setStarted(false)}>Plants</button>
          </nav>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your plant shopping experience starts here.</p>
          <p>
            Continue with the ProductList and CartItem components
            to complete the shopping application.
          </p>
        </div>
      )}
    </div>
  );
}
