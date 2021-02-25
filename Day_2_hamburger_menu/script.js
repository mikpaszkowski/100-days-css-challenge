


centerContainer.addEventListener('click', (e) => {

    let upperLine = document.getElementById('line-1');
    let lowerLine = document.getElementById('line-3');
    let middleLine = document.getElementById('line-2');
    let centerContainer = document.querySelector('.center');

    upperLine.classList.toggle('line-1-rotate');
    lowerLine.classList.toggle('line-3-rotate');
    middleLine.classList.toggle('line-2-animate');

})