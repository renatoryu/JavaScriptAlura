console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 16;
const estaAcompanhada = false;
const temPassagemComprada = true;

listaDeDestinos.push(`Bahia`);
console.log("Destinos possíveis: ")
console.log(listaDeDestinos);
if (idadeComprador >= 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(2, 1);
    console.log("Passagem comprada!");
} else {
    console.log("Menor de idade e não pode comprar!")
}

console.log("Embarcando...")
if(idadeComprador >= 18 && temPassagemComprada==true){
    console.log("Boa viagem!")
}else{
    console.log("Você não pode embarcar!")
}

