function createNode(elemento) {
    return document.createElement(elemento)
}
function append(parente, elemento) {
    return parente.appendChild(elemento)
}

const ul = document.getElementById('cursos')
const url = 'https://cefis.com.br/api/v1/event'

async function carregarCursos(url) {
    let data = await fetch(url)
    let cursos = await data.json()
    return cursos.data.map(curso => {
        let li = createNode('li'),
            banner = createNode('img'),
            title = createNode('p'),
            subtitle = createNode('p'),
            teacher = createNode('p'),
            anchor = createNode('a')

        li.classList.add('list-group-item')

        banner.src = curso.banner
        banner.classList.add('banner')

        title.innerHTML = curso.title
        title.classList.add('title')

        subtitle.innerHTML = curso.subtitle
        subtitle.classList.add('subtitle')

        teacher.innerHTML = `Professor: ${curso.teachers_names}`

        anchor.innerHTML = 'Saiba mais'
        anchor.classList.add('btn', 'btn-info', 'btn-block')
        anchor.setAttribute('href', `curso.html?id=${curso.id}`)

        append(li, banner)
        append(li, title)
        append(li, subtitle)
        append(li, teacher)
        append(li, anchor)
        append(ul, li)
    })
}

carregarCursos(url)