"use strict";
// Union = Com ele é possivel passar os tipos que a variavel espera receber quando mais de um tipo.
function logDetails(uid, item) {
    console.log("A product with " + uid + " has title " + item);
}
logDetails(123, 'sapato');
logDetails('123', 'sapato');
var id;
id = 12;
id = '12155045@5151';
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user);
}
logInfo(123, 'Lucas');
logInfo('1235@651', 'Lucas');
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform('Windowns');
