import React, {useContext} from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
// ожидаем информацию о товаре.
// для удоброй работы с пропсами сделаем деструктуризацию
    const {
        mainId, 
        displayName,
        price,
        quantity,
    } = props;

    const { removeFromBasket, incItemBasket, decItemBasket} = useContext(ShopContext);

    return (
        <li className="collection-item grey lighten-5" id={mainId}>
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