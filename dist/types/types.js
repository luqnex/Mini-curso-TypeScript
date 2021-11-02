"use strict";
//Boolean
var isOpen;
isOpen = true;
// String 
var messege;
messege = 'Bem-vindo';
// Number
var total;
total = 20.5;
// Array
var items;
items = [1, 2, 3];
var values;
values = [1, 2, 3];
// Tuple = Sabe qual o valor do array e qual o seu tipo.
var title;
title = [1, 'too'];
// enum - serve para criar um conjunto de chave valor, para deixar mais facil para o usuario.
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// Any - pode receber qualquer valor, geralmente valor default do Js.
var coisa;
coisa = [1];
// Void (vazio)
function logger() {
    console.log('foo');
}
// Never
function error() {
    throw new Error('error');
}
// Object
var cart;
cart = {
    key: 'foo'
};
// Type Inference = Automaticamente o typescrpt quando o valor da variavel e definido já é definido tambem seu tipo!
var mensagem = "mensagem definida";
