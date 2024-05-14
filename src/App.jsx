import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import MainContent from './MainContent';
import Disclaimer from './components/Disclaimer/Disclaimer';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <MainContent />
            </MainLayout>
          }
        />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}
export default App;