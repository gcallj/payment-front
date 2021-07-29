import logo from "./img/bf_logo.jpg";
import iphone from "./img/iphone.jfif";
import status from "./js/script.js";
import styles from "./styles/styles.css"

function App() {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="">Cart</a></li>
        </ul>
      </nav>
      <header className="header">
        <img src={logo} alt="Company Logo" />
      </header>
      <main className="mainContainer">
        <img src={iphone} alt="iphone" />
        <div className="textContainer">
          <div className="texts">
            <h1>Iphone 10</h1>
            <h2>Preço: R$ 10.000,00</h2>
            <h2>Quantidade: 01</h2>
          </div>
          <div className="buttons">
            <button>Comprar via Cielo</button>
            <button onClick={status}>Comprar via Pague-me</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; GCJ</p>
      </footer>
    </div>
  );
}

export default App;
