export default class Model{
    constructor(){
        this._data = [];
        this.reset();
    }

    get(){
        return this._data;
    }

    set(row, col, value){
        this._data[row][col] = value;
    }

    reset(){
        this._data = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ];
    }
}
