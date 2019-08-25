//interferencia de tipos

let age  = 20;
// age = 'Mateus'; nao compila

let x = [1, 2, null];
//x[0] = '1'; nao compila

//contextual typing
window.onmousedown = (event) => {
    console.log(event.button);
    // console.log(event.buton); nao compila!
};
