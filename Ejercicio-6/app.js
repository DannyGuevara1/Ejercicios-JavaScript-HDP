let Arr = [9,3,5,7,1,6,8,11,27,22];
let Size = Arr.length;


let SumaImpar = 0;
let SumaPar = 0;

let Impar = (Arr) =>{
    for(let i=0; i<Size; i++){
        if(Arr[i] % 2){
            SumaImpar += Arr[i];
        }
        
    }
    console.log(SumaImpar);
}

let Par = (Arr) =>{
    for(let j=0; j<Size; j++){
        if(Arr[j] % 2==0){
            SumaPar += Arr[j];
        }
        
    }
    console.log(SumaPar);
}
console.log("LISTA L DE N ELEMENTOS");
console.log(Arr);
console.log("SUMA DE LOS NUMEROS IMPARES DE LA LISTA");
Impar(Arr);
console.log("SUMA DE LOS NUMEROS PARES DE LA LISTA");
Par(Arr);