import { useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([
    'Primo post di prova',
    'Secondo post di prova',
    'Terzo post di prova',
  ]);

  const [newTitle, setNewTitle] = useState('');

  const addTitle = (event) => {
    event.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    setArticles([...articles, title]);
    setNewTitle('');
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
            <li key={i} className="list-group-item">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
