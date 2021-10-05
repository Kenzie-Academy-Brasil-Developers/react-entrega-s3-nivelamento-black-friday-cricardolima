
import { useState } from 'react';
import './App.css';
import GenerateButton from './components/GenerateButton';

function App() {

  const [ blackProduct, setBlackProduct] = useState([]);

  const [useProduct, setProduct] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
    ]);

  return (
    <div className="App">
      <header className="App-header">
        <GenerateButton 
            products={useProduct}
            setBlackProduct={setBlackProduct}
        />
      </header>
    </div>
  );
}

export default App;
