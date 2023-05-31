// Creo una lista di mail 
const mailList = [
    "tobola92@gmail.com",
    "mailacaso@gmail.com",
    "tizio@boolean.com",
    "altrotizio@boolean.com"];

    
    
    // Prendo dal DOM il button e l'input che mi servono 
    const mailInput = document.getElementById('mailInput');
    const mailButton = document.getElementById('mailButton');
    // Prendo dal DOM l'elemento dove voglio mettere il risultato del click
    const loginResult = document.getElementById('login-result');
    
    mailButton.addEventListener('click', function(){
    // Chiedo all'utente di inserire una mail
    const mailRequest = mailInput.value;

    // Flag
    let trovato = false;
    let message = '';
    // Condizione per la quale ricevo un feedback in base alla mail inserita
    // Se la mail esiste nella mia lista 
    for (let i = 0; i < mailList.length; i++) {
        const mailItem = mailList[i];
        if (mailRequest === mailItem) {
            message = 'Benvenuto caro utente!'
            trovato = true;
        }
    }
    
    // Se non esiste nella mia lista 
    if (!trovato) {
        message = 'Non risulti registrato!'
    }
    
    loginResult.innerHTML = message;
    
})
// So che da traccia non potevamo usare includes() allora ho fatto solo una variante che usa find(). e lo scrive in console. Però per vedere se funziona dovete refreshare la pagina con la mail inserita nell'input!
if (mailList.find(element => element == mailInput.value)) {
    console.log('Bentornato caro utente')
} else {
    console.log('Non risulti registrato!')
}
