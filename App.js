import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './components/frontPage';
import Access from './components/access';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/access" element={<Access />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
