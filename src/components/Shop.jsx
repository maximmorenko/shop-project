import React, { useEffect, useContext } from 'react';
// импортируем сслку на апи и на ключ
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import { ShopContext } from '../context';


function Shop() {
    const { 
        setGoods, 
        alertName, 
        isBasketShow, 
        order, 
        loading,
    } = useContext(ShopContext); // из контекста достаем нужные пропы

    useEffect(function getGoods () {
        // передаем ссылку и ключ через заголовок
        // вторым параметром у фетча является объект настроек, там и передаем ключ
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
            });
            // eslint-disable-next-line
    }, []);

    return (
        <main className='container content main'>
            <Cart quantity={order.length} />
            
            {/* сделаем проверку, если ключ loading = true, то возвращаем прелоадер, если фолс то передаем через пропс goods товары */}
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList /> 
            )}

            {isBasketShow && <BasketList />}

            {alertName && <Alert />}
            
        </main>
    );
}

export default Shop;
