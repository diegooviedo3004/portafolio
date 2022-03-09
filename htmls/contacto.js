window.onload = add_links()


function add_links() {
    let card1 = document.getElementById('card1')
    let card2 = document.getElementById('card2')
    let card3 = document.getElementById('card3')

    card1.addEventListener('click', () => {
        window.open("https://ni.linkedin.com/in/diegooviedollanes", "_blank")
    })

    card2.addEventListener('click', () => {
        window.open("https://www.facebook.com/diego.oviedo.56614/", "_blank")
    })

    card3.addEventListener('click', () => {
        window.open("https://www.instagram.com/diegooviedo__/", "_blank")
    })
}
