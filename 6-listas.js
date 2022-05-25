console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const sp = `Sao Paulo`;
// const rj = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

listaDeDestinos.push(`Bahia`);
console.log("Destinos possíveis: ")
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
