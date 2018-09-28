var array =[1,2,3,4,5,6,7,8,21,45,11,12,13];
function sumaArreglo(arreglo){    
    if (arreglo.length%2!=0){
        console.log("Es impar");
        console.log("El largo es: "+arreglo.length);
        var acum=0;
        var j=arreglo.length;
        var l=arreglo.length/2;
        
        for(var i =0;i<l;i++){
               acum=arreglo[i]+arreglo[j-1];
               console.log(acum);
               j--;
        }      

    }else{
        console.log("Es par");
        console.log("El largo es: "+arreglo.length);
        var acum=0;
        var j=arreglo.length;
        for(var i=0;i<arr.length/2;i++){
            acum=arreglo[i]+arreglo[j-1];
            console.log(acum);
            j--;
        }
    }
}