//boolean
let stats = true;
//number
let age = 1;
//string
let nm = 'Teste';
//Arrays
let values = [9, 7, 6];
//tuple 
let classMates = ['João', 10, 'Matemática'];
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
// Any
let anyValue = 'Oi';
anyValue = 19;
// void
function alert() {
    //...
}
let u = undefined;
let n = null;
//null e undefined sao subtipos dos outros
