alert('Добро пожаловать!');
const btn = document.getElementById('btnok');
btn.onclick = myFunction;
function myFunction() {
    let x = document.getElementById('numb').value,
    select = document.getElementById('sel'),
    value = select.options[select.selectedIndex].value;
    document.querySelector(".result").innerHTML = 'Стоимость покупки составит ' + x * value + ' руб.';
  }

