// Richiamo dal DOM il bottone e il paragraph che mi serve per i risultati
const rollDice = document.getElementById('diceButton');
const result = document.getElementById('result');

// Al click del mouse sul buttone dichiaro un vincitore
rollDice.addEventListener('click', function(){

    // Genero due variabili che calcolano un numero da 1 a 6
    // Ne ho fatte due perché altrimenti al refresh della pagina sarebbe uscito un numero solo per entrambi i player
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);

    // Per questioni di leggibilità ho creato un player 1 e player 2 con i numeri creati precedentemente. Avrei potuto saltare questo step però mi sembrava più carino da leggere! :)
    const player1 = num1;
    const player2 = num2;

    // Dichiaro la condizione di vincita e il vincitore
    if (player1 > player2){
        result.innerText = 'Hai vinto!!'
    } else if (player1 < player2){
        result.innerText = 'Il banco ha vinto!! :('
    } else {
        result.innerText = `Rematch! C'è stato un pareggio!!`
    }
})