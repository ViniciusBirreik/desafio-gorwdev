const { response } = require("express")
const express = require("express")
const { request } = require("http")
const app = express()

app.get("/", (request, response) => {
    response.send('hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(PORT)
})

const vini = {
    conhecimento: '   Portugol; Considero o Portugol uma ferramenta muito importante para o meu aprendizado sobre a lógica da programação. Python; Com Python eu consigo programar até o que eu aprendi com portugol não é muito, mas foi a primeira linguagem que eu tentei aprender. HTML5; Vou colocar na lista mesmo não sendo linguagem de programação, eu não conheço todas as tags mas as principais eu conheço. CSS3; Em CSS eu considero que eu tenho nível intermediário.',
    objetivo: '   Eu tenho a pretensão de ser um proficional de destaque e reconhecimento nessa área já que eu escolhi que eu vou trabalhar com isso pelo resto da minha vida, eu ainda não decide se eu quero ser dono de algum empreendimento nessa área. Mas de qualquer forma eu acho cedo pra pensar nisso, primeiro eu tenho que me colocar no mercado. Esses são alguns dos meus objetivos pra minha carreira proficional.',
    sobre: '   Eu me difino como um jovem adulto, hetero, solteiro, estágiario em uma empresa de transportes e estudante da https://www.growdev.com.br. Com algumas responsabilidades desde alguns anos atrás e algumas mais novas, espero que tenha sido o suficiente essa é uma pergunta bem ampla.'
}

function exibirConteudo(event, content){
    event.preventDefault();
    switch (content) {
        case 'sobre':
            document.getElementById('conteudo').innerText = vini.sobre
            break;
        case 'conhecimento':
            document.getElementById('conteudo').innerText = vini.conhecimento
            break;
        default:
            document.getElementById('conteudo').innerText = vini.objetivo
            break;
    }
}

const pegarNome = JSON.parse(localStorage.getItem('nome')) || []
const nome = document.getElementById('nome')
const pegarComentario = JSON.parse(localStorage.getItem('comentario')) || []
const comentario = document.getElementById('comentario')
const tableBody = document.getElementById('table-body')
const comentarios = JSON.parse(localStorage.getItem('comentarios')) || []

function adicionarComentarios() {
    pegarNome.push(nome.value)
    pegarComentario.push(comentario.value)
    const obj = {
        comentario: pegarComentario.splice(pegarComentario.length - 1, 1),
        nome: pegarNome.splice(pegarNome.length - 1, 1)
    }

    comentarios.push(obj)
    exibir()
    salvar()
}

function salvar() {
    localStorage.setItem('nome', JSON.stringify(pegarNome))
    localStorage.setItem('comentario', JSON.stringify(pegarComentario))
    localStorage.setItem('comentarios', JSON.stringify(comentarios))
}

function exibir() {
    tableBody.innerText = ''
    for(item of comentarios) {
        console.log(item)
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td1 = document.createElement('td')

        const position = comentarios.indexOf(item)

        th.setAttribute('scope', 'row')
        th.setAttribute('class', 'text-center')
        td1.setAttribute('class', 'text-center info')
        td2.setAttribute('class', 'text-center info')
        td3.setAttribute('class', 'text-center d-flex align-items-center justify-content-around')
        containerButton.setAttribute('class', 'd-flex flex-row')


        tableBody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
       
        for(item2 of item.comentario) {
            td1.innerText = item2
        }
        for(item2 of item.nome) {
            td2.innerText = item2
        }

    }
}