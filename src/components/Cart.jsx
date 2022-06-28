import React from 'react';

function Cart(props) {
    // в пропсы будем получать кол-во товаров.
    const {quantity} = props;
    return (
        <div className='cart deep-purple darken-1 white-text'>
            <i className="material-icons">shopping_cart</i>
            {/* проверяем, если кол-во товаро не равно нулю, то выведем спан с кол-вом, если ноль - то null */}
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;