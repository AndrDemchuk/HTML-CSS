console.log('Hello');
console.log('world');
console.log('333');
console.log(334);
console.log('Hello' + ' world'); // конкатинація
console.log(`Hello ` + ' world'); // конкатинація
console.info('Hello');
// alert('Hello');
// alert('Hello'); //ctrl+/
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020<b>';
document.querySelector('h2.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777;
document.getElementById('one').innerHTML = 888;

let b;
let a = document.querySelector('#one');
let c;
c = document.querySelector('.header');

a.innerHTML = 999;
c.innerHTML = 666;