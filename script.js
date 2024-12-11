"use strict";



//////////////////////////////////////////МЕТОДЫ И СВОЙСТВА/////////////////////////////
// const str = "tEsT";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello World";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


///////////////////////////////////////////ФУНКЦИИ////////////////////////////////////////
// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// // function calc(a, b){
// //     return(a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(7, 12));

// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello");
// };
// logger();

// const calc = (a, b) => a + b;
////////////////////////////////////////ЦИКЛЫ/////////////////////////////////////////
//let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for(let i = 1; i < 8; i++){
//     if(i === 6){
//         //break;
//         continue;
//     }
//     console.log(i);
    
// }

///////////////////////////////////////////УСЛОВИЯ/////////////////////////////////////
// if(1){
//     console.log("Ok!");
// } else{
//     console.log("Error");
// }

// if(num < 49){
//     console.log("Error");
// } else if(num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }


// (num === 50) ? console.log("Ok!") : console.log("Error");

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 51:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }
/////////////////////////////////////////////ПРАКТИКА////////////////////////////////////
let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?"),
              b = prompt("На сколько оцените его?");
         if(a != null && b != null && a != "" && b != "" && a.length < 50){
             personalMovieDB.movies[a] = b;
             console.log("done");
         } else {
             console.log("error");
             i--;
         }
     
         
     }
}
rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();



/////////////////////////////////////////ОПЕРАТОРЫ///////////////////////////////////////
// console.log(4 + +"5");

// let incr = 10,
// decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 != 8);

// const isChecked = false,
// isClose = true;

// console.log(isChecked || isClose);
/////////////////////////////////ИНТЕРПОЛЯЦИЯ//////////////////////////////////////////
// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);
/////////////////////////////////ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ///////////////////////////////
//alert('Hello');


// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как вас зовут?", "");
// answers[1] = prompt("Где вы живете?", "");
// answers[2] = prompt("Какой ваш любимый цвет?", "");

// console.log(typeof(answers));
// console.log(typeof(null));
//////////////////////////////////ТИПЫ ДАННЫХ//////////////////////////////////////
// let number = 4;

// console.log(-4/0);
// console.log('string' * 9);

// const person = "5";

// const bool = false;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[1]);

///////////////////////////////////////////////ПЕРЕМЕННЫЕ/////////////////////////////////
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50

// }
// obj.a = 10;

// console.log(obj);


// var name = "Alex";

// {
//     var result = 50;
// }
// console.log(result);

// alert(5);
// [].push('a');
