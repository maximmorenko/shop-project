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
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'}); //dispatch будет принимать action {type, pyload}
    };

    return <ShopContext.Provider>
        {children}
    </ShopContext.Provider>
}