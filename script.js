let num = 266219;

num = Array.from(num.toString()).map(Number);
console.log(num);
console.log(num = num.reduce((res, item) => res * item, 1));
console.log(num **= 3);
console.log(num);
console.log(String(num).slice(0, 2));



const getDayName = (number, lang) => ({
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
})[lang][number % 7];

console.log(getDayName(3, 'ru'));
console.log(getDayName(6, 'en'));




function test(str) {
    if (typeof str !== 'string') {
        alert('аргумент не строка');
        return;
    }

    str = str.trim();
    return str.length > 50 ? str.slice(0, 50) + '...' : str;
};
let arr = ['1991', '4994', '1996', '1999', '2000', '2002', '2020'];
arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});
