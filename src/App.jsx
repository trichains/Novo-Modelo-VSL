import { useState, useEffect, useRef } from 'react';

import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import AfterPitch from './AfterPitch';
import ScientificReferences from './components/ScientificReferences/ScientificReferences';
import Footer from './components/Footer/Footer';

function App() {
  const [showPitch, setShowPitch] = useState(false);
  const TimerRef = useRef(null); // Referência para o componente Timer

  useEffect(() => {
    setTimeout(() => {
      setShowPitch(true);
    }, 30000); // TODO: Alterar o pitch para 2660s (44:20)
    // !2660 * 1000 = 44:20
  }, []);

  useEffect(() => {
    // Scroll somente ocorrerá após o pitch ser mostrado e o componente montado
    if (showPitch && TimerRef.current) {
      TimerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showPitch]); // Dependência no showPitch para ativar este useEffect

  return (
    <div>
      <VideoPlayer src="https://scripts.converteai.net/878e8e96-9e3c-48f1-96d9-9d726cef585a/players/663e3c84ce7288000ab97907/embed.html" />

      {/* Renderiza as referências científicas sempre antes do pitch */}
      {!showPitch && <ScientificReferences />}

      {/* Renderiza os componentes após o pitch */}
      {showPitch && <AfterPitch ref={TimerRef} />}

      <Footer />
    </div>
  );
}

export default App;
