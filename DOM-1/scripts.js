// using of querySelector methods
document.querySelector('h1').innerText = 'Jannatul Lima'; // for select h1 tag

const body = document.querySelector('#head'); // select using ID
body.style.margin = "20%";

const project = document.querySelector('.project'); //select using class 
project.style.color = 'green';
project.style.fontSize = '20px';
project.style.fontSize = 'bold';

// forEach loop in querySelector
const menuItem = document.querySelectorAll('a');
// menuItem[1].style.color = 'red';
menuItem.forEach(function(i){
    i.style.color = 'black'
})



// using getElementBy ID/Class/Tag
const useId = document.getElementById('box');
const useClass = document.getElementsByClassName('box');

const useTag = document.getElementsByTagName('p'); // you can't access directly in tag, you should to use loop like forEach loop and for loop etc.
const convertArray = Array.from(useTag); // tag convert to array
convertArray.forEach(tag => {
    tag.style.color = 'blue';
    tag.style.fontSize = '20px';
});
