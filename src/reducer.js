export function reducer(state, {type, payload}) {
    // функция принимает стейты и выполняет с ними действия (action) action состоит из type и pyload. делаем деструктуризацию
    // будем свичом пробегаться по тайпу и смотреть какие есть варианты значения
    switch (type) { 

        case 'ADD_TO_BASKET':

            {
                // // наследуем все ключи, и один меняем. (order)
                // ...state,
                // order: state.order

                const itemIndex = state.order.findIndex(
                    (orderItem) => orderItem.mainId === payload.mainId
                ); //получим индех элемента или -1

                // создадим новый массив заказов, по умолчанию null
                let newOrder = null;
                if (itemIndex === -1) {
                    // если не находим в ордере текущий элемент, то:
                    const newItem = {
                        ...payload,
                        quantity: 1,
                    };
                    // в этой ветке в нашем новом ордере разворачиваем текучий ордер и добавляем в конец новый ел. newItem
                    newOrder = [...state.order, newItem]

                } else {
                    // если найдем такой элемент то мы должны прибавить +1 к quantity етого элемента, а осталььные оставить без изменения
                    // для начала нужно найти этот элемент
                    // создадим переменную и запишем в нее новый массив, новый заказ. пробежим по массиву ордер мапом
                    // на входе item и index
                    // в этой ветке изменим тот стейт который был. пробежим по ниму мапом, 
                    // если id совпадают то у текущего эл. увеличим квонтити на 1
                    newOrder = state.order.map((orderItem, index) => {
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

                }

                // в итоге возвращаем объект, разварачиваем в нем текущий стейт, перезаписываем ордер на ньюОрдер
                // и в алертнеим записываем текущее имя элемента.
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.displayName,
                }
            }

        case 'REMOVE_FROM_BASKET':
            return {
                // наследуем все ключи, и один меняем. (order)
                ...state,
                // берем текущее состояние ордера, и фильтруем его. записываем результат в ключ
                //  мы ожидаем что в момент вызова removeFromBasket мы получим в пейлод id
                order: state.order.filter(el => el.mainId !== payload.mainId),
            }
        
        case 'CLOSE_ALERT': 
        return {
            // если кейс равен состоянию 'CLOSE_ALERT' то возвращаем и разворачиваем весь текеущий стейт,
            // а также меняем значение одного ключа (alertName) очмищае его значение
            ...state,
            alertName: '',
        }

        case 'INC_ITEM_BASKET':
            return {
                // наследуем все ключи, и один меняем. (order)
                ...state,
                // в ключ ордер запишим новое состояние. пробежимся по массиву ордер, 
                // если id совпадают то у текущего эл. увеличим квонтити на 1
                order: state.order.map((el) => {
                    if (el.mainId === payload.mainId) {
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
                }),
            }

        case 'DEC_ITEM_BASKET':
            return {
                // наследуем все ключи, и один меняем. (order)
                ...state,
                // в ключ ордер запишим новое состояние. пробежимся по массиву ордер, 
                // если id совпадают то у текущего эл. уменьшим квонтити на 1
                order: state.order.map(el => {
                    if (el.mainId === payload.mainId) {
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
            } 
    
        case 'HANDLE_BASKET_SHOW': 
        return {
            ...state,
            isBasketShow: !state.isBasketShow, // isBasketShow будет отрицанием того что сейчас в стейте
        }

        default:
            return state; // если никакой из вариантов не выполнится то по умолчанию возвращаем стейт каокй есть
    }
}

