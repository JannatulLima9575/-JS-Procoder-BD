const body = document.getElementById('body');
const button = document.querySelectorAll('li');

//Normal Option
/*const redColor = document.querySelector('.red');
redColor.addEventListener('click', function(){
    body.style.backgroundColor = '#ff7675'
});

const greenColor = document.querySelector('.green');
greenColor.addEventListener('click', function(){
    body.style.backgroundColor = '#55efc4'
});

const blueColor = document.querySelector('.blue');
blueColor.addEventListener('click', function(){
    body.style.backgroundColor = '#74bcff'
});

const pinkColor = document.querySelector('.pink');
pinkColor.addEventListener('click', function(){
    body.style.backgroundColor = '#fd79aB'
});*/

//Advanced Option using forEach loop
/*button.forEach(function (value){
    value.addEventListener('click', function(){
        let className = this.classList.value;
        body.style.backgroundColor = className;
    })
})*/


// anther method
button.forEach(function (value){
    value.addEventListener('click', function(){
        let className = this.classList[0];
        let color = '';
        if(className === "red") {
            color = '#ff7675';
        }
        else if(className === "green") {
            color = '#55efc4';
        }
        else if(className === "blue") {
            color = '#74bcff';
        }
        else if(className === "pink") {
            color = '#fd79aB';
        }
        body.style.backgroundColor = color;
    })
})

