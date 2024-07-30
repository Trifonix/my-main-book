# Моя главная книга

## JavaScript

### О языке программирования JavaScript

Язык программирования JavaScript в 1995 году придумал американский программист Брендан Айк. На тот момент ему было 34 года. И придумал он этот язык программирования за 10 дней.

Сам по себе JavaScript довольно сложная технология. Этот язык программирования состоит из несколько других технологий. Причем, в зависимости от браузера сам JavaScript может выглядеть по-разному. Основа JS - это ECMAScript. Скрипты на JS запускаются с помощью интерпретаторов. Так, в браузере Google Chrome интерпретатор называется V8. А в Mozilla Firefox - SpiderMonkey.

JavaScript - это мультипарадигменный язык программирования, в котором реализованы несколько парадигм программирования: процедурное программирование, объектно-ориентированное программирование, функциональное программирование.

Функциональное программирование - это когда функции передаются в другие функции, как аргументы; когда функции возвращаются из других функций.

### Функции

Функции - это подпрограммы, которые в JS нужны для многократного использования одинакового кода.

#### Пример 1:
```javascript
function hello() {
    console.log('Hello World!');
}
hello();
```

#### Пример 2:
```javascript
function hello() {
    let name = 'World';
    console.log('Hello ' + name + '!');
}
hello();
```

#### Пример 3:
```javascript
function hello(name) {
    name = name || 'somebody';
    console.log('Hello ' + name + '!');
}
hello('World');
```

#### Пример 4:
```javascript
function hello(name='somebody') {
    console.log('Hello ' + name + '!');
}
hello('World');
```

#### Пример 5:
```javascript
function calc(number1, number2) {
    return number1 + number2;
}
let result = calc(5, 6);
console.log(result);
```

#### Пример 6:
```javascript
function abs(x) {
    return (x<0) ? -x : x;
}
console.log(abs(-42));
console.log(abs(20));
```

#### Пример 7:
```javascript
function power(base, exp) {
    let result = 1;
    for(let i=0; i<exp; i++) { result*=base; }
    return result;
}
console.log(power(2, 13));
console.log(power(4, 4));
console.log(power(5, 1));
```

#### Пример 8:
```javascript
let a = 1;
let b = 2;

function funcInGlobal() {
    let a = 3;
    console.log('a: ' + a); // 3
    console.log('b: ' + b); // 2
    b = 4;

    function funcInLocal(c) {
        let b = 5;
        console.log('a: ' + a); // 3
        console.log('b: ' + b); // 5
        console.log('c: ' + c); // 6
    }
    funcInLocal(6);
}
funcInGlobal();

console.log('a: ' + a); // 1
console.log('b: ' + b); // 4
```