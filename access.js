import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Access.css';

const Access = () => {
  const navigate = useNavigate();

  const backgroundImages = [
    'https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg',
    'https://www.gettingsmart.com/wp-content/uploads/2017/07/Coding-Computer-Science.jpg',
    'https://tse4.mm.bing.net/th/id/OIP.rTY1lrNJB6SlNZh9-AGd0AHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://bing.com/th/id/BCO.9c3d77dd-5ac9-45da-a0a0-3a4084ee91b7.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };

  return (
    <div style={backgroundStyle}>
      <div className="container text-center access-box">
        <h2>Welcome!</h2>
        <p className="lead">Start your coding journey or log back in</p>

        <button
          className="btn btn-success m-2"
          onClick={() => navigate('/login?mode=signup')}
        >
          Sign Up
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => navigate('/login?mode=signin')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Access;
