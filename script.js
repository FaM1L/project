"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let lastFilm = prompt("Один из последних просмотренных фильмов?");
let evaluateOfFilm = prompt("На сколько оцените его?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lFilm: lastFilm,
        logan: evaluateOfFilm
    },
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
console.log(numberOfFilms);
console.log(lastFilm);
console.log(evaluateOfFilm);



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
