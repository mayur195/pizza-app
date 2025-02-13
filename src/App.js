import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };

  return (
    <header className="header">
      {/* <h1 style={style}>Pizza Menu</h1> */}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price="10"
        img="pizzas/margherita.jpg"
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price="10"
        img="pizzas/spinaci.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    // <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
    <li className={props.pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  return (
    <footer className="footer">
      <p>© 2021 Pizza Menu</p>
      <p>
        {hours >= 10 && hours <= 22 ? "We're now open" : "Sorry we're close"}
      </p>
    </footer>
  );
}

export default App;
