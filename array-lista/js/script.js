// 1 - Creare array con frutta.
let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

// 2 - Creare variabile con pesca
let pesca = 'pesca';

// 3 - Pusharla nell'arrey.
frigo.push(pesca);

// 4 - Creare ciclo for per verificare la presenza del cocomero

// 6 - Se cocomero non presente stampare "Oh no, devo uscire a comprare il cocomero!"
let cocktail = "Oh no, devo uscire a comprare il cocomero!";

for(i=0; i<=frigo.length; i++){
    // 5 - Se cocomero presente stampare in console.log "Trovato! Devo solo preparare il cocktail."
    if ('cocomero' == frigo[i]) {
        cocktail = "Trovato! Devo solo preparare il cocktail.";
    }
}
console.log(cocktail);



