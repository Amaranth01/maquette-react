import './Cart.css';
import {CartItem} from '../CartItem/CartItem';
export const Cart = function () {
    return(
        <div className="cart">
            <h1 className="cartTitle">Vos articles</h1>
            <CartItem/>
        </div>
    );
}