function subscribe() {
    document.getElementById('btn').innerHTML = '<i class="fa-solid fa-bell"></i> Subscribed';
    document.getElementById('btn').style.backgroundColor = '#262626';
}

function like() {
    document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> liked';   
    document.getElementById('like').style.backgroundColor = '#262626';
}

// for keypress from keyboard 
function keyPress() {
    document.getElementById('ext').innerHTML = 'Key Pressed ✨';
}

function onload() {
    alert('Testing JavaScript onload')
    document.getElementById('top').innerHTML = 'Website Loaded Properly! ✔'
}
// for Window Resize
function windowResize() {
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = 'red';
}

// for onscroll
function onScroll() {
    document.getElementById('top').innerHTML = 'Scrolling';
}


// # Advanced way
// document.getElementById('ctn').onclick = function() {
//     document.getElementById('ctn').innerHTML = 'Thank You! <i class="fa-solid fa-bell"></i>';
//     document.getElementById('ctn').style.backgroundColor = 'black';
// }

// # addEventListener
document.getElementById('ctn').addEventListener('click', function(){
    document.getElementById('ctn').innerHTML = 'Thank You! <i class="fa-solid fa-bell"></i>';
    document.getElementById('ctn').style.backgroundColor = 'black';
})