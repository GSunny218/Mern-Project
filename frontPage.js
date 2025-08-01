import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center front-page">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678508368i/90698905.jpg"
            alt="Book Cover"
            className="img-fluid"
            style={{ maxWidth: '400px', height: '300px' }}
          />
          <h1 className="fw-bold">Learn to Code</h1>
          <p className="lead mt-3">
            Master the skills to read and write code, build apps and games, and advance your career.
          </p>
          <button className="btn btn-custom mt-4" onClick={() => navigate('/access')}>
            Let's get started with your journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
