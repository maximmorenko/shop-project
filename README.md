# интернет магазин. Площадка электронной коммерции. Адаптирован под разные устройства.

1. в проекте предусмотренна витрина, где можно выбрать товар и положить в корзину,
2. в можальном окне корзине, перечситать общую стоимость, добавить кол-во, удалить товар.

# API проекта https://dashboard.fortniteapi.io/

# API KEY: b48c7c3c-928896fd-ab81473c-4caa5f77

# API URL: https://fortniteapi.io/v2/items/list?lang=ru

1. в гет параметрах можно поменять язык входящих данных
2. в постмане в headers добавляем заголовок Authorization и указываем ему ключ b48c7c3c-928896fd-ab81473c-4caa5f77

# VS установка плагинов:

1. ESLint
2. Auto Rename Tag
3. Bracket Pair Colorizer (позволяет подсвечивать скобки разными цветами)

# Установка реакт приложения

# npx create-react-app .

установит в текущей открытой паке

# почистил реакт, название, описание в html и manifest

# подключаем библиотеку CSS google

# <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

# подключаем иконки

# <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

иконки вставляем через парный тег <i class="material-icons">сюда подбираем нужное слово на сайте</i>

# шапку и футер возьмем из проекта movies

# создаем файл с локальными переменными .env.local

разместим там наш ключ REACT_APP_API_KEY=b48c7c3c-928896fd-ab81473c-4caa5f77

# создаем файл config.js

в нем будем получать наш API_KEY и API_URL

# Ctrl+Shift+P format-document

# вывод списка товаров:

# состояние заказа, иконка корзины
1. создадим компонент для иконки. иконку выбираем на сайте

# создание корзины, пересчет суммы заказа

# чтобы еслинт не ругался нужно над ошибкой оставить вот такой коммент:
// eslint-disable-next-line

# всплывающее уведомление о добавлении товара в корзину

# публикация проекта
1. переносим ключ с енв локал на гитхаб в секреты (настройки проекта => новый секрет)
2. устанавливаем npm install gh-pages -D (-D это то же самое что и --save-dev)
3. сохраняем изменения git add -A
4. запускаем диплой npm run deploy
# ссылка на проект https://maximmorenko.github.io/shop-project/

# Концепция использования Context API и useReducer вместо пропсов
1. вместо пропсов будем использовать возможности хуков контекста а также редьсер вместо стейта
2. будем доставать нужные пропсы в нужном месте из контекта через провайдер
3. редьюсер будет управлять всеми состояниями и действиями с ними

# Создание контекста с провайдером
# Создание редьюсера, добавление первых кейсов
# Доработка редьюсера и методов контекста
Теперь имея готовый редьюсер, контекст, и шоп обернут в провайдер, 
мы можем через провайдер спускать все наши методы (функции) к нужным елементам, вызывая их из импортируемого контекста.
Теперь все стейты можно удалить, но будем делать это поэтапно. 
Начнем с goodsItem.
# Переключение всех компонентов на контекст вместо пропсов
избавились от хука юзСтейт. из шопа перенесли все функции (методы) в контекст
сделали рефакторинг приложения
# запускаем диплой npm run deploy
# ссылка на проект https://maximmorenko.github.io/shop-project/