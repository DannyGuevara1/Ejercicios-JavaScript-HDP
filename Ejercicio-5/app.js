let arr =[24,23,31,27,28,31];

let size = arr.length;

let media =0;
let suma = 0;
let higher_temperature = 0;
let low_temperature = 0;
let Media = () =>{
    media = suma / size;
    console.log(media)
   
}

let Higher_temperature = () =>{
    for(let j=0; j<size; j++){
        if(arr[j] > media){
            higher_temperature = arr[j];
            console.log("Las temperaturas mayores a la media son:"+"["+[j]+"]"+" "+ higher_temperature);
        }
    }
}

let Low_temperature = () =>{
    for(let c=0; c<size; c++){
        if(arr[c] < media){
            low_temperature = arr[c];
            console.log("Las temperaturas menores a la media son:"+"["+[c]+"]"+" "+ low_temperature);
        }
    }
}

for(let i=0;i < size; i++){
    suma += arr[i];
}

console.log("LA SUMA DE LAS TEMPERATURAS ES");
console.log(suma);
console.log("LA MEDIA DE LAS TEMPERATURAS ES");
Media();
console.log("LOS VALORES MAYORES A LA MEDIA SON");
Higher_temperature();
console.log("LOS VALORES MENORES A LA MEDIA SON");
Low_temperature();

