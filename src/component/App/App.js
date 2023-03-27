import './App.css';
import {ProductList} from '../ProductList/ProductList';
import {Header} from '../Header/Header';
import {Cart} from "../Cart/Cart";

function App() {
  return (
      <>
        <Header/>
        <Cart>
        </Cart>
        <ProductList/>
      </>
  );
}

export default App;
