
let arr = [
    [],[],[]
];

let suma = [];
let Columna = [];

console.log("Matriz 3x3");

for (let i =0; i<3; i++){
    for(let j=0; j<3; j++){
        arr[i][j] = parseInt(prompt("Ingrese los valores a la matriz 3x3"));
    }
}

let Operacion = () =>{
    console.log(arr);
    console.log("SUMA DE FILAS DE LA MATRIZ 3X3");

    for(let i =0; i<3; i++){
       suma = 0;
       for (let j=0; j <3; j++){
           suma += arr[i][j];
       }
       console.log(suma)
    }

    console.log("SUMA DE COLUMNAS DE LA MATRIZ 3X3");
    for(let i =0; i<3; i++){
        Columna = 0;
        for (let j=0; j <3; j++){
            Columna += arr[j][i];
        }
        console.log(Columna)
     }
}

Operacion();