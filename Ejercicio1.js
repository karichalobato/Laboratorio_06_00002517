var array=[69,12,45,7,7,89,98,12,666,0,10,100,10,12,69]
function repeticiones(num,arreglo){
    var acum=0;
        for(let i=0; i<array.length;i++){
           if (num==array[i]){
               acum++;
           }
        }
        console.log("El numero " + num + ", "+ acum +" veces dentro del arreglo");
}