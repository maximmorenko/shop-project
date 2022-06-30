import React from 'react';

function BasketItem(props) {
// ожидаем информацию о товаре.
// для удоброй работы с пропсами сделаем деструктуризацию
    const {
        mainId, 
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype
    } = props;

    return (
        <li className="collection-item" id={mainId} style={{backgroundColor: '#00dcf9'}}>
            {displayName} x {quantity} = {price.regularPrice * quantity} $
            {/* // иконка удаления */}
            <span className="secondary-content" style={{color: 'rgb(114, 30, 159)'}}>
                <i className="material-icons close-icons" onClick={()=>{removeFromBasket(mainId)}}>close</i>
            </span> 
        </li>
    );
}

export default BasketItem;