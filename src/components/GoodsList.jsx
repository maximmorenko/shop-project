import React, {useContext} from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';


function GoodsList(props) {
    const { goods = [] } = useContext(ShopContext);

    // если список пустой то выведем h3
    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        // если список, массив с данными от сервера, не пустуой, то пробежим по нему мапом
        // и каждому элементу передадим пропсы
        <div className='goods'>
            {goods.map(
                item => {return <GoodsItem key={item.mainId} {...item} />}
                )}
        </div>
    );
}

export default GoodsList;