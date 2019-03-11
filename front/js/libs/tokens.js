import Token from './token.js';
export default class Tokens{
    constructor(id){
        this._groups = [];

        for(let i = 0; i < 21; i++){
            this._groups.push(new Token(id));
        }
    }

    getLen(){
        return this._groups.length;
    }

    substract(){
        this._groups.pop();
    }
}
