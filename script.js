const InputBoxCard1 = document.querySelector('[data-js="InputBoxJS"]');
const card1Button1 = document.querySelector('[data-js="button1"]');
const card1Button2 = document.querySelector('[data-js="button2"]');
const card1Button3 = document.querySelector('[data-js="button3"]');
const card1Button4 = document.querySelector('[data-js="button4"]');

card1Button1.addEventListener('click', () => {
  InputBoxCard1.classList.remove('red');
  InputBoxCard1.classList.add('');
  InputBoxCard1.textContent = 'You are right!';
});

card1Button2.addEventListener('click', () => {
  InputBoxCard1.classList.add('red');
  InputBoxCard1.textContent = 'You are wrong!';
});

card1Button3.addEventListener('click', () => {
  InputBoxCard1.classList.add('red');
  InputBoxCard1.textContent = 'You are wrong!';
});

card1Button4.addEventListener('click', () => {
  InputBoxCard1.classList.add('red');
  InputBoxCard1.textContent = 'You are wrong!';
});
