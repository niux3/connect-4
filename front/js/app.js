window.addEventListener('DOMContentLoaded', ()=>{
    let data = [];
    let $trs = Array.prototype.slice.call(document.querySelectorAll('tr'), 0);
    $trs.forEach(($tr, ir)=>{
        row = [];
        Array.prototype.slice.call($tr.querySelectorAll('td'), 0).forEach(($td, ic)=>{
            row.push(Number($td.getAttribute('data-value').trim()));
            $td.addEventListener('click', ()=>{
                console.log(ir, ic)
            });
        });
        data.push(row);
    });
    let compare = (x,y,row,col, data, value)=>{
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
    };
    let puissance4 = (data)=>{
        let win = false,
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
                    if(compare(x,y,row,col,data,value) === true){
                        win = true;
                    }
                })
            }
        }
        return win
    };
    console.log(puissance4(data));
});
