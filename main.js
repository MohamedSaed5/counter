// set count 
let count = 0;

// get element
let btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');

btns.forEach(
    function (btn) {
        btn.addEventListener('click', function (e) {
            let style = e.currentTarget.classList
            if (style.contains('decrease')) {
                count--
                value.style.color = 'red'
            }
            else if (style.contains('increase')) {
                count++
                value.style.color = 'green'
            }
            else {
                count = 0;
                value.style.color = '#000'
            }
            value.textContent = count;
        })
    }
)