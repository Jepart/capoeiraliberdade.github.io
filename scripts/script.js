checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        modeLayout("dark")
    } else {
        modeLayout("light")
    }
})
modeLayout()

const Menu = [
    ["Inicio", "#", "home", "Titulo Aqui"],
    ["Eventos", "#", "event", "Titulo Aqui"],
    ["Galeria", "#", "photo", "Titulo Aqui"],
    ["Serviços", "#", "service", "Titulo Aqui"],
    ["Apadrinhe", "#", "apadrinhar", "Titulo Aqui"],
    ["Loja", "#", "cart", "Titulo Aqui"],
    ["Contatos", "#", "contact", ""]
]


for (i = 0; i < Menu.length; i++) {
    MenuCreate(Menu[i][1], Menu[i][3], Menu[i][0], Menu[i][2])
}

const membro = [
    ["Beto Banos", "Mestre Fundador", "beto", "A", "B", "C", "C", "C"],
    ["Tartaruga", "Mestre", "tartaruga", "A", "B", "C", "C", "C"],
    ["Brian", "Mestre USA", "brian", "A", "B", "C", "C", "C"],
    ["Scooby Doo", "Mestre", "ricardo", "A", "B", "C", "C", "C"],
    ["Xerife", "Mestre", "xerife", "A", "B", "C", "C", "C"],
    ["Pardal", "Contramestre ", "pardal", "A", "B", "C", "C", "C"],
    ["Andorinha", "Contramestre ", "andorinha", "A", "B", "C", "C", "C"],
    ["Russinho", "Contramestre ", "russinho", "A", "B", "C", "C", "C"],
    ["Samuray", "Instrutor", "samuray", "A", "B", "C", "C", "C"]
]
for (i = 0; i < membro.length; i++) {
    MembroCreate(membro[i][0], membro[i][1], membro[i][2], membro[i][3], membro[i][4], membro[i][5], membro[i][6], membro[i][7])
}
