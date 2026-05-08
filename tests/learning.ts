// // 1. Создай переменную с твоим именем
// const name: string = 'Николай';

// // 2. Создай переменную с количеством товаров
// const itemCount: number = 6;

// // 3. Создай переменную - залогинен ли пользователь
// const isLoggedIn: boolean = false;

// // 4. Создай массив с именами товаров saucedemo
// const products: string[] = [
//     'Sauce Labs Backpack',
//     'Sauce Labs Bike Light',
//     'Sauce Labs Bolt T-Shirt'
// ];

// // 5. Выведи в консоль
// console.log(name);
// console.log(itemCount);
// console.log(isLoggedIn);
// console.log(products);
// console.log(products[0]); // первый элемент массива

interface Product {
    name: string,
    price: number,
    color: string,
    zip: boolean
}

const backpack: Product = {
    name: "backpack",
    price: 29.99,
    color: "black",
    zip: true
}

console.log(backpack);
console.log(backpack.name, backpack.price);