const PacoteOffice = {
    "Nome":"PACOTE OFFICE",
    "Descrição":"O curso de aperfeiçoamento profissional Pacote Office tem por objetivo desenvolver competências relacionadas ao uso do Word, do PowerPoint e do Excel Básico.",
    "Imagem":"images/Cursos/1.jpg"
}

const auto_hidro_industrial = {"Nome":"AUTOMAÇÃO HIDRÁULICA INDUSTRIAL",
"Descrição":"O Curso de Aperfeiçoamento Profissional Automação Hidráulica Industrial tem por objetivo o desenvolvimento de conhecimentos e habilidades básicas referentes aos componentes hidráulicos utilizados em máquinas, equipamentos e dispositivos.",
"Imagem":"images/Cursos/Automação_Industrial.jpg"}

const auto_pneu_industrial = {
    "Nome":"AUTOMAÇÃO PNEUMÁTICA INDUSTRIAL",
    "Descrição":"O Curso de Aperfeiçoamento Profissional Automação Pneumática Industrial tem por objetivo o desenvolvimento de conhecimentos e habilidades básicas referentes aos componentes Pneumáticos utilizados em máquinas, equipamentos e dispositivos.",
    "Imagem":"images/Cursos/CAI_Assistente_Administrativo.jpg"
}

const cursos = [PacoteOffice, auto_hidro_industrial,auto_pneu_industrial,auto_hidro_industrial,auto_pneu_industrial,PacoteOffice,PacoteOffice, auto_hidro_industrial,auto_pneu_industrial,auto_hidro_industrial,auto_pneu_industrial,PacoteOffice]

let tab = document.getElementById("v-pills-2")

for(let y = 0; y < 2; y++){
    let rowFic = document.createElement("div")
    rowFic.id = `fic${y}`
    rowFic.className = "remove"
    let Fic = document.createElement("div")
    Fic.id = `FIC${y}`
    Fic.className = "row"

    tab.appendChild(rowFic)
    rowFic.appendChild(Fic)

    for(let x = 0; x < 6; x++){ 

        let weq = document.getElementById(`FIC${y}`)

        let div1 = document.createElement("div")
        div1.className = "col-md-4 text-center"
    
        let div2 = document.createElement("div")
        div2.className = "menu-wrap"
        
        let div3 = document.createElement("div")
        div3.className = "text"
        
        let H3 = document.createElement("h3")
        H3.textContent = cursos[x].Nome
        
        let link1 = document.createElement("a")
        link1.className = "menu-img img mb-4"
        link1.style = `background-image: url(${cursos[x].Imagem});`

        let link2 = document.createElement("a")
        link2.className = "btn btn-red btn-outline-red mb-5"
        link2.textContent = "Grade"
        
        let p1 = document.createElement("p")
        p1.style = "text-align: justify;"
        p1.textContent =  cursos[x].Descrição
        
        let p2 = document.createElement("p")
        p2.className = "price"
        p2.textContent = "Presencial"

        weq.appendChild(div1)
        div1.appendChild(div2)
        div2.appendChild(link1)
        div2.appendChild(div3)
        div3.appendChild(H3)
        div3.appendChild(p1)
        div3.appendChild(p2)
        div3.appendChild(link2)
    }
}

let divBotoes = document.createElement("div")
divBotoes.className = "block-27"
divBotoes.style = "margin: 0 auto"

let ulBotoes = document.createElement("ul")
ulBotoes.id= "botoes-pagina"

tab.appendChild(divBotoes)
divBotoes.appendChild(ulBotoes)

let num_botoes = cursos.length/9 
let pag = document.getElementById("botoes-pagina")
let esquerda =document.createElement("li")
esquerda.innerHTML = "<a>&lt;</a>"
pag.appendChild(esquerda)
let direita =document.createElement("li")
direita.innerHTML = "<a>&gt;</a>"

for(let x = 0; x < num_botoes; x++){
    let link23 = document.createElement("li")
    link23.innerHTML = `<a>${x}</a>`
    link23.setAttribute("onclick", `trocaConteudo(${x})`)
    link23.id = `${x}`
    pag.appendChild(link23)
}

function trocaConteudo(a){
    let ewr = document.getElementById(a)
    ewr.className = "active"
    let fc = document.getElementById(`fic${a}`)

    fc.className = ""
    for(x=`${Number.parseInt(a)}`; x != 0; x--){
        let ewr = document.getElementById(x)
        ewr.className = ""
        let fc = document.getElementById(`fic${x}`)
        fc.style="display:none;"
    }
    for(x=`${Number.parseInt(a)}`; x < 100; x++){
        let ewr = document.getElementById(x)
        ewr.className = ""
        let fc = document.getElementById(`fic${x}`)
        fc.style="display:none;"
    }
}



pag.appendChild(direita)