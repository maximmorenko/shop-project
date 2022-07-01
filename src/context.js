// 1. импортируем криейт кнтекст из реакта
import { createContext } from "react";

// создадим контекст магазина и запишем его в константу ShopContext
export const ShopContext = createContext();
// у ShopContext есть провайдер, который мы будем использовать чтобы передать пропс

// создадим функцию контекс провайдер (обертку для передачи данных), 
// которая будет принимать проп чилдрен и возвращать провайдер шопконтекста
export const ContextProvider = ({children}) => {
    return <ShopContext.Provider>
        {children}
    </ShopContext.Provider>
}