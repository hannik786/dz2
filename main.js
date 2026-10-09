function task1() {
    let a = Number(prompt("Введіть початок діапазону:"));
    let b = Number(prompt("Введіть кінець діапазону:"));
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log("Сума:", sum);
}
function task2() {
    let a = Number(prompt("Введіть перше число:"));
    let b = Number(prompt("Введіть друге число:"));
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log("НСД:", a);
}
function task3() {
    let n = Number(prompt("Введіть число:"));
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}
function task4() {
    let n = Math.abs(Number(prompt("Введіть число:")));
    let count = 0;
    if (n === 0) {
        count = 1;
    }
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    console.log("Кількість цифр:", count);
}
function task5() {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Введіть число:"));
        if (n > 0) {
            positive++;
        }
        else if (n < 0) {
            negative++;
        }
        else {
            zero++;
        }
        if (n % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }
    console.log("Додатних:", positive);
    console.log("Від'ємних:", negative);
    console.log("Нулів:", zero);
    console.log("Парних:", even);
    console.log("Непарних:", odd);
}
function task6() {
    let answer;
    do {
        let a = Number(prompt("Введіть перше число:"));
        let b = Number(prompt("Введіть друге число:"));
        let operator = prompt("Введіть +, -, * або /:");
        let result;
        if (operator === "+") {
            result = a + b;
        }
        else if (operator === "-") {
            result = a - b;
        }
        else if (operator === "*") {
            result = a * b;
        }
        else if (operator === "/") {
            result = a / b;
        }
        else {
            result = "Невідомий оператор";
        }
        console.log("Результат:", result);
        answer = prompt("Хочете ще раз? (так/ні)");
    } while (answer === "так");
}
function task7() {
    let number = prompt("Введіть число:");
    let shift = Number(prompt("На скільки цифр змістити?"));

    shift = shift % number.length;

    let result = number.substring(shift) + number.substring(0, shift);

    console.log("Результат:", result);
}
function task8() {
    let days = [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
        "Неділя"
    ];
    let day = 0;
    let answer;
    do {
        console.log(days[day]);
        answer = prompt(
            "Бажаєте побачити назву наступного дня? (так/ні)"
        );
        day++;
        if (day === 7) {
            day = 0;
        }
    } while (answer === "так");
}
function task9() {
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
        console.log("----------------");
    }
}

function task10() {
    let min = 0;
    let max = 100;
    while (min <= max) {
        let n = Math.floor((min + max) / 2);
        let answer = prompt(
            "Ваше число > " + n +
            ", < " + n +
            " або == " + n + "?"
        );
        if (answer === ">") {
            min = n + 1;
        }
        else if (answer === "<") {
            max = n - 1;
        }
        else if (answer === "==") {
            console.log("Я вгадав! Це число " + n);
            break;
        }
    }
}
function power(a, n) {
    if (n === 0) {
        return 1;
    }
    return a * power(a, n - 1);
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function maxDigit(n) {
    n = Math.abs(n);
    if (n < 10) {
        return n;
    }
    let digit = n % 10;
    let max = maxDigit(Math.floor(n / 10));
    if (digit > max) {
        return digit;
    }
    return max;
}
function isPrime(n, divisor = 2) {
    if (n < 2) {
        return false;
    }
    if (divisor * divisor > n) {
        return true;
    }
    if (n % divisor === 0) {
        return false;
    }
    return isPrime(n, divisor + 1);
}
function factors(n, divisor = 2) {

    if (n === 1) {
        return;
    }

    if (n % divisor === 0) {
        console.log(divisor);

        factors(n / divisor, divisor);
    }
    else {
        factors(n, divisor + 1);
    }
}

function fibonacci(n) {

    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}
function area(a, b) {
    if (b === undefined) {
        return a * a;
    }
    return a * b;
}
function perfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
function perfectNumbers(min, max) {
    for (let i = min; i <= max; i++) {
        if (perfectNumber(i)) {
            console.log(i);
        }
    }
}
console.log("Степінь:", power(2, 5));
console.log("НСД:", gcd(24, 36));
console.log("Максимальна цифра:", maxDigit(5832));
console.log("Просте число:", isPrime(17));
console.log("Множники числа 18:");
factors(18);
console.log("Фібоначчі:", fibonacci(6));
console.log("Порівняння:", compare(10, 20));
console.log("Факторіал:", factorial(5));
console.log("Число:", makeNumber(1, 4, 9));
console.log("Площа квадрата:", area(5));
console.log("Площа прямокутника:", area(5, 10));
console.log("Чи є 28 досконалим:", perfectNumber(28));
console.log("Досконалі числа від 1 до 1000:");
perfectNumbers(1, 1000);