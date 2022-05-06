const menuResponsive = document.querySelector(".menuexpand")
menuResponsive.addEventListener("click", function() {
    document.querySelector("body").classList.add("mobile")
})
const menuBgResponsive = document.querySelector(".bgmenu-mobile")
menuBgResponsive.addEventListener("click", function() {
    document.querySelector("body").classList.remove("mobile")
})
const menuBgResponsive2 = document.querySelector(".menuclose")
menuBgResponsive2.addEventListener("click", function() {
    document.querySelector("body").classList.remove("mobile")
})

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        modeLayout("dark")
    } else {
        modeLayout("light")
    }
})
modeLayout()

const Menu = [
    { texto: "Inicio", link: "#", icon: "home", title: "Titulo aqui" },
    { texto: "Eventos", link: "#", icon: "event", title: "Titulo aqui" },
    { texto: "Galeria", link: "#", icon: "photo", title: "Titulo aqui" },
    { texto: "Serviços", link: "#", icon: "service", title: "Titulo aqui" },
    { texto: "Apadrinhe", link: "#", icon: "apadrinhar", title: "Titulo aqui" },
    { texto: "Loja", link: "#", icon: "cart", title: "Titulo aqui" },
    { texto: "Contatos", link: "/#contato", icon: "contact", title: "Titulo aqui" }
]


for (i = 0; i < Menu.length; i++) {
    MenuCreate(Menu[i].texto, Menu[i].link, Menu[i].icon, Menu[i].title)
}
const membro = [
    // {Name:"", Desc:"", fotos:"", facebook:"", instagram:"", linkedin:"", twitter:"", youtube:""},
    { Name: "Beto Banos", Desc: "Mestre Fundador", foto: "beto", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Tartaruga", Desc: "Mestre", foto: "tartaruga", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Brian", Desc: "Mestre USA", foto: "brian", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Scooby Doo", Desc: "Mestre", foto: "ricardo", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Xerife", Desc: "Mestre", foto: "xerife", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Pardal", Desc: "Contramestre", foto: "pardal", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Andorinha", Desc: "Contramestre", foto: "andorinha", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Russinho", Desc: "Contramestre", foto: "russinho", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" },
    { Name: "Samuray", Desc: "Instrutor", foto: "samuray", facebook: "A", instagram: "B", linkedin: "C", twitter: "D", youtube: "F" }
]

for (i = 0; i < membro.length; i++) {
    MembroCreate(membro[i].Name, membro[i].Desc, membro[i].foto, membro[i].facebook, membro[i].instagram, membro[i].linkedin, membro[i].twitter, membro[i].youtube)
}

const post = [
    { link: "#", title: "Titulo aqui", titulo: "História resumida da Capoeira", resumo: "A capoeira é uma arte marcial que mistura dança, música e golpes. É uma das principais expressões culturais afro-brasileiras.", img: "https://www.suapesquisa.com/uploads/site/capoeira_brasil_colonial.jpg" },
    { link: "#", title: "Titulo aqui", titulo: "História resumida da Capoeira", resumo: "A capoeira é uma arte marcial que mistura dança, música e golpes. É uma das principais expressões culturais afro-brasileiras.", img: "https://www.suapesquisa.com/uploads/site/capoeira_brasil_colonial.jpg" },
    { link: "#", title: "Titulo aqui", titulo: "História resumida da Capoeira", resumo: "A capoeira é uma arte marcial que mistura dança, música e golpes. É uma das principais expressões culturais afro-brasileiras.", img: "https://www.suapesquisa.com/uploads/site/capoeira_brasil_colonial.jpg" },
    { link: "#", title: "Titulo aqui", titulo: "História resumida da Capoeira", resumo: "A capoeira é uma arte marcial que mistura dança, música e golpes. É uma das principais expressões culturais afro-brasileiras.", img: "https://www.suapesquisa.com/uploads/site/capoeira_brasil_colonial.jpg" },
]
for (i = 0; i < post.length; i++) {
    createPost(post[i].Link, post[i].Title, post[i].titulo, post[i].resumo, post[i].img)
}