function createNode(elemento) {
    return document.createElement(elemento)
}
function append(parente, elemento) {
    return parente.appendChild(elemento)
}

const index = window.location.href.lastIndexOf('?id=') + 4
const id = window.location.href.substr(index)
const url = `https://cefis.com.br/api/v1/event/${id}?include=classes`

const titulo = document.getElementById('title')
const subtitulo = document.getElementById('subtitle')
const categoria = document.getElementById('category')
const qntAulas = document.getElementById('quantClasses')
const resumo = document.getElementById('resume')
const ul = document.getElementById('classes')

async function carregarCurso(url) {
    let response = await fetch(url)
    let dados = await response.json()
    let curso = dados.data
    var aulas = 0

    curso.classes.map(it => {
        aulas++
        let li = createNode('li'),
            thumb = createNode('img'),
            classTitle = createNode('p')

        li.classList.add('list-group-item')

        thumb.src = it.thumbnail_url
        thumb.classList.add('thumbnail')

        classTitle.innerHTML = `${aulas}. ${it.title}`
        classTitle.classList.add('class-title')

        append(li, thumb)
        append(li, classTitle)
        append(ul, li)
    });

    courseThumb.src = curso.banner
    titulo.innerHTML = curso.title
    subtitulo.innerHTML = curso.subtitle
    categoria.innerHTML = curso.category
    qntAulas.innerHTML = `Este curso contém ${aulas.toString()} aulas`
    resumo.innerHTML = curso.resume
}

carregarCurso(url)