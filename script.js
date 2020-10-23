
 //console.log("hello");

// Array
/** Array - esercizio 1
 * 
 * 
 * aggiungere un elemento all'inizio dell'array
 * 
 * 1° "hello" 
 * 2° 100
 * 
 * const myArray = [true,null]
 * 
 */

const myArray = [true,null];

//myArray.unshift("hello");

//myArray[1] = 100;

myArray.splice(1,1,100);

myArray.splice(0,1,"hello");

console.log(myArray); //output myArray = ["hello", 100]



/** Array - esercizio 2
 * 
 * const array = [1,2]
 * 
 * aggiungere un elemento ad una specifica index
 * elemento "abc" -> index 10
 * 
 * calcolare la lunghezza finale // 11
 * 
 */


const array = [1,2];

array[10] = "abc";

console.log(array.length);


/** Array - esercizio 3
 * 
 * 
 * creare un array di 4 oggetti
 * 
 * Ogni oggetto deve avere almeno una marca, un prezzo e un colore
 * 
 * Infine aggiungi un ulteriore oggetto
 * 
 */


const playlist = [
    song1 = {
      title: 'the unforgiven',
      singer: 'Metallica',
      year: '1991'
    },
    song2 = {
      title: 'fade to black',
      singer: 'metallica',
      year: '1984'
    },
    song3 = {
        title : 'innuendo',
        singer : 'the queen',
        year : '1991'

    }
  ];


  song4 = {
    title : 'walk',
    singer: 'pantera',
    year: '1992',
};

playlist.push(song4);

//console.log(playlist);


playlist.forEach((element) => {console.log(element)});



// Loop 
/* Loop esercizio 1
* generate 4 cifre random, il range è da 1000 a 9999.
* Assicuratevi che questo numero random non si accoppi con alcuno dei numeri nell'array
* se trovare un match hai bisogno di generare 4 nuove cifre
* se non trovi un match, il numero è unico, allora aggiungi nell'array.
*
*
*
* 
const myNumb = [2345, 3245, 7925, 5234, 4532]

*/

const myNumb = [2345, 3245, 7925, 5234, 4532];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }
  



for(i=0; i<=4; i++) {
    const numeroCasuale = getRandomInt(1000,9999);
    console.log(numeroCasuale);
    if(myNumb.includes(numeroCasuale)) {
        console.log("numeri uguali");
        break;
    }else {
        myNumb.push(numeroCasuale);
    }
    console.log(myNumb);
}

// Array methods

/** forEach() - esercizio 1 
 *  calcola la somma degli elementi di un array
 * 
 * const numbers = [1,2,3,4,5,6,20,15,30];
 * 
 * 
 */

const numbers = [1,2,3,4,5,6,20,15,30];
//const sum = 0;
//numbers.forEach((element) => {
 //   const sum = element;
 //   console.log(sum);
//})

// reduce() riduce l'output in un singolo valore 
//somma commutativa
let sum = numbers.reduce((previous, next) => {
    return previous + next;
});

console.log(sum);



/**  - esercizio 
 * const lettere = ['a','b','a','b','c','d','a'];
 * realizzare un oggetto che tenga traccia del numero di lettere presente nell'array
 * 
 * 
 * let count = {};
 * 

 * 
 */


const lettere = ['a','b','a','b','c','d','a'];

let count = {};


lettere.forEach((el) => {
    count[el] = count[el] ? count[el] + 1 : 1;
});

console.log(count);


//con typeof se non è definito il numero di occorrenza assegna di default 1 se è 1 lo aggiunge
const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
  
    return acc;
  }, {});
  
  // a == {2: 5, 4: 1, 5: 3, 9: 1}


/** - esercizio 
 * fa un array di elementi JSON crea un array "posts"
 * 
 * const postsJSON = [
 *      '{ "idPost": 1222, "commenti":1 }',
 *      '{ "idPost": 6143, "commenti":32}',
 *      '{ "idPost": 7281, "commenti":12}' 
 * ]
 * 
 * 
 * 
 
 * 
 * 

 * 
 */

const postsJSON = [
        '{ "idPost": 1222, "commenti":1 }',
        '{ "idPost": 6143, "commenti":32}',
        '{ "idPost": 7281, "commenti":12}' 
]


const posts = postsJSON.map((element) => {
    return JSON.parse(element);
})

console.log(posts);



/* * esercizio 2

 * 
 * esempio 
 * 
 * (allons y!) => ALLONS Y
 * 
 * (geronimo) => geronimo
 * 
 */

const stringa1 = "allons y";

const stringa2 = "geronimo";

const upp = stringa1.toUpperCase();

const lower = stringa2.toLowerCase();

console.log(upp);

console.log(lower);


/** esercizio 3
 * 
 * partendo da un Array di prodotti genera un array contenente il valore totale dei prodotti presenti
 * 
 * esempio 
 * 
 * const prodotti = [
 *      {
 *         nomeProdotto:"mac book pro",
 *         prezzo:3000,
 *         quantita:15;
 *      },
 *      {
 *         nomeProdotto:"samsung 9plus",
 *         prezzo:935,
 *         quantita:5;
 *      },
 *      {
 *         nomeProdotto:"synology",
 *         prezzo:900,
 *         quantita:3;
 *      },
 * ]
*/

/** map() - esercizio 4 
 * trasforma un array di stringhe in un array di numeri
 * 
 * const stringhe = ['1','2','3','4','5'];
 * 

 * 
 */

const stringhe = ['1','2','3','4','5'].map((element) => {
  return parseInt(element);
})

console.log(stringhe);





















