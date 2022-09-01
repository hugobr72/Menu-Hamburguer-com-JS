const botao = document.getElementById('btn-mobile')

function menu(){
    const nav = document.getElementById('nav')
    const burguer =document.getElementById('hamburguer')
    nav.classList.toggle('active')
    burguer.classList.toggle('active')
}

botao.addEventListener('click',menu)