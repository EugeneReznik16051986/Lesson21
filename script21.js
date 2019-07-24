"use strict";

// № 1

let arr1 = ['Кот', 'Собака', 'Жираф'];
function searchArrayWord(searchArray, word) {
    for(let i = 0; i < searchArray.length; i++) {
        if( searchArray[i] === word ) {
            return true;
        }
        return false;
    } 
}
console.log(searchArrayWord(arr1, 'Кот'));


// № 2

let arr = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}
let result = sum/arr.length;
console.log(result);


// № 3

let arr2 = [1, 3, 5, 6, 7, 9];
for (let i = 5; i >= 0; i--){
	console.log("Элемент " + [i] + " равен " + arr2[i]);
}


// № 4

let obj = {
    html:'HTML',
    css: 'CSS',
    js: 'ECMA'
};
let counter = 0;
for (let key in obj) {
    counter++;
}
console.log(counter);




let obj1 = { 
    html:'HTML',
    css: 'CSS', 
    js: 'ECMA'
};
let keys = [];
for (let key in obj1) {
    keys.push(key);
}
console.log(keys);




// № 5

let obj2 = {
    'Имя покупателя' : 'Евгений',
    'Телефон покупателя' : '0991283505',
    'Адрес покупателя' : 'Полтава',
    'Общая сумма заказа' : 1000,
    'Общий вес заказа' : 2000,
    'Купленные товары' : {
        'вариант1' : 'Всякий хлам',
        'вариант2' : 'Вещи первой необходимости',
        'вариант3' : 'Подарки'
    },
};
console.log( obj2 ['Купленные товары']['вариант1'] );

