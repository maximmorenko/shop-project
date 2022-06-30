import React from 'react';
import BasketItem from './BasketItem';

function BasketList(props) {
    const {order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype
     } = props; // ожидаем список товаров, массив

    // общую стоимость товаров запишем в переменную, и будем обновлять ее динамически. добавим ее в li
    // будем использовать редьюс, пробежим по выбраному списку товаров и будем каждый раз прибавлять к аккумулятору значение прайса
    const totalPrice = order.reduce((acc, el) => {
        return acc + el.price.regularPrice * el.quantity
    }, 0)


    return (
        <ul className="collection basket-list shadow-3" >
            {/* z-depth-5 тень */}
            {/* ключ active отвечает за выделенное поле */}
            {/* остальные елементы будут отрисовываться динамически, в зависимости от состояния order */}
            <li className="collection-item pink lighten-3 active" style={{color: 'black', fontSize: '18px'}}>CART</li>
            {/* делаем проверку, если длина массива ордер есть, то мы обходим каждый елемент массива мапом и на кождый эл возвращаем 
            баскет айтем. назначаем ключу id и передаем остальной набор пропсов (имя прайс кол-во) ,
            если массив пустой то выведем еще один елемент списка(li) с надписью Корзина пуста*/}
            {
                order.length 
                ? order.map((item) => <BasketItem key={item.mainId} {...item} removeFromBasket={removeFromBasket}/>) 
                // пробрасываем функцию удаления removeFromBasket на нижний уровень 
                : <li className="collection-item">Cart is empty</li>
            }
            
            <li className="collection-item pink lighten-3 active" style={{color: 'black', fontSize: '14px'}}>Total Price: {
                // проверим есть ли значение, если есть то выведем его , если нет то запишем ноль
                 totalPrice ? totalPrice : 0 
            } $
            </li>
            
            <i className="material-icons bascet-close" onClick={()=>{handleBasketShow()}}>close</i>
            
        </ul>
        
    );
}

export default BasketList;