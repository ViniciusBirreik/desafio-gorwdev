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