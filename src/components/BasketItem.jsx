import React from 'react';

function BasketItem(props) {
// ожидаем информацию о товаре.
// для удоброй работы с пропсами сделаем деструктуризацию
    const {
        mainId, 
        displayName,
        price,
        quantity
    } = props;

    return (
        <li className="collection-item" id={mainId}>
            {displayName} x{quantity} = {price.regularPrice} руб.
            {/* // иконка удаления */}
            <span className="secondary-content" style={{color: 'rgb(114, 30, 159)'}}>
                <i className="material-icons close-icons " >close</i>
            </span> 
        </li>
    );
}

export default BasketItem;