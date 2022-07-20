const nav = document.querySelector('nav ul');
const toggle = document.querySelector('.menu-toggle input')
toggle.addEventListener('click', () => {
    nav.classList.toggle('slide')
});

let getHead = document.getElementsByClassName("header")[0]
let getParag = document.getElementsByClassName('paragraf')[0];
let getBg = document.querySelector('#home .img-bg')
let getBurung = document.querySelector('#home .img-burung')
let getPerahu = document.querySelector('#home .img-perahu')
let getText = document.querySelector('#home h1')
let getTop = document.querySelector('.top p')

window.addEventListener('scroll', () => {
    let value = window.scrollY
    getBg.style.top = value + 0.2 + 'px'
    getBurung.style.right = 100 + value + 0.9 + 'px'
    getBurung.style.top = value + 8 + 'px'
    getText.style.top = 200 + value + 0.9 + 'px'
})
getTop.addEventListener('click', () => {
    return location.href='#home'
})
