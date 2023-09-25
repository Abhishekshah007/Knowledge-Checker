import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './_components/startScreen';
import GameScreen from './_components/gameScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/gameScreen" element={<GameScreen />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
