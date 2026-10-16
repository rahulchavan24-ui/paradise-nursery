
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6a"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 22,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 10,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 7,
    name: "Monstera",
    price: 28,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 8,
    name: "Bird of Paradise",
    price: 35,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1597055181300-a8b4be5e0f4a"
  },
  {
    id: 9,
    name: "Calathea",
    price: 20,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
  },
  {
    id: 10,
    name: "Philodendron",
    price: 19,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 11,
    name: "Alocasia",
    price: 24,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 12,
    name: "ZZ Plant",
    price: 17,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 13,
    name: "Jade Plant",
    price: 14,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },
  {
    id: 14,
    name: "Echeveria",
    price: 9,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 15,
    name: "Haworthia",
    price: 11,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },
  {
    id: 16,
    name: "Burro's Tail",
    price: 13,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 17,
    name: "Panda Plant",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 16,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  }
];

export default function ProductList({
  onContinueShopping,
  onViewCart
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart?.items || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying",
    "Tropical Plants",
    "Succulents"
  ];

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <button onClick={onContinueShopping}>
            Home
          </button>

          <button
            onClick={() =>
              document.getElementById("plants")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Plants
          </button>

          <button onClick={onViewCart}>
            Cart ({cartCount})
          </button>
        </div>
      </nav>

      <header style={{ textAlign: "center", padding: "25px" }}>
        <h1>Our Houseplants</h1>
        <p>Bring nature home with Paradise Nursery.</p>
      </header>

      <main id="plants">
        {categories.map(category => (
          <section key={category}>
            <h2 style={{ textAlign: "center" }}>
              {category}
            </h2>

            <div className="plant-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => {
                  const alreadyAdded = cartItems.some(
                    item => item.id === plant.id
                  );

                  return (
                    <div className="plant-card" key={plant.id}>
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>
                      <p>Price: ${plant.price.toFixed(2)}</p>

                      <button
                        disabled={alreadyAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
