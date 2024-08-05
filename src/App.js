import './App.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GamePage from './pages/GamePage';
import NewsPage from './pages/NewsPage';
import PricingPage from './pages/PricingPage';
import MentionsPage from './pages/MentionsPage';
import RGPDPage from './pages/RGPDPage';
import CGVPage from './pages/CGVPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import ChapitresPage from './pages/ChapitresPage';
import ChapitresDetailsPage from './pages/ChapitresDetailsPage';
import TutorielsDetailsPage from './pages/TutorielsDetailsPage';
import EndTutorielsPage from './pages/EndTutorielsPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/PageNotFound';
import AddTutorielsPage from './pages/AddTutorielsPage';



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapitres" element={<ChapitresPage />} />
          <Route path="/chapitres/:chapitreId" element={<ChapitresDetailsPage />} />
          <Route path="/tutoriels/:tutorielId" element={<TutorielsDetailsPage />} />
          <Route path="/endTutoriel" element={<EndTutorielsPage />} />
          <Route path="/ajout-tutoriel" element={<ProtectedRoute><AddTutorielsPage /></ProtectedRoute>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vos-jeux" element={<GamePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:articleId" element={<NewsDetailsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/mentions-legales" element={<MentionsPage />} />
          <Route path="/politique-de-confidentialite" element={<RGPDPage />} />
          <Route path="/conditions-generales-de-vente" element={<CGVPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/compte" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
