'use strict';

const box = document.getElementById('box'), 
   circles = document.getElementsByClassName('circle'),
   btns = document.getElementsByTagName('button'),
   oneHeart = document.querySelector('.heart'),
   hearts = document.querySelectorAll('.heart');   


console.dir(box);
box.style.width = '500px';
box.style.backgroundColor = 'orange';

btns[2].classList.add('active');
btns[2].classList.remove('active');

const div = document.createElement('div');
div.classList.add('black');
box.before(div);
div.innerHTML = '<h1>Заголовок</h1>';
console.log(div.innerHTML);
