let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

input.addEventListener('input', (e) => {
    string = e.target.value;
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const container = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
    container.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};
