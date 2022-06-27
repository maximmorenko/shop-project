import React, { useEffect, useState } from 'react';
// импортируем сслку на апи и на ключ
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';


function Shop(props) {
    // создазим состояниz списка товаров и загрузки
    const  [goods, setGoods]  = useState([]);
    const  [loading, setLoading]  = useState(true);
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
        {/* сделаем проверку, если ключ loading = true, то возвращаем прелоадер, если фолс то передаем через пропс goods товары */}
        {loading ? <Preloader /> : 
        <GoodsList goods={goods}/>
    }
    </main>;
}

export default Shop;
