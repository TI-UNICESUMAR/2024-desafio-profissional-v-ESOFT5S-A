const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaValores = (a, b, c, d) => {
    console.log(a, b, c);
    return a + b;
}

const teste = dados.reduce(somaValores);
console.log(teste);
