let addButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let counter = 0

addButton.addEventListener('click', function () {
    counter++;
    document.querySelector('.result').textContent = counter;
})

minusButton.addEventListener('click', function () {
    counter--;
    document.querySelector('.result').textContent = counter;
})


function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }