import Player from './player.js';
import Model from './model.js';

export default class Connect4{
    constructor(){
        this._model = new Model();
        this._players = [];
        this._continue = true;
        this._counter = 0;
    }

    newGame(){
        for(let i = 1; i <= 2; i++){
            //let input = prompt(`indiquer le prénom du joueur ${i} :`)
            this._players[i] = new Player(i, i);
        }
        let $trs = Array.prototype.slice.call(document.querySelectorAll('tr'), 0);

        if(this._model.get()[this._model.get().length - 1].indexOf(1) || this._model.get()[this._model.get().length - 1].indexOf(2)){
            this._reset();
        }
        document.querySelector('table').addEventListener('click', (e)=>{
            let $currentTd = e.target.nodeName.toLowerCase() === 'img' ? e.target.parentNode: e.target,
                $tds = $currentTd.parentNode.querySelectorAll('td');
            for(let k = 0; k < $tds.length; k++){
                if($tds[k] === $currentTd){
                    let round = (this._counter % 2) + 1;
                    this._play(round, k);
                    this._counter += 1;
                }
            }
        });
    }

    _play(idPlayer, idCol){
        var grid = this._model.get();
        console.log('play >> ', grid);
        for(let row = grid.length - 1; row >= 0; row--){
            if(grid[row][idCol] === 0){
                document.querySelectorAll('tr')[row].querySelectorAll('td')[idCol].setAttribute('data-value', idPlayer);
                document.querySelectorAll('tr')[row].querySelectorAll('td')[idCol].querySelector('img').src = `/img/_${idPlayer}.png`;
                this._model.set(row, idCol, idPlayer);
                this._players[idPlayer].substractToken();
                if(this._check()){
                    alert(idPlayer + " >>>> win !!!");
                }
                break;
            }
        }
    }

    _reset(){
        this._model.reset();
        console.log('reset >> ', this._model.get());
        this._counter = 0;
        Array.prototype.slice.call(document.querySelectorAll('tr'), 0).forEach(($tr, ir)=>{
            Array.prototype.slice.call($tr.querySelectorAll('td'), 0).forEach(($td, ic)=>{
                $td.querySelector('img').src = `/img/_0.png`;
            });
        });
    }

    _check(){
        let win = false,
            data = this._model.get(),
            rowLen = data.length,
            colLen = data[0].length,
            coordinateModifier = [
                [1,0], // right
                [-1, 0], // left
                [0,1], //top
                [0,-1], //bottom
                [1,1], //top right
                [-1,1], //top left
                [1,-1], //bottom left
                [-1,-1] //bottom right
            ];
        for(let row = 0; row < rowLen; row++){
            for(let col = 0; col < colLen; col++){
                let value = Number(document.querySelectorAll('tr')[row].querySelectorAll('td')[col].getAttribute('data-value').trim());
                coordinateModifier.forEach((coordinate, ic) =>{
                    let x = coordinate[1],
                        y = coordinate[0];
                    if(this._compare(x,y,row,col,data,value) === true){
                        win = true;
                    }
                })
            }
        }
        return win
    }

    _compare(x,y,row,col, data, value){
        let points = [value];
        if((0 <= x * 3 + row < data.length) && (0 <= y * 3 + row < data[0].length)){
            for(let i = 1; i <= 3; i++){
                let ix = (x * i) + row,
                    iy = (y * i) + col;
                if(data[ix] !== undefined && data[ix][iy] !== undefined && value > 0 && value === data[ix][iy]){
                    points.push(value);
                    if(points.length === 4 && points.reduce((a,b)=> a + b , 0 ) === value * 4){
                        return true;
                    }
                }
            }
        }
    }
}
