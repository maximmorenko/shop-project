import React from 'react';

function BasketItem(props) {
// ожидаем информацию о товаре.
// для удоброй работы с пропсами сделаем деструктуризацию
    const {
        mainId, 
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incItemBasket = Function.prototype,
        decItemBasket = Function.prototype
    } = props;

    return (
        <li className="collection-item" id={mainId} style={{backgroundColor: '#00dcf9'}}>
            {displayName}{' '}
            <i className="material-icons count-icons" onClick={()=> decItemBasket(mainId)}>remove</i>
            x{quantity}
            <i className="material-icons count-icons" onClick={() => incItemBasket(mainId)}>add</i> = 
            {price.regularPrice * quantity} $
            {/* // иконка удаления */}
            <span className="secondary-content" style={{color: 'rgb(114, 30, 159)'}}>
                <i className="material-icons close-icons" onClick={()=>{removeFromBasket(mainId)}}>close</i>
            </span> 
        </li>
    );
}

export default BasketItem;