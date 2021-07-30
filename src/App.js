import logo from "./img/banner.jpg";
import iphone from "./img/iphone.jfif";
import {statusPagueme,statusCielo,buyCielo,buyPagueme} from "./js/script.js";
import  "./styles/styles.css"

function App() {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#home">Cart</a></li>
        </ul>
      </nav>
      <header className="header">
        <img src={logo} alt="Company Logo" />
      </header>
      <main className="mainContainer">
        <img src={iphone} alt="iphone" />
        <div className="textContainer">
          <div className="texts">
            <h1>Apple IPhone 12 Pro (128 GB)</h1>
            <h2>Cor: Grafite</h2>
            <h2>Preço: R$ 10.000,00</h2>
            <h2>Quantidade: 01</h2>
            <p><strong>Descrição:</strong></p>
            <ul>
              <li>Tela Super Retina XDR de 6,1 polegadas</li>
              <li>Ceramic Shield, mais resistente que qualquer vidro de qualquer smartphon.</li>
              <li>5G para fazer downloads em alta velocidade e streaming de alta qualidade.</li>
              <li>Chip A14 Bionic, o mais rápido em um smartphone.</li>
            </ul>
          </div>
          <div className="buttons">
            <button onClick={buyCielo}>Comprar via Cielo</button>
            <button onClick={buyPagueme}>Comprar via Pague-me</button>
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
