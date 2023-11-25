// Crazione del primo array
let array1 = ['1', '2', '3', '4', '5'];
console.log(array1);

// Creazione del secondo array
let array2 = ['1', '2'];
console.log(array2);


// Verifica quale array ha meno elementi
let lengthDifference = Math.abs(array1.length - array2.length);

// Aggiungi elementi all'array che ha meno elementi
if (array1.length < array2.length) {
  for (let i = 0; i < lengthDifference; i++) {
    array1.push("" + (i + 1));
  }
} 
else if (array2.length < array1.length) {
  for (let i = 0; i < lengthDifference; i++) {
    array2.push("" + (i + 1));
  }
}

console.log(array1);
console.log(array2);