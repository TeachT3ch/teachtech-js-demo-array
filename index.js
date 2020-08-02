/*
=======================================
======== CREACIÓN DE ARRAYS ===========
=======================================
*/

//Inicializar un array vacío
let arrayPrueba = [];
console.log(arrayPrueba);

//Asignar elementos a un array
arrayPrueba = ["manzana", "pera", "platano"];
console.log(arrayPrueba);

//Se pueden mezclar diferentes tipos de elementos en el array
let cosasVarias = [1, "dos", 3, "cuatro"];
console.log(cosasVarias);

//Declarar array con los profes
let profesTeachTech = ["Oscar", "JM", "Dani", "Diego", "Juan", "Rodri", "Teffa", "Nadine", "Juanlu", "Adri", "Nacho", "Luis"];
console.log(profesTeachTech);

//Tamaño del array?
let cantidadProfes = profesTeachTech.length;
console.log("Cuantos profes hay en el curso? " + cantidadProfes);

/*
=======================================
====== ACCEDER A SUS ELEMENTOS ========
=======================================
*/

//Cómo acceder a un elemento?
//El primero
let primerProfe = profesTeachTech[0]; //Oscar

//El último
let ultimoProfe = profesTeachTech[cantidadProfes-1] //Luis
console.log("El primer profe: " + primerProfe + " y último profe : " + ultimoProfe);

//Y una posición que no existe?
console.log(profesTeachTech[33]);
//profesTeachTech[33] = "un fastasma";
//console.log(profesTeachTech);


//Como recorrer el array? -> con nuestro amigo el for
for(let i=0; i<cantidadProfes; i++){
    console.log("Profe " + profesTeachTech[i] + ", posición = " + i);
}


//Podemos definir arrays de arrays!
let profesPorClase = [
    ["Oscar", "JM"],     //0
    ["Adri", "Nacho"],   //1
    ["Nacho", "Rodri"],  //2
    ["Juanlu", "Rodri"], //3
    ["Adri", "Teffa"],   //4
    ["Teffa", "Juanlu"]  //5
];
                      
//Y cómo recorremos arrays de arrays? -> con un doble for
for(let i=0; i<profesPorClase.length; i++){
    console.log("Profes en la clase " + i + ":");
	for(let j=0; j<profesPorClase[i].length; j++){
        console.log(profesPorClase[i][j] + " ("+ i + "," + j + ")"); 
    }
}


/*
=======================================
============== EJEMPLO ================
=======================================
*/

//Ejemplo: función para calcular la temperatura media de una ciudad
function mediaTemperatura(temperatura){
    let temperaturaMedia = 0;
    for(let i=0; i<temperatura.length; i++){
        temperaturaMedia = temperaturaMedia + temperatura[i];
    }
    return temperaturaMedia / temperatura.length;
}
let temperaturaSantiago = [9,11,15,17,20,20,23,25,21,16,12,10];
console.log(mediaTemperatura(temperaturaSantiago));
