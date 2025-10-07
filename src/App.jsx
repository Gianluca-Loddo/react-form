import { useState } from 'react' // import di useState (hook di React)

import './App.css'

function App() {
  // stato iniziale con array di oggetti (articoli)
  const [articles, setArticles] = useState([
    "Primo post di prova",
    "Secondo post di prova",
    "Terzo post di prova",
  ]);

  // stato per L'INPUT del nuovo articolo
  const [newTitle, setNewTitle] = useState(''); // stato per il titolo del nuovo articolo
  
  // funzione per aggiungere un nuovo titolo alla lista degli articoli
  const addTitle = (event) => {
    event.preventDefault(); // previene il comportamento di default del form (refresh della pagina)
    const title = newTitle.trim(); // rimuove gli spazi bianchi all'inizio e alla fine del titolo
    if (!title) return; // se il titolo è vuoto, esce dalla funzione e non fa nulla
    
    /*const newArticle = [...articles, title]; // crea un nuovo array con il nuovo titolo aggiunto tramite spread operator per copiare l'array esistente
    setArticles(newArticle); // aggiorna lo stato degli articoli*/
    
    setArticles([...articles, title]); // aggiorna lo stato degli articoli aggiungendo il nuovo titolo (versione compatta)

    setNewTitle(''); // resetta il campo di input del nuovo articolo (svuotandolo)
  };

  return (
    <> {/* React Fragment */}
      
      <div className="container py-4"> {/* Bootstrap container con padding verticale */}
        <h1 className="text-center mb-4">react-form</h1> {/* Titolo centrato con margine inferiore */}      
        <h2 className="mb-3">Articoli</h2>

        {/* Form controllato */}

        <form onSubmit={addTitle} className="mb-4"> {/* Gestione dell'evento onSubmit, quando si invia il form */}
          <div className="input-group"> 
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi il titolo del nuovo articolo"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)} // aggiorna lo stato del titolo del nuovo articolo al cambiamento dell'input
            />
            <button type="submit" className="btn btn-primary"> {/* Bottone per aggiungere un articolo */}
              Aggiungi il tuo articolo
            </button>
          </div>
        </form>
        <h2 className="mb-3">Articoli</h2>

        {/* Lista dinamica */}
        <ul className="list-group">
          {articles.map((title, i) => (
            <li key={i} className="list-group-item">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}



export default App


/*  Milestone 1
Appunti sull'uso della key in React:

| Sintassi        | Cosa fa                              | Quando usarla            |
| --------------- | ------------------------------------ | ------------------------ |
| `key={a.id}`    | Usa l’id dell’oggetto (dot notation) | Migliore e più stabile   |
| `key={index}`   | Usa l’indice del ciclo               | Ok per liste statiche    |
| `key={a.title}` | Usa un altro campo univoco           | Se non si ha un id       |
*/