var array=[1,2,3,23,24,25,26,4,1,10,4,123,2,9,100]
function sumaPromedioArray(arreglo){
    var acum=0;
        for(let i=0; i<array.length;i++){
           acum+=array[i];
        }
        var promedio=acum/arreglo.length;
        console.log("La suma de los elementos es " + acum +" y el promedio es: "+promedio);
}