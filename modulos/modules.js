const BODY = document.querySelector("body")
const checkbox = document.querySelector("#color")

function modeLayout(mode) {
    selectTitle = document.querySelector(".mode")
    if (mode == null) { mode = localStorage.getItem("mode") }
    if (mode == "dark") {
        BODY.classList.add("dark")
        checkbox.checked = true
        localStorage.setItem("mode", "dark")
        selectTitle.title = "Mudar para modo claro"
    }
    if (mode == "light") {
        BODY.classList.remove("dark")
        checkbox.checked = false
        localStorage.setItem("mode", "light")
        selectTitle.title = "Mudar para modo escuro"
    }
}

function MenuCreate(text, link, img, title) {
    UL = document.querySelector(".links-ul")
    if (link == "") { link = "#" }

    LI = document.createElement("li")

    A = document.createElement("a")
    A.href = link
    if (title != "") {
        A.title = title
    }

    imgDark = document.createElement("img")
    imgDark.src = "img/mode-dark/" + img + ".svg"
    imgDark.classList.add("mode-dark")
    imglight = document.createElement("img")
    imglight.src = "img/mode-light/" + img + ".svg"
    imglight.classList.add("mode-light")
    span = document.createElement("span")
    span.innerText = text

    UL.appendChild(A)
    A.appendChild(LI)
    LI.appendChild(imgDark)
    LI.appendChild(imglight)
    LI.appendChild(span)
}

function MembroCreate(Name, Desc, fotos, facebook, instagram, linkedin, twitter, youtube) {
    UL = document.querySelector("#membros > .viewzone")
    LI = document.createElement("li")

    img = document.createElement("img")
    img.classList.add("fotos", "shadow")
    img.src = "img/fotos/" + fotos + ".jpg"

    divName = document.createElement("div")
    divName.classList.add("name")

    H3 = document.createElement("h3")
    H3.innerText = Name
    H4 = document.createElement("h5")
    H4.innerText = Desc

    divSocial = document.createElement("div")
    divSocial.classList.add("social")



    UL.appendChild(LI)
    LI.appendChild(img)
    LI.appendChild(divName)
    divName.appendChild(H4)
    divName.appendChild(H3)

    LI.appendChild(divSocial)

    if (facebook) {
        A = document.createElement("a")
        A.href = facebook
        imgA = document.createElement("img")
        imgA.src = "img/icon/facebook.svg"

        divSocial.appendChild(A)
        A.appendChild(imgA)
    }
    if (instagram) {
        A = document.createElement("a")
        A.href = instagram
        imgA = document.createElement("img")
        imgA.src = "img/icon/instagram.svg"

        divSocial.appendChild(A)
        A.appendChild(imgA)
    }
    if (linkedin) {
        A = document.createElement("a")
        A.href = linkedin
        imgA = document.createElement("img")
        imgA.src = "img/icon/linkedin.svg"

        divSocial.appendChild(A)
        A.appendChild(imgA)
    }
    if (twitter) {
        A = document.createElement("a")
        A.href = twitter
        imgA = document.createElement("img")
        imgA.src = "img/icon/twitter.svg"

        divSocial.appendChild(A)
        A.appendChild(imgA)
    }
    if (youtube) {
        A = document.createElement("a")
        A.href = youtube
        imgA = document.createElement("img")
        imgA.src = "img/icon/youtube.svg"

        divSocial.appendChild(A)
        A.appendChild(imgA)
    }
}

function createPost(Link, Title, Titulo, Resumo, img) {
    const select = document.querySelector("#ultimo > .zone")

    divCreate = document.createElement("div")
    divCreate.classList.add("card", "shadow")

    ImgCreate = document.createElement("img")
    ImgCreate.src = img

    TitleCreate = document.createElement("div")
    TitleCreate.classList.add("titulo")
    TitleCreate.innerText = Titulo

    ResumoCreate = document.createElement("div")
    ResumoCreate.classList.add("resumo")
    ResumoCreate.innerText = Resumo

    ACreate = document.createElement("a")
    ACreate.href = Link
    ACreate.title = Title

    ButtonCreate = document.createElement("div")
    ButtonCreate.classList.add("button")
    ButtonCreate.innerText = "Continue Lendo"

    select.appendChild(divCreate)
    divCreate.appendChild(ImgCreate)
    divCreate.appendChild(TitleCreate)
    divCreate.appendChild(ResumoCreate)
    divCreate.appendChild(ACreate)
    ACreate.appendChild(ButtonCreate)
}