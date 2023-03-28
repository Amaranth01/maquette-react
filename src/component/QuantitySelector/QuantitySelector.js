import './QuantitySelector.css';

export const QuantitySelector = function () {
    return(
        <div className='quantity'>
            <button className="minus">-</button>
            <input type="number" className='number'/>
            <button className='more'>+</button>
        </div>
    );
}