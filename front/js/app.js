import Connect4 from './libs/connect-4.js';

window.addEventListener('DOMContentLoaded', ()=>{
    let game = new Connect4();
    game.newGame();
    document.getElementById('new').addEventListener('click', ()=>{
        window.location = '/';
    });
});
