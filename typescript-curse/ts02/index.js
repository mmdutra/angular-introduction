//var, let, const
//var 
function initTeam(initGame) {
    var name = 'Mateus e amigos';
    if (initGame) {
        var city = 'em Timóteo';
    }
    console.log(`${name} vão jogar ${city}`);
}
initTeam(true);
