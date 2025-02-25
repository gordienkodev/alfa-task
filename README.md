# SPA
 
Deploy: [https://guz86.github.io/alfa-task/](https://guz86.github.io/alfa-task/)

- breeds: [https://guz86.github.io/alfa-task/products](https://guz86.github.io/alfa-task/products)
- one breed: [https://guz86.github.io/alfa-task/products/african](https://guz86.github.io/alfa-task/products/african)
- add breed: [https://guz86.github.io/alfa-task/create-product](https://guz86.github.io/alfa-task/create-product)

## Author

- [Pavel Gordienko](https://github.com/gordienkodev)

## Setup and Running

- Use `node 21.x` or higher.
- Clone this repo: `$ git clone https://github.com/gordienkodev/alfa-task.git`.
- Go to downloaded folder: `$ cd alfa-app`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm run dev`.
- Now you can see web application to the address: `http://localhost:5174/alfa-task/`.

### Build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run dev
```

## Stack
- Vite
- React
- Typescript
- Zustand

## API
- [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)

## Folder structure

- Components - components of application.
- Utils - helper utilities, functions, and classes that can be used in different parts of your application.
- Pages - components that represent individual pages.
- Store - zustand store

## Screenshots
![image](https://github.com/user-attachments/assets/7d369a0e-ac3e-4e7b-8bc3-15afe2a9a19a)
![image](https://github.com/user-attachments/assets/a0476981-0ffc-4a74-ac1a-878c1500e73a)
![image](https://github.com/user-attachments/assets/9f9bcd76-c3c2-4a86-968f-ffd06f37af02)


## Task

Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта или созданная пользователем. 
Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас. 

Стэк: Typescript \ React \ Redux || Zustand

Для задачи можно выбрать любое публичное api, например, отсюда https://github.com/public-apis/public-apis Все полученные и созданные данные хранить во внутреннем store

Можно использовать ui библиотеки, библиотеки для работы с формой. 
Будет оцениваться подход к заданию, качество и структура кода.

Задача 1. Вывести список продуктов

На странице /products 
- вывести весь список продуктов
- на карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается like. Иконка должна подкрашиваться, когда проставлен like. 
- на карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
- добавить фильтр для просмотра всех карточек и карточек, добавленных в избранное
- контент карточки(текст) должен быть урезан, чтобы у карточек была одинаковая высота
- при клике на любом месте карточки (кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки.

Задача 2. Страница продукта

На странице /products/:id 
- вывести более подробную информацию о продукте. 
- сделать кнопку для перехода на основную страницу

Задача 3. Создание продукта

- На отдельной странице /create- product реализовать создание продукта
- создать форму с полями. Поля обязательные и с минимальной валидацией.
- при отправке формы, сохранить данные в общий store.

Бонусы

- Реализовать пагинацию списка
- Реализовать возможность редактирования карточки продукта
- Реализовать дополнительную фильтрацию
- Реализовать поиск (без кнопки отправки) 

В каком формате сдавать?
Ссылка на GitHub + проект, выложенный на GitHub Pages
Сроки - до 7 дней.
