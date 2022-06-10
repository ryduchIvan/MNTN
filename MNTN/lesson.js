const a = [1, 2, 3, 4, 5, 6];
const b = ['a', 'b', 'c', 'd', 'f'];

a.push(2); //добавит 2 в конце , length будет 7
console.log(a);
a.pop(); //уберет 2 , lentgh будет 6 
console.log(a);
a.splice(3, 2); //уберет 4, 5 , length будет 4
console.log(a);