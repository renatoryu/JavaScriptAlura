console.log(`Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Bahia";

listaDeDestinos.push(`Bahia`);
console.log("Destinos possíveis: ")
console.log(listaDeDestinos);
const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true) 

let contador = 0;
let destinoExiste = false;

while(contador <= 4){
    if(listaDeDestinos[contador] == destino){
        console.log(`Destino ${listaDeDestinos[contador]} existe!`)
        destinoExiste = true;
        break;
    } 
    contador++;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro.")
}

for(let cont = 0; cont <= 4; cont++){
    if(listaDeDestinos[contador] == destino){
        console.log(`Destino ${listaDeDestinos[contador]} existe!`)
        destinoExiste = true;
        break;
    } 
}