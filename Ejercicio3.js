var array = [1, "hola", true, "mundo", "true", true, 45, player={name:"Ana Frank", HP:200,EXp:200015}];
function tipoDato(arreglo) {
    var num = 0, str = 0, bool = 0, obj = 0, funct = 0;
    var aux = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof arr[i] == "number") {
            num++;
            flagNum = true;
            aux.push("number");
        }
        else if (typeof array[i] == "string") {
            str++;
            flagStr = true; aux.push("string");
        }
        else if (typeof array[i] == "boolean") {
            bool++;
            flagBool = true;aux.push("boolean");
        }
        else if (typeof array[i] == "object") {
            obj++;
            flagObj = true;aux.push("object");
        }
        else if (typeof array[i] == "function") {
            funct++;
            flagFunct = true;aux.push("function");
        }
    }
    console.log("Hay " + num + " datos de tipo number, " + str + " datos de tipo string, " + bool + " datos de tipo bool, " + obj + " datos de tipo object y " + funct + " datos de tipo function.")
    return aux;
}