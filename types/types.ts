//Boolean
let isOpen: boolean
isOpen = true

// String 
let messege: string
messege = 'Bem-vindo'

// Number
let total: number
total = 20.5

// Array
let items: number[]
items = [1, 2, 3] 

let values: Array<number>
values = [1, 2, 3]

// Tuple = Sabe qual o valor do array e qual o seu tipo.
let title: [number, string]
title = [1, 'too']

// enum - serve para criar um conjunto de chave valor, para deixar mais facil para o usuario.
enum Colors {
    white = "#fff",
    black = "#000",
}

// Any - pode receber qualquer valor, geralmente valor default do Js.
let coisa: any
coisa = [1]

// Void (vazio)
function logger() {
    console.log('foo')
}

// null/undefined
type Bla = string | undefined

// Never
function error(): never {
    throw new Error('error')
}

// Object
let cart: object 

cart = {
    key: 'foo'
}

// Type Inference = Automaticamente o typescrpt quando o valor da variavel e definido já é definido tambem seu tipo!
let mensagem = "mensagem definida"