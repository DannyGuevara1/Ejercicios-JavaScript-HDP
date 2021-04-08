const arr = [13,5,25,28,24,22,21,19];
let size = arr.length;
let x = 30;
let k_esimo = (arr,x) =>{
    console.log("ARRAY SIN EL CAMBIO DE VALOR  K-ESIMO");
    console.log(arr);
    let aux;
    let Mayor = 0;

    for(let i =0; i < size; i++){
        if(arr[i] > Mayor){
            Mayor = arr[i];
        }
        
    }
    console.log("El dato mayor "+Mayor)
    console.log("Valor de x: "+x)

    for(let j =0; j < size; j++){
        if(arr[j] == Mayor){
            aux = arr[j];
            arr[j] = x;
            x = aux;
        }
       
    }   
    

   console.log("ARRAY CON EL CAMBIO DE VALOR EN LA K-ESIMA");
   console.log(arr);
}

k_esimo(arr,x);