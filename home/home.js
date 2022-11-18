const folder = document.querySelector('.folder')
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const item4 = document.querySelector('.item-4')

folder.addEventListener('click', function () {
    folder.classList.toggle('is-active');
    item1.classList.toggle('is-active');
    item2.classList.toggle('is-active');
    item3.classList.toggle('is-active');
    item4.classList.toggle('is-active');
})

