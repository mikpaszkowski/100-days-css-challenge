

let upperLine = document.getElementById('line-1');
let lowerLine = document.getElementById('line-3');
let middleLine = document.getElementById('line-2');
let centerContainer = document.querySelector('.center');
//let centerContainer = document.querySelector('.line-1-rotate');



centerContainer.addEventListener('click', (e) => {

    upperLine.classList.toggle('line-1-rotate');
    lowerLine.classList.toggle('line-3-rotate');
    middleLine.classList.toggle('line-2-animate');

})