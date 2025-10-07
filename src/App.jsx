import { useState } from 'react' // import di useState (hook di React)

import './App.css'

function App() {
  // stato iniziale con array di oggetti (articoli)
  const [articles, setArticles] = useState([
    "Primo post di prova",
    "Secondo post di prova"
    "Terzo post di prova",
  ]);

  // stato per L'INPUT del nuovo articolo
  const [newTitle, setNewTitle] = useState(''); // stato per il titolo del nuovo articolo


  const addTitle = (event) => {
    event.preventDefault(); // previene il comportamento di default del form (refresh della pagina)
    
    const newArticle = [...articles, newTitle]; // crea un nuovo array con il nuovo titolo
    setArticles(newArticle); // aggiorna lo stato degli articoli

    return (
      <> {/* React Fragment */}
        <div className="container py-4"> {/* Bootstrap container con padding verticale */}
          <h1 className="text-center mb-4">react-form</h1> {/* Titolo centrato con margine inferiore */}

          <h2 className="mb-3">Articoli</h2>

          {/* Milestone 1: visualizzazione statica lista articoli */}
          <ul className="list-group"> {/* Lista di Bootstrap */}
            {articles.map((article, i) => (
              <li key={i} className="list-group-item"> {/* Elemento di lista di Bootstrap */}
                {article.title}
              </li>
            ))}
          </ul>
        </div>

      </>
    );
  }
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