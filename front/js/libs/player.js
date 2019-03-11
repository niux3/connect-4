import Tokens from './tokens.js';

export default class Player{
    constructor(name, id){
        this._name = name;
        this._tokens = new Tokens(id);
    }

    getName(){
        return this._name;
    }

    substractToken(){
        this._tokens.substract();
    }
}
