import './Categories.css';

export const Categories = function () {
    return(
        <div className='catego'>
            <select name="categories" id="cat">
                <option value="Categories">Categories</option>
                <option value="Produit 1">Produit 1</option>
                <option value="Produit 2">Produit 2</option>
                <option value="Produit 3">Produit 3</option>
                <option value="Produit 4">Produit 4</option>
                <option value="Produit 5">Produit 5</option>
            </select>
        </div>
    );
}