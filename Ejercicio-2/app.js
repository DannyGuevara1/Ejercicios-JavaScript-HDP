
let arr = [
    [],[],[],[]
];

let Diagonal = 0;

console.log("Matriz 4x4");

for (let i =0; i<4; i++){
    for(let j=0; j<4; j++){
        arr[i][j] = parseInt(prompt("Ingrese los valores a la matriz 4x4"));
    }
}

let Operacion = () =>{
    console.log(arr);
    console.log("SUMA DE LA DIAGONAL PRINCIPAL DE LA MATRIZ 4X4");

    for(let i =0; i<4; i++){

        Diagonal += arr[i][i];
       
      
    }
    console.log(Diagonal)
}

Operacion();