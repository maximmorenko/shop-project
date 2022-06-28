import React, { useEffect, useState } from 'react';
// импортируем сслку на апи и на ключ
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';


function Shop(props) {
    // создазим состояниz списка товаров и загрузки
    const  [goods, setGoods] = useState([]);
    const  [loading, setLoading] = useState(true);
    // создадим еще одно состояние с массивом заказанных товаров
    const [order, setOrder] = useState([]);

    const addToBasket = (item) => {
        // функция принимает один элемент товара (item), в нем будет id название и цена
        // нужно проверить есть ли в корзине текущий выбраный товар, чтобы не создавать новый. для этого создадим объект
        // передадим в него все ключи от item и добавим ключ quantity
        // чтобы выполнить проверку если выбраный товар в корзине, в массиве order, создадим проверочный индекс
        // и пробежим по массиву order, проверим наличие товара с текущим товаром по id
        // создадим константу и запишем в нее резулльтат findIndex
        // будем проверять совпадают ли id, если id совпадет, то мы получим индех этого элемента, если не найдем то получим -1
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId); //получим индех элемента или -1
        if (itemIndex === -1) {
            // если не находим в ордере текущий элемент, то:
            const newItem = {
                ...item,
                quantity: 1
            }
            // функция setOrder() возвращает массив, в котором развoрачиваем уже существующие товары ...order 
            // и добавляет туда новый объект newItem
            setOrder([...order, newItem])
        } else {
            // если найдем такой элемент то мы должны прибавить +1 к quantity етого элемента, а осталььные оставить без изменения
            // для начала нужно найти этот элемент
            // создадим переменную и запишем в нее новый массив, новый заказ. пробежим по массиву ордер мапом
            // на входе item и index
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    // если индексы совпадают то перезапишем елемент, добавим +1 к quantity, а остальные ключи развернем без измен.
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    // если индексы НЕ совпадают, т.е не найден, то вернем текущий элемент
                    return orderItem;
                }
            })
            setOrder(newOrder) // отправляем новый массив в нащ стейт
        }
    }

    useEffect(() => {
        // передаем ссылку и ключ через заголовок
        // вторым параметром у фетча является объект настроек, там и передаем ключ
        fetch(API_URL, { 
            headers: { 
                Authorization: API_KEY,
            },
        })
        .then(response => response.json())
        .then((data) => { 
            data.shop && setGoods(data.shop); 
            setLoading(false); 
        })
        
    }, []);
    

    return <main className='container content'>
        <Cart quantity={order.length}/>
        {/* сделаем проверку, если ключ loading = true, то возвращаем прелоадер, если фолс то передаем через пропс goods товары */}
        {loading ? <Preloader /> : 
        <GoodsList goods={goods} cb={addToBasket}/>
    }
    </main>;
}

export default Shop;
