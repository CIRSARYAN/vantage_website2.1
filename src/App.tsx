import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProblemPage from './pages/ProblemPage';
import SolutionPage from './pages/SolutionPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ImpactPage from './pages/ImpactPage';
import ProgressPage from './pages/ProgressPage';
import NextStepsPage from './pages/NextStepsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/next-steps" element={<NextStepsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
