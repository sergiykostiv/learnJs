'use strict'; // строгий режим

alert('Hello');

// alert('Hello'); выводит увемление 

const result = confirm("Are you here?");

console.log(confirm);

// confirm("Are you here?"); выводит форму подтверждения, записывается в булевом значении;

const answer = +prompt("What is your name?", "Your name");

console.log(answer);

// prompt("What is your name?", "Your name"); дает пользователю записать что-то
// "Your name" - это плейсходер, ВАЖНО все данные от пользователя записываюся строкой,
// для перевода в число используем "+" пример +prompt

const answers = []; // создание масива

answers[0] = prompt("What is your first name?", ""); // создание единици масива
answers[1] = prompt("What is your last name?", "");
answers[2] = prompt("What is your age?", "");

document.write(answers); // document.write() заменяет все содержимое страницы, 

console.log(typeof(answers)) // typeof(answers) выводит тип данных

// ИНТЕРПОЛЯЦИЯ СТОРОКИ //

const category = 'toys';

console.log(`http://url.com/${category}/5`); // (только с кавычками ``) ${category} такая запись добавляет к чему либо данные переменной

// ОПЕРАТОРЫ //

let incr = 10, // такой формат записи тоже применим для создания нескольких переменных
    decr = 10; // не забываем за ';'

incr++; // Инкремент ++ повышает значение на 1
decr--; // Декримент -- понижает значение на 1

// incr++ - постфиксная форма запси // при использовании сразу, те при вставке в форму к примеру console.log(incr++) работать не будет
// ++incr - префиксная форма

// = оператор присвоеня
// == оператор равно
// === строго равно по типу
// && - оператор и
// || - опертор или
// ! - оператор отрицания, превращает false в true и наоборот
// != не равно
// !== строго не равно по типу

const isCheched = true,
      isClose = false;

console.log(isCheched || !isClose); // оператор отрицания ставитсяв преф форме

console.log(incr);
console.log(decr);

console.log(5%2); // Вернет остаток от деления

console.log(5*4 == 8) // Вернет булевое значение, == это оператор равно

/// Условия 

// Условия переводит любой тип данных в булиновый

if ( 4 == 8 ) {            // ( 4 == 4) - это само условие, {в таких скобках мы выводим что необходимо сделать}
    console.log('ok!');
}   else {                 // else выводится если условие не выполнен
    console.log('error');
}

const num = 80;

if (num < 49) {
    console.log('error')
}   else if (num > 100) {  // проверка нескольких условий
    console.log('many');
}   else {
    console.log('ok!');
}

// Тернарный оператор 

(num === 50) ? console.log('ok!') : console.log('error');

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('ok!');
        break;
    default:
        console.log('not ok!');
        break;
}





/// ОПРЕДЕЛЕНИЯ ///

// Канкотинация - операция склеивания объектов линейной структуры, обычно строк.
// Интерполяция - способ соединения строк через вставку значений переменных в строку-шаблон
// Инкремент
// Дикримент