let btn = document.getElementById('btn_projects')

btn.addEventListener('click', () => {
    window.location.href = "#proyectos";
});

window.onload = add_links()


function add_links() {
    let card1 = document.getElementById('card1')
    let card2 = document.getElementById('card2')
    let card3 = document.getElementById('card3')

    card1.addEventListener('click', () => {
        window.open("https://github.com/diegooviedo3004/cs50_proyecto", "_blank")
    })

    card2.addEventListener('click', () => {
        window.open("https://github.com/diegooviedo3004/serialization-file-handling-c", "_blank")
    })

    card3.addEventListener('click', () => {
        window.open("https://tinder-clone-7816b.web.app/", "_blank")
    })
}
