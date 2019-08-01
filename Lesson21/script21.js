"use strict";

// № 1

let arr1 = ['Кот', 'Собака', 'Жираф'];
function searchArrayWord(searchArray, word) {
    for(let i = 0; i < searchArray.length; i++) {
        if( searchArray[i] === word ) {
            return true;
        }
    } 
    return false;
}
console.log(searchArrayWord(arr1,'Жираф'));


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

let obj1 = {html:'HTML',css: 'CSS', js: 'ECMA'};
let keys = [];
for (let key in obj1) {
    keys.push(key);
}
console.log(keys);




// № 5

let obj2 = {
    'name' : "Eugene",
    'phonenumber' : +380671283805,
    'address' : "Poltava",
    'total' : '3000',
    'weight' : 850,
    'booking' : [
        {
            'name': 'pair of shoes',
            'price': '1000',
            'weight': 400
        }, 
        {
            'name': 'pants',
            'price': '1000',
            'weight': 200
        }, 
        {
            'name': 'sweater',
            'price': '1000',
            'weight': 250
        }
    ]
}

console.log(obj2);

