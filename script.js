/*
//EJE 1
for(let i = 1; i <= 50; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}


//EJE 2
let numero = parseInt(prompt("Ingrese número de 1 a 40:"));
let pokemons = [
    {nombre: "pikachu", numero: 1,},
    {nombre: "Charizard", numero: 2},
    {nombre: "Bulbasaur", numero: 3},
    {nombre: "Squirtle", numero: 4},
    {nombre: "Caterpie", numero: 5},
    {nombre: "Metapod", numero: 6},
    {nombre: "Butterfree", numero: 7},
    {nombre: "Weedle", numero: 8},
    {nombre: "Kakuna", numero: 9},
    {nombre: "Beedrill", numero: 10},
    {nombre: "Pidgey", numero: 11}, 
    {nombre: "Pidgeotto", numero: 12,},
    {nombre: "Rattata", numero: 13},
    {nombre: "Spearow", numero: 14},
    {nombre: "Fearow", numero: 15},
    {nombre: "Ekans", numero: 16},
    {nombre: "Arbok", numero: 17},
    {nombre: "Raichu", numero: 18},
    {nombre: "Sandshrew", numero: 19},
    {nombre: "Nidorina", numero: 20},
    {nombre: "Nidoking", numero: 21},
    {nombre: "Clefairy", numero: 22},
    {nombre: "Vulpix", numero: 23},
    {nombre: "", numero: 24,},
    {nombre: "", numero: 25},
    {nombre: "", numero: 26},
    {nombre: "", numero: 27},
    {nombre: "Gloom", numero: 28},
    {nombre: "Paras", numero: 29},
    {nombre: "Venomoth", numero: 30},
    {nombre: "Psyduck", numero: 31},
    {nombre: "Dugtrio", numero: 32},
    {nombre: "Meowth", numero: 33},
    {nombre: "Growlithe", numero: 34}, 
    {nombre: "Machop", numero: 35,},
    {nombre: "Tentacool", numero: 36},
    {nombre: "Golem", numero: 37},
    {nombre: "Abra", numero: 38},
    {nombre: "Cloyster", numero: 39},
    {nombre: "Muk", numero: 40},
]

for(numero = 0; numero <= pokemons.length; numero++){

if(numero % 5 === 0){
    let numeros = pokemons[numero];
    console.log(numeros);
}
}
*/
let arreglo = [4,"dos",8,"tres",5,9,1,"cero"] 

for(let i = 0; i <= arreglo.length; i++){
    if(typeof arreglo[i] === "number"){
        console.log(arreglo[i])
    }
}
    