import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get('mode'); // 'signin' or 'signup'

  const [isSignIn, setIsSignIn] = useState(mode === 'signin');

  useEffect(() => {
    setIsSignIn(mode === 'signin');
  }, [mode]);

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="container">
      <div className="center-box text-center">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

        <form className="fade-in mt-4 text-start">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required placeholder="you@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required placeholder="••••••••" />
          </div>

          {!isSignIn && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" required placeholder="••••••••" />
            </div>
          )}

          <button type="submit" className="btn btn-custom w-100">
            {isSignIn ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="mt-3">
          {isSignIn ? (
            <p>
              Don’t have an account?{' '}
              <button className="btn btn-link" onClick={toggleMode}>
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button className="btn btn-link" onClick={toggleMode}>
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
