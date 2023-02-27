import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found">
      <div>404</div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="link">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
}

export default NotFound;
