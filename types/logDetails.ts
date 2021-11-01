// Union = Com ele é possivel passar os tipos que a variavel espera receber quando mais de um tipo.

function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has title ${item}`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

let id: string | number
id = 12
id = '12155045@5151'

// Type Aliases
type Uid = number | string
function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`) 
}

logInfo(123, 'Lucas')
logInfo('1235@651', 'Lucas')

type Plataform = 'Windowns' | 'Linux' | 'Mac Os'
 
function renderPlataform(plataform: Plataform) {
    return plataform
}

renderPlataform('Windowns')