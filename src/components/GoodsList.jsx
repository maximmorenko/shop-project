import React from 'react';
import GoodsItem from './GoodsItem';

function GoodsList(props) {
    const {goods = []} = props;
    // если список пустой то выведем h3
    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        // если список, массив с данными от сервера, не пустуой, то пробежим по нему мапом
        // и каждома элементу передадим пропсы
        <div className='goods'>
            {goods.map(
                item => {return <GoodsItem key={item.id} {...item}/>}
                )}
        </div>
    );
}

export default GoodsList;