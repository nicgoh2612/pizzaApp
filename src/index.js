import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header /> 
      <Menu />
      <Description/>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function Header() {
  return(
    <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>Nicole Pizza Shop.</h1>
  );
}

function Description() {
  return (
    <h2>Best pizza in town. Fresh ingredients, authentic recipes, and a cozy atmosphere await you at Nicole Pizza Shop. Come and taste the difference!</h2>
  );
}


function Pizza() {
  return (
    <div className="pizza">
      <img src="funghi.jpg" alt="Pizza"/>
      <h2>Funghi</h2>
      <p>Ingredients: Tomato, Cheese, Onion, Mushroom</p>
      <span>$10</span>
      <img src="margherita.jpg" alt='Pizza'/>
      <h2>Margherita</h2>
      <p>Ingredients: Tomato, Mozzarella</p>
      <span>$12</span>
      <img src="spinaci.jpg" alt='Pizza'/>
      <h2>Spinaci</h2>
      <p>Ingredients: Tomato, Mozzarella, spinach, and ricotta cheese</p>
      <span>$9</span>
    </div>
  );
}

function Pizza2() {
  return (
    <div className="pizza">
      <img src="salamino.jpg" alt="Pizza"/>
      <h2>Pizza Salamino</h2>
      <p>Ingredients: Tomato, mozzarella, and pepperoni</p>
      <span>$15</span>
      <img src="focaccia.jpg" alt='Pizza'/>
      <h2>Focaccia</h2>
      <p>Ingredients: Bread with italian olive oil and rosemary</p>
      <span>$6</span>
      <img src="prosciutto.jpg" alt='Pizza'/>
      <h2>Prosciutto</h2>
      <p>Ingredients: Tomato, mozzarella, ham, arugula, and burrata cheese </p>
      <span>$12</span>
    </div>
  );
}


function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza2/>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 22;
  const closeHour = 10;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <p>We are currently Open! </p>
      ) : (
        <p>Sorry, we are closed now.</p>
      )}

      <button>Order Now</button>
    </footer>

  );
}
