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

//Ejemplo: función que nos dice qué profe tiene el nombre más largo

function nombreMasLargo(profes){
    let longitudMaxima = 0;
    let posicionReferencia = -1;
    for(let posicion = 0; posicion<profes.length; posicion++){
        let longitudProfe = profes[posicion].length;
        if(longitudProfe > longitudMaxima){
            longitudMaxima = longitudProfe;
            posicionReferencia = posicion;
        }
    }
    return profes[posicionReferencia];
}


let profesTeachTech = ["Oscar", "JM", "Dani", "Diego", "Juan", 
"Rodri", "Tefa", "Nadine", "Juanlu", "Adri", "Nacho", "Luis"];
let nombreProfe = nombreMasLargo(profesTeachTech);
console.log(nombreProfe);


/*
=========================================
====== MÉTODOS PROPIOS DE ARRAYS ========
=========================================
*/

// Añadir un elemento al final del array: push
let ingredientesPasta = ["macarrones", "tomate"];

let numeroIngredientes = ingredientesPasta.push("chorizo"); // devuelve la nueva longitud de la lista!
console.log("Número de ingredientes: " + numeroIngredientes);
console.log(ingredientesPasta);

// Quitar un elemento del final del array: pop
let ingredientesTortilla = ["patata", "huevo", "aceite", "sal", "cebolla"];

let ultimoIngrediente = ingredientesTortilla.pop();
console.log(ultimoIngrediente);
console.log(ingredientesTortilla);

// Añadir un elemento al principio del array: unshift
let artistasFavoritos = ["Bon Jovi", "Madonna", "Pablo Alborán"];

let numeroArtistasFavoritos = artistasFavoritos.unshift("Dua Lipa"); // devuelve la nueva longitud de la lista!
console.log("Tengo " + numeroArtistasFavoritos + " artistas favoritos: " + artistasFavoritos);

// Quitar un elemento del principio del array: shift
let primerFavorito = artistasFavoritos.shift()
console.log("Mi artista favorito es: " + primerFavorito);
console.log(artistasFavoritos);

// Quitar un elemento segun su indice: splice
let ingredientesTortilla = ["patata", "huevo", "aceite", "sal", "cebolla"];

let indiceAEliminar = 3;
let ingredienteEliminado = ingredientesTortilla.splice(indiceAEliminar, 1);
console.log(ingredientesTortilla);

// Todos estos métodos actuan "in place", es decir, modifican el array original
// Hacer una copia de un array: slice
let copiaIngredientes = ingredientesTortilla.slice();

// ¿por qué es esto necesario?
let first = [1,2,3]
let second = first;
console.log(first + "\n" + second)

first.pop()
console.log(first + "\n" + second)

// sin embargo...
let first = [1,2,3]
let second = first.slice();
console.log(first + "\n" + second)

first.pop()
console.log(first + "\n" + second)

// Encontrar el índice de un elemento del array: indexOf
let artistasFavoritos = ["Bon Jovi", "Madonna", "Pablo Alborán"];
let indiceBonJovi = artistasFavoritos.indexOf("Bon Jovi");
console.log("Bon Jovi es mi artista favorito número " + indiceBonJovi);

let indiceNoExiste = artistasFavoritos.indexOf("Metallica");
console.log(indiceNoExiste); // si no existe el elemento, devuelve un -1

// Saber si un elemento forma parte de un array: includes
let esArtistaFavorito = artistasFavoritos.includes("Madonna");
console.log(esArtistaFavorito);

console.log(artistasFavoritos.includes("David Bisbal"));

// Unir todos los elementos de un array en un string: join
let paginaWeb = ["www", "teacht3ch", "com"];
console.log(paginaWeb.join("."));

// tambien es posible hacerlo con arrays de arrays
let profesPorClase = [
    ["Oscar", "JM"],     //0
    ["Adri", "Nacho"],   //1
    ["Nacho", "Rodri"],  //2
    ["Juanlu", "Rodri"], //3
    ["Adri", "Teffa"],   //4
    ["Teffa", "Juanlu"]  //5
];

console.log(profesPorClase);
console.log(profesPorClase.join('\n'))

/* [Avanzado] iterar sobre cada uno de los elementos de un array: forEach
* Este método se queda para los más valientes :)
* Recordad que podéis encontrar la documentación de JavaScript y ejemplos en:
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
*/

