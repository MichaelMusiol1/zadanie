const btn = document.querySelector('.container .a .DROP .btn');
const zawartosc = document.querySelector('.container .a .DROP .content');

let isOpen = false

btn.addEventListener('click', () => {
    if (isOpen === false) {
        zawartosc.style.display = 'block';
        isOpen = true
    }
    else{
        zawartosc.style.display = 'none';
        isOpen = false
    }
})