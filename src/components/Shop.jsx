import React, { useEffect, useState } from 'react';
// импортируем сслку на апи и на ключ
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';

function Shop(props) {
    // создазим состояниz списка товаров и загрузки
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    // создадим еще одно состояние с массивом заказанных товаров
    const [order, setOrder] = useState([]);
    // создадим состояние видим мы корзину или нет
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        // функция принимает один элемент товара (item), в нем будет id название и цена
        // нужно проверить есть ли в корзине текущий выбраный товар, чтобы не создавать новый. для этого создадим объект
        // передадим в него все ключи от item и добавим ключ quantity
        // чтобы выполнить проверку если выбраный товар в корзине, в массиве order, создадим проверочный индекс
        // и пробежим по массиву order, проверим наличие товара с текущим товаром по id
        // создадим константу и запишем в нее резулльтат findIndex
        // будем проверять совпадают ли id, если id совпадет, то мы получим индех этого элемента, если не найдем то получим -1
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        ); //получим индех элемента или -1
        if (itemIndex === -1) {
            // если не находим в ордере текущий элемент, то:
            const newItem = {
                ...item,
                quantity: 1,
            };
            // функция setOrder() возвращает массив, в котором развoрачиваем уже существующие товары ...order
            // и добавляет туда новый объект newItem
            setOrder([...order, newItem]);
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
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    // если индексы НЕ совпадают, т.е не найден, то вернем текущий элемент
                    return orderItem;
                }
            });
            setOrder(newOrder); // отправляем новый массив в нащ стейт
        }
    };

    // так как информация о заказе хранится в этом компоненте, то и функцию удаления товара из корзины будем писать на этом уровне
    // и передавать ее в корзину на иконку (close) через онКлик
    const removeFromBasket = (itemId) => {
        // на входе получаем id товара (mainId)
        // пробежим фильтром по списку в корзине и оставим только те товары id которых не совпадают с переданным id
        // запишем новый отфильтрованный массив в константу и передадим его в стейт
        const newOrder = order.filter(el => el.mainId !== itemId);
        setOrder(newOrder);
    }

    //Для того чтобы сделать кнопки увеличения и уменьшения товаров в корзине 
    // создадим две функции и передадим их к элементу корзины
    const incItemBasket = (id) => {
        // создадим константу и запишем в неё новый массив полученый в результате операции + над елементом корзины (через мап)
        const newOrderInc = order.map((el) => {
            if (el.mainId === id) {
                // то мы должны вернуть новый квонтити а остальные ключи оставить как есть (развернуть их)
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                }
            } else {
                // иначе возвращаем обычный элемент
                return el;
            }
            
        })
        setOrder(newOrderInc);
    }

    const decItemBasket = (id) => {
        // создадим константу и запишем в неё новый массив полученый в результате операции + над елементом корзины (через мап)
        const newOrderDec = order.map(el => {
            if (el.mainId === id) {
                // то мы должны вернуть новый квонтити а остальные ключи оставить как есть (развернуть их)
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    // сделаем провверку что квонтити не меньше нуля:
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
                
            } else {
                // иначе возвращаем обычный элемент
                return el;
            }
            
        })
        setOrder(newOrderDec);
    }

    // функция меняющая состояние показа корзины. передаем функцию в корзину cart и в список товаров в корзине на иконку
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    useEffect(() => {
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
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content main'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            
            {/* сделаем проверку, если ключ loading = true, то возвращаем прелоадер, если фолс то передаем через пропс goods товары */}
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} cb={addToBasket} />
            )}

            {/* корзину показываем только когда ключ isBasketShow активен (true), при клике на корзину ключ меняется, 
            делаем проверку и передаем список заказов order*/}
            {/* также передаем функцию показа корзины, добавим в нее иконку и по весим на клик эту функцию */}
            {isBasketShow && <BasketList 
            order={order} 
            handleBasketShow={handleBasketShow} 
            removeFromBasket={removeFromBasket}
            incItemBasket={incItemBasket}
            decItemBasket={decItemBasket}
            />}
            
        </main>
    );
}

export default Shop;
