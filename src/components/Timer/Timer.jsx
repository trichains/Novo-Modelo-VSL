import { useState, useEffect } from 'react';
import Container from '../Container/Container';

/**
 * Componente Timer
 * Exibe um temporizador regressivo que inicia de um tempo especificado e conta até zero.
 * O estado do temporizador é persistido no localStorage para continuar a contagem mesmo após recarregar a página.
 */
const Timer = () => {
  // Inicialização do estado usando localStorage para persistir o temporizador através de recargas da página.
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('timer');
    return savedTime ? JSON.parse(savedTime) : { minutes: 30, seconds: 0 };
  });

  // Efeito para configurar o intervalo do temporizador e a lógica de contagem regressiva.
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((currentTime) => {
        const updatedTime = { ...currentTime };
        if (updatedTime.seconds === 0) {
          if (updatedTime.minutes === 0) {
            clearInterval(timer); // Limpa o intervalo quando o temporizador chega a zero.
          } else {
            // Reinicia os segundos para 59 e decrementa um minuto.
            updatedTime.minutes--;
            updatedTime.seconds = 59;
          }
        } else {
          // Decrementa um segundo.
          updatedTime.seconds--;
        }
        localStorage.setItem('timer', JSON.stringify(updatedTime)); // Persiste o tempo atual no localStorage.
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timer); // Limpeza do intervalo na desmontagem do componente.
  }, []);

  // Efeito para carregar o tempo salvo do localStorage na montagem do componente.
  useEffect(() => {
    const savedTime = JSON.parse(localStorage.getItem('timer'));
    if (savedTime) {
      setTimeLeft(savedTime);
    }
  }, []);

  // Renderiza o temporizador dentro de um container estilizado.
  return (
    <div className="bg-white py-12 px-4">
      {/* Container para: flex justify-center items-center max-w-screen-lg(1024px) mx-auto */}
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium">
            Claim your Discounted{' '}
            <span className="font-bold">Sugar Defender</span> Below
          </h2>

          {/*
          Usando a biblioteca DaisyUI para o temporizador.
          Segundo a doc:
          - A contagem regressiva oferece um efeito de transição de alteração de números. 
          você precisa alterar a variável CSS `--value` usando JS. O valor deve ser um número entre 0 e 99.
          */}

          <div className="flex space-x-3 text-center">
            <div className="flex flex-col items-center gap-2 font-medium">
              <div className="p-4 bg-gray-800 rounded-xl">
                <span className="countdown text-2xl lg:text-4xl text-white">
                  {/* aqui eu estou alterando o '--value' para o minuto de 'timeLeft' */}
                  <span style={{ '--value': timeLeft.minutes }}></span>
                </span>
              </div>
              <span className="text-sm uppercase">Minutes</span>
            </div>
            <div className="flex flex-col items-center gap-2 font-medium">
              <div className="p-4 bg-gray-800 rounded-xl">
                <span className="countdown text-2xl lg:text-4xl text-white">
                  {/* aqui eu estou alterando o '--value' para o segundo de 'timeLeft' */}
                  <span style={{ '--value': timeLeft.seconds }}></span>
                </span>
              </div>
              <span className="text-sm uppercase">Seconds</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Timer;
