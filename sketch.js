const container = document.getElementById("container");
const myBtn = document.getElementById("clearButton"); 

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}
makeRows(16,16);
let gridCells = document.querySelectorAll('.grid-item');
gridCells.forEach(box => box.addEventListener('mouseenter', changeColor));


function changeColor(){
    this.style.backgroundColor = '#ff9999';
}



function setGrid(){
    let reqRowSize = prompt("Enter size of your rows");
    let reqColSize = prompt("Enter How many columns you want");

    if((reqRowSize >=1 && reqRowSize <= 100) && reqColSize >=1 && reqColSize <= 100){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        makeRows(reqRowSize,reqColSize);

        let gridCells = document.querySelectorAll('.grid-item');
gridCells.forEach(box => box.addEventListener('mouseenter', changeColor));



    }
    else{
        alert('Choose a number 1-100');
        setGrid();
    }
}


myBtn.addEventListener('click', setGrid);
