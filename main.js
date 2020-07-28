//set inital count
let count = 0;

//selecting values and buttons from HTML
const value = document.getElementById('value');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

//event for reset button
reset.onclick = () => {
    count = 0;
    value.innerHTML = count;
    value.style.color = 'gray';
}

//event for increasing counter value
increase.onclick = () => {
    count ++;
    value.innerHTML = count;
    value.style.color = 'green';
}

//event for decreasing counter value
decrease.addEventListener('click', function (event) {
    count --;
    value.innerHTML = count;
    value.style.color = 'red';
})