import './ProductList.css';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import {Product, product} from '../Product/Product';
export const ProductList = function () {
    const Products = [
        {id : 1, image : image1, name : 'Produit 1', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,price : 230, stock : 100},
        {id : 2, image : image2, name : 'Produit 2', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,price : 230, stock : 100},
        {id : 3, image : image3, name : 'Produit 3', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,price : 230, stock : 100},
        {id : 4, image : image4, name : 'Produit 4', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,price : 230, stock : 100},
        {id : 5, image : image5, name : 'Produit 5', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,price : 230, stock : 100},
    ];

    return(
        <div className='list'>
            <ul className='productList'>
                {Products.map(product =>
                    <li key={product.id}>
                        <h1 className='name'>{product.name}</h1>
                        <img src={product.image} alt=""/>
                        <span className='description'>{product.description}</span> <span className='price'>{product.price}</span>
                    </li>
                )}
            </ul>
        </div>

    );
}