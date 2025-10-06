import { useState } from 'react' // import di useState (hook di React)

import './App.css'

function App() {

  const [articles, setArticles] = useState([
    { id: 1, title: "Primo post di prova" },
    { id: 2, title: "Secondo post di prova" },
    { id: 3, title: "Terzo post di prova" },
  ]);

  const [newTitle, setNewTitle] = useState(''); // stato per il titolo del nuovo articolo

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

export default App


/*  Milestone 1


Appunti sull'uso della key in React:

 | Sintassi        | Cosa fa                              | Quando usarla            |
| --------------- | ------------------------------------ | ------------------------ |
| `key={a.id}`    | Usa l’id dell’oggetto (dot notation) | Migliore e più stabile |
| `key={index}`   | Usa l’indice del ciclo               | Ok per liste statiche |
| `key={a.title}` | Usa un altro campo univoco           | Se non si ha un id      |

*/