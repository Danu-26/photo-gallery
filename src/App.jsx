import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import PhotoDetailsPage from './pages/PhotoDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoGalleryPage />} />
        <Route path="/photos/:id" element={<PhotoDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
