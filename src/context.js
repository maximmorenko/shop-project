// 1. импортируем криейт кнтекст из реакта
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

//эмулируем значения по умолчанию (берем из хуков сетстейт):
const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

// создадим контекст магазина и запишем его в константу ShopContext
export const ShopContext = createContext();
// у ShopContext есть провайдер, который мы будем использовать чтобы передать пропс

// создадим функцию контекс провайдер (обертку для передачи данных), 
// которая будет принимать проп чилдрен и возвращать провайдер шопконтекста
export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState); 
    // юзРедюсер будет принимать нашу функцию редьюсер со свитчем и значение по умолчанию
    // полученые ключи value будем спускать ниже
    // dispatch функция обновления value

    // эмулируем функцию closeAlert
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'}); //dispatch будет принимать action {type, pyload}
    };

    // эмулируем функцию addToBasket
    value.addToBasket = (item) => {
        dispatch({
            type: 'ADD_TO_BASKET', 
            payload: item,
        });

    }

    // эмулируем функцию removeFromBasket
    value.removeFromBasket = (itemId) => {
        // на входе itemId, на выходе диспечер с типом и пэйлоад с ключем (текщий id)
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            payload: { mainId: itemId }
        });
    }
    // дальше мы передадим функцию в корзину, вытащим из контектса в компоненте корзина.

    // эмулируем функцию incItemBasket
    value.incItemBasket = (id) => {
        // на входе id, на выходе диспечер с типом и пэйлоад с ключем (текщий id)
        dispatch({
            type: 'INC_ITEM_BASKET', 
            payload: { mainId: id }
        });
    }

    // эмулируем функцию incItemBasket
    value.decItemBasket = (id) => {
        // на входе id, на выходе диспечер с типом и пэйлоад с ключем (текщий id)
        dispatch({
            type: 'DEC_ITEM_BASKET', 
            payload: { mainId: id }
        });
    }

    //эмулируем функцию handleBasketShow
    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'}); //dispatch будет принимать action {type, pyload}
    }

    return <ShopContext.Provider>
        {children}
    </ShopContext.Provider>
}