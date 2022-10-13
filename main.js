// **Descrizione:**
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// **Consigli:**
// Come posso ciclare su un array con il ciclo while?
// let coding = true
// while(coding) {
// console.log('Buon divertimento e che la forza si con voi! ')
// }

const listaSpesa = [
    'Taralli',
    'Affettati',
    'Pane',
    'Pasta',
    'Pesto',
    'Formaggio'
]
  i=0

  while (i<listaSpesa.length) {
    const articolo = listaSpesa[i];

    console.log(articolo);

    
    i++
  }
  

  