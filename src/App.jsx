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
  const addTitle = (event) => {
    event.preventDefault(); // previene il comportamento di default del form (refresh della pagina)
    if (!newTitle) return; // se il titolo è vuoto, esce dalla funzione e non fa nulla
    const newArticle = [...articles, newTitle]; // crea un nuovo array con il nuovo titolo aggiunto tramite spread operator per copiare l'array esistente
    setArticles(newArticle); // aggiorna lo stato degli articoli
    setNewTitle(''); // resetta il campo di input del nuovo articolo (svuotandolo)
  };

  return (
    <> {/* React Fragment */}
      <div className="container py-4"> {/* Bootstrap container con padding verticale */}
        <h1 className="text-center mb-4">react-form</h1> {/* Titolo centrato con margine inferiore */}

        <h2 className="mb-3">Articoli</h2>

        {/* Form controllato */}
        <form onSubmit={addTitle} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi un titolo..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Aggiungi
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