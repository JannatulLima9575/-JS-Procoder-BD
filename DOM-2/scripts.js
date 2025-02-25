// Add text inside tags
let headTitle = document.querySelector('h1');
headTitle.innerText = headTitle.innerText + ' Jannatul Lima';

// Change text 
let boxes = document.querySelectorAll('.box');
boxes[0].innerText = 'HTML';
boxes[1].innerText = 'Css';
boxes[2].innerText = 'JavaScript';

// using for loop if there will be a lots of content
/*let newNum = 1;
for(box of boxes) {
    box.innerText = `Box No ${newNum}`;
    newNum++;
}*/