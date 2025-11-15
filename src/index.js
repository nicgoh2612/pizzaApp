import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: false, 
  },
  {
    name: "Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];


function getShopStatus() {
  const hour = new Date().getHours();
  const openHour = 10; 
  const closeHour = 22; 
  return {
    isOpen: hour >= openHour && hour <= closeHour, 
    openHour,
    closeHour
  };
}

function Pizza({ pizzaObj }) {
  const isSoldOut = pizzaObj.soldOut;

  return (
    <li className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{isSoldOut ? 'SOLD OUT' : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}


function Header() {
  const { isOpen } = getShopStatus();
  
  return (
    <header className="header">
      <h1>Nicole Pizza Shop.</h1>
      {isOpen && (
        <p className="tagline">
          Authentic Italian cuisine
          <br></br>
          Truly Italian. Truly Delicious.
        </p>
      )}
    </header>
  );
}


function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      
      {numPizzas > 0 ? (
        <>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}


function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're currently open.
      </p>
      <button className="btn">Order Now!</button>
    </div>
  );
}


function Footer() {
  const { isOpen, openHour, closeHour } = getShopStatus();

  
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Sorry, we're closed. We open at {openHour}:00 tomorrow!
        </p>
      )}
    </footer>
  );
}


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
