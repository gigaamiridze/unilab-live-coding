const btn = document.querySelectorAll('.btn');
const modal = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.close-btn');

btn.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal[index].classList.add('active');
  })
})

closeBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal[index].classList.remove('active');
  })
})