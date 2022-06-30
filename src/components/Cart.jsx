import React from 'react';

function Cart(props) {
    // в пропсы будем получать кол-во товаров и функцию отвечающую за показ конзины (модальное окно) при клике на нее.
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return (
        <div className='cart pink lighten-1 white-text shadow' onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {/* проверяем, если кол-во товаро не равно нулю, то выведем спан с кол-вом, если ноль - то null */}
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}

        </div>
    );
}

export default Cart;
// style={{border: 'solid 0.15rem rgb(255, 255, 255)', borderRadius: '0.5rem'}} onClick={handleBasketShow} 