import { useState, useEffect, useRef } from 'react';

import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import AfterPitch from './AfterPitch';
import ScientificReferences from './components/ScientificReferences/ScientificReferences';
import Footer from './components/Footer/Footer';

function App() {
  // Inicializa o estado com base no valor salvo no localStorage ou default para false
  const [showPitch, setShowPitch] = useState(() => {
    const savedPitchState = localStorage.getItem('pitchShown');
    return savedPitchState ? JSON.parse(savedPitchState) : false;
  });

  const TimerRef = useRef(null); // Referência para o componente Timer

  useEffect(() => {
    // Se o pitch ainda não foi mostrado, ativa o pitch após 10 segundos
    if (!showPitch) {
      const timer = setTimeout(() => {
        setShowPitch(true);
        localStorage.setItem('pitchShown', 'true'); // Salva o estado no localStorage
      }, 30000); // TODO: Alterar o pitch para 2660s (44:20)
      // !2660 * 1000 = 44:20

      return () => clearTimeout(timer);
    }
  }, [showPitch]);

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
