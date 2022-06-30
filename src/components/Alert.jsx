import React, {useEffect} from 'react';
// всплывающая подсказка о том что товар добавлен в корзину
// этот алерт будем скрывать по таймеру, для этого будем исмользовать юзэффект и его жизненые циклы

function Alert(props) {
    const {alertName = '', closeAlert = Function.prototype} = props; // на входе будет имя товара (по умолчанию пустое) и функция очищающая алерт

    useEffect(() => {
        // создадим таймер, по окончанию времени будет вызвваться функция очистки алетра closeAlert
        const timerId = setTimeout(closeAlert, 3000); // спустя три секудны очищаем алерт

        // сделаем функцию очисти. если пришло новое имя товара, 
        // то мы должны запустить новый таймер, а старый очистить clearTimeout
        return () => {clearTimeout(timerId)}; // очищаем таймаут

        // чтобы еслинт не ругался нужно над ошибкой оставить вот такой коммент:
        // eslint-disable-next-line
    }, [alertName]) // зависимость будет имя товара

    return (
        <div id='toast-container'>
            <div className="toast">{alertName} added to cart</div>
        </div>
    );
}

export default Alert;