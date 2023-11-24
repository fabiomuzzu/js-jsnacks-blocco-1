// 1 - Creare prompt per chiedere all'utente quanti elementi inserire nell'array
let ask = parseInt(prompt('Quanti elementi vuoi inserire?'));
console.log(ask);

// 2 - Creare array vuoto
let array = [];
console.log(array);

// 3 - Creare ciclo for per generare numeri casuali
for(let i=0; i<ask; i++){
    let random_number = Math.floor(Math.random() * 100) + 1;
    // 4 - Pusharli nell'array
    array.push(random_number);
}
console.log(array);

// 5 - Stampiamo gli ultimi 5 elementi dell'array.
console.log('Gli ultimi 5 numeri dell\'array sono:');
console.log(array.slice(-5));

// 6 - Bonus chiedere all'utente quanti elementi vuole stampare
let num_element = parseInt(prompt('Quanti elementi vogliamo stampare?'));
console.log(array.slice(0, num_element));




