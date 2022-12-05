let display = document.getElementById('screen');

const clear = () => {
    display.value = ''; 
}

const show = (n) => {
    display.value += n; 
}

const calc = () => {
    display.value = eval(display.value);
}