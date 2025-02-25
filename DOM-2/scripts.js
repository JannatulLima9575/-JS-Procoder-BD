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

// create Element
let learnBtn = document.createElement('button'); // createElement use for create something
learnBtn.innerText = 'Learn More';

// Add Element 
let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn);

// Add Element 
//step-1: create element by function
/* function addLists(nameLists)  {
    const li = document.createElement('li');
    li.innerHTML = `${nameLists}`;

    //step-2: Add element 
    document.querySelector('ul').appendChild(li);
}

// called function with new list
addLists('Tailwind');
addLists('JavaScript'); */

// Add Element with Optimize method
//step-1: create element by function
function addLists(nameLists)  {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameLists));

    //step-2: Add element 
    document.querySelector('ul').appendChild(li);
}
// called function with new list
addLists('Tailwind');
addLists('JavaScript');
addLists('js');

// Edit methods
const editLists = document.querySelector('li:first-child');
editLists.innerText = 'HTML5';
// editLists.textContent = 'HTML5'; //you can also use this one 

const editLists1 = document.querySelector('li:last-child');
editLists1.innerText = 'PYTHON';
// Replace method
const newLists = document.createElement('li');
newLists.textContent = 'Python';
editLists1.replaceWith(newLists);

// Remove Method :
// class.remove()
