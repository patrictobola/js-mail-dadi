# Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare Uin console)

- creare una variabile con giocatore uno
- creare una variabile con giocatore due
- creare una variabile che calcoli un numero da 1 a 6 (forse bisogna farlo due volte, procederò al controllo nel codice)
- lanciare il comando che genera il numero sia al player 1 che al player 2
  - **se** il numero di player 1 è maggiore del numero di player 2
    - player 1 hai vinto
  - **se** il numero di player 1 è minore del numero di player 2
    - player 2 hai vinto
  - **Altrimenti** è un pareggio
- stampo in console il risultato

## BONUS

Nell'esercizio dadi, mettiamo un tasto "Gioca" ed eseguiamo la logica di gioco al click del bottone

- creo un elemento dove stampare il risultato nella pagina html
  - assegno quell'elemento ad una variabile in JS
- creo un bottone
  - assegno il bottone in JS
- aggiungo un addeventlistener al click del bottone
  - Stampo il risultato direttamente in pagina

# Mail

Inventiamo una lista di email a nostro piacimento
Chiediamo all'utente una mail (con un prompt)
controlliamo che la mail inserita sia presente nella lista
se è presente, gli diamo il benvenuto. (in console)
altrimenti gli diciamo che non può accedere (in console)
non potete usare il metodo .includes()!!!

- creaiamo una variabile con all'interno un array con una serie di mail
- prompt per chiedere all'utente una mail
- **SE** la mail è presente nella lista
  - gli diamo il benvenuto in console
- **ALTRIMENTI** diciamo all'utente che non può accedere.

## BONUS

Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone

- Nell'HTML creiamo un input e un bottone
- colleghiamo in JS l'input e il button
- al click del bottone verifichiamo _**SE** la mail è presente nella lista_
