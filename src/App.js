
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import GenerateButton from './components/GenerateButton';
import ProductList from './components/ProductList';

function App() {

  const [ blackProduct, setBlackProduct] = useState([]);

  const [show, setShow] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const [currentSale, setCurrentSale] = useState([])

  const [useProduct] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
    ]);

    const handleClick = (productID) => {
      setCurrentSale([...currentSale, productID]);
      setShowCart(true);
    }

    console.log(blackProduct.price)
  return (
    <div className="App">
      <header className="App-header">
        <GenerateButton 
            products={useProduct}
            setBlackProduct={setBlackProduct}
            setShow={setShow}
        />
        {show && <ProductList blackProduct={blackProduct} handleClick={handleClick}/>}
        {showCart && <Cart 
            currentSale={currentSale}
            totalOnCart={Number(currentSale.reduce((acc, item) => acc + (item.price - item.discountValue), 0)).toFixed(2)}
        />}
      </header>
    </div>
  );
}

export default App;
