import { useState } from 'react';
import './App.css';

function App() {
  // stato per gli articoli
  const [articles, setArticles] = useState([
    'Primo post di prova',
    'Secondo post di prova',
    'Terzo post di prova',
  ]);

  // stato per il nuovo titolo
  const [newTitle, setNewTitle] = useState('');

  // funzione per aggiungere un nuovo titolo
  const addTitle = (event) => {
    event.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    setArticles([...articles, title]);
    setNewTitle('');
  };

  // BONUS: cancellare per indice (immutabilità con filter)
  const deleteTitle = (index) => {
    setArticles(articles.filter((_, i) => i !== index)); // filtro tutti gli articoli tranne quello con l'indice specificato
  };

  const isEmpty = newTitle.trim().length === 0;

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center mb-4">react-form</h1>
        
        <h2 className="mb-3">Nuovo Articolo</h2>
        <form onSubmit={addTitle} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi il titolo del nuovo articolo"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={isEmpty}>
              Aggiungi il tuo articolo
            </button>
          </div>
        </form>

        <h2 className="mb-3">Articoli già pubblicati</h2>

        <ul className="list-group">
          {articles.map((title, i) => (
            <li 
              key={i} 
              className="list-group-item"
            >
              {title}

              {/* BONUS: bottone icona cestino per eliminare (Bootstrap Icons) */}
              <button 
              type='button'
              className="btn btn-sm btn-outline-danger" // bottone piccolo, outline rosso
              aria-label={`Elimina ${title}`} // accessibilità per screen reader
              onClick={() => deleteTitle(i)} 
              style={{ float: 'right' }} // posiziona il bottone a destra
              >
                <i className="bi bi-trash"></i> {/* icona cestino */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
