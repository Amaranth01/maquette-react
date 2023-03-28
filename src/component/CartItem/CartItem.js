import './CartItem.css';
import trash from '../../assets/images/trash.svg';

export const CartItem = function () {
    const cart = [
        {id : 1, image : trash, name : 'Produit 1', quantity : '(2)'},
        {id : 2, image : trash, name : 'Produit 2', quantity : '(4)'},
        {id : 3, image : trash, name : 'Produit 3', quantity : '(4)'},
    ]
    return (
        <div className="cart">
            <ul>
                {cart.map(cartItem =>
                    <li key={cartItem.id} className='cartList'>
                        <img src={cartItem.image} alt="trash" className='trash'/>
                        <span className='nameCart'>{cartItem.name}</span>
                        <span className="quantityCart">{cartItem.quantity}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}