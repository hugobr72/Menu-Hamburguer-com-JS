const botao = document.getElementById('btn-mobile')

function menu(){
    const nav = document.getElementById('nav')
    const burguer =document.getElementById('hamburguer')
    const icon = document.getElementsByTagName('i')[0]
    const iconX = document.getElementsByTagName('i')[1]
    nav.classList.toggle('active')
    burguer.classList.toggle('active')
    icon.classList.toggle('active')
    iconX.classList.toggle('active')
}

botao.addEventListener('click',menu)