import './App.css';
import {ProductList} from '../ProductList/ProductList';
import {Header} from '../Header/Header';
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";

function App() {
  return (
      <>
        <Header/>
          <div className="all">
              <div className="cat">
                  <Cart/>
                  <Categories/>
              </div>
              <div className="product">
                  <ProductList/>
              </div>

          </div>
      </>
  );
}

export default App;
