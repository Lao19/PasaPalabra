import React, { useState, useEffect, useRef, useMemo } from 'react';

// Componente principal de la aplicación Pasa Palabra
const App = () => {
  // Lista maestra de todas las preguntas posibles, categorizadas por letra.
  // Cada letra puede tener múltiples preguntas.
  const allQuestionsData = useMemo(() => ([
    { letter: 'A', questions: [
      { question: 'Animal que vive en el agua y tiene branquias.', answer: 'PEZ' },
      { question: 'Primera letra del abecedario.', answer: 'A' },
      { question: 'Estación del año que sigue al invierno.', answer: 'PRIMAVERA' }
    ]},
    { letter: 'B', questions: [
      { question: 'Color del cielo en un día soleado.', answer: 'AZUL' },
      { question: 'Vehículo de dos ruedas.', answer: 'BICICLETA' },
      { question: 'Bebida alcohólica hecha de uvas.', answer: 'VINO' }
    ]},
    { letter: 'C', questions: [
      { question: 'Recipiente para beber café o té.', answer: 'TAZA' },
      { question: 'Animal doméstico que maúlla.', answer: 'GATO' },
      { question: 'Parte del cuerpo humano que usamos para pensar.', answer: 'CEREBRO' }
    ]},
    { letter: 'D', questions: [
      { question: 'Día de la semana antes del viernes.', answer: 'JUEVES' },
      { question: 'Instrumento musical de cuerda.', answer: 'GUITARRA' },
      { question: 'Sinónimo de obsequio.', answer: 'REGALO' }
    ]},
    { letter: 'E', questions: [
      { question: 'Órgano que bombea sangre en el cuerpo.', answer: 'CORAZON' },
      { question: 'Continente donde se encuentra España.', answer: 'EUROPA' },
      { question: 'Metal precioso de color amarillo.', answer: 'ORO' }
    ]},
    { letter: 'F', questions: [
      { question: 'Fruta redonda y roja, muy común.', answer: 'MANZANA' },
      { question: 'Estación del año más fría.', answer: 'INVIERNO' },
      { question: 'Parte de la planta que da frutos.', answer: 'FLOR' }
    ]},
    { letter: 'G', questions: [
      { question: 'Animal doméstico que maúlla.', answer: 'GATO' },
      { question: 'Color de la hierba.', answer: 'VERDE' },
      { question: 'Planeta donde vivimos.', answer: 'TIERRA' }
    ]},
    { letter: 'H', questions: [
      { question: 'Elemento químico cuyo símbolo es H.', answer: 'HIDROGENO' },
      { question: 'Casa de los pájaros.', answer: 'NIDO' },
      { question: 'Sinónimo de hermoso.', answer: 'BELLO' }
    ]},
    { letter: 'I', questions: [
      { question: 'País con forma de bota.', answer: 'ITALIA' },
      { question: 'Contrario de exterior.', answer: 'INTERIOR' },
      { question: 'Sentimiento de alegría.', answer: 'FELICIDAD' }
    ]},
    { letter: 'J', questions: [
      { question: 'Mes que sigue a junio.', answer: 'JULIO' },
      { question: 'Deporte que se juega con raqueta.', answer: 'TENIS' },
      { question: 'Sinónimo de alegría.', answer: 'GOZO' }
    ]},
    { letter: 'K', questions: [
      { question: 'Unidad de medida de peso, mil gramos.', answer: 'KILO' },
      { question: 'Deporte de origen japonés.', answer: 'KARATE' },
      { question: 'Tipo de fruta tropical, verde por fuera y blanca por dentro.', answer: 'KIWI' }
    ]},
    { letter: 'L', questions: [
      { question: 'Astro nocturno que ilumina la noche.', answer: 'LUNA' },
      { question: 'Animal salvaje que ruge.', answer: 'LEON' },
      { question: 'Prenda de vestir para cubrir las piernas.', answer: 'PANTALON' }
    ]},
    { letter: 'M', questions: [
      { question: 'Capital de España.', answer: 'MADRID' },
      { question: 'Instrumento musical de viento.', answer: 'FLAUTA' },
      { question: 'Parte del cuerpo que usamos para caminar.', answer: 'PIERNA' }
    ]},
    { letter: 'N', questions: [
      { question: 'Color del cielo por la noche.', answer: 'NEGRO' },
      { question: 'Número que sigue al ocho.', answer: 'NUEVE' },
      { question: 'Contrario de día.', answer: 'NOCHE' }
    ]},
    { letter: 'Ñ', questions: [
      { question: 'Fruta tropical con cáscara rugosa.', answer: 'PIÑA' },
      { question: 'Planta de la que se extrae un aceite comestible.', answer: 'CAÑA' },
      { question: 'Mamífero rumiante de la familia de los bóvidos.', answer: 'ÑU' }
    ]},
    { letter: 'O', questions: [
      { question: 'Número que sigue al siete.', answer: 'OCHO' },
      { question: 'Estación del año de las hojas caídas.', answer: 'OTOÑO' },
      { question: 'Sentido que nos permite escuchar.', answer: 'OIDO' }
    ]},
    { letter: 'P', questions: [
      { question: 'Ave que pone huevos.', answer: 'GALLINA' },
      { question: 'País vecino de España.', answer: 'PORTUGAL' },
      { question: 'Animal doméstico que ladra.', answer: 'PERRO' }
    ]},
    { letter: 'Q', questions: [
      { question: 'Número de días en una semana.', answer: 'SIETE' },
      { question: 'Mineral precioso y brillante.', answer: 'CUARZO' },
      { question: 'Lo que se usa para escribir en una pizarra.', answer: 'TIZA' }
    ]},
    { letter: 'R', questions: [
      { question: 'Prenda de vestir para cubrir el cuerpo.', answer: 'ROPA' },
      { question: 'Color del tomate maduro.', answer: 'ROJO' },
      { question: 'Animal que vive en el bosque y come bellotas.', answer: 'ARDILLA' }
    ]},
    { letter: 'S', questions: [
      { question: 'Día de la semana antes del domingo.', answer: 'SABADO' },
      { question: 'Astro rey del sistema solar.', answer: 'SOL' },
      { question: 'Contrario de bajar.', answer: 'SUBIR' }
    ]},
    { letter: 'T', questions: [
      { question: 'Vehículo de dos ruedas.', answer: 'BICICLETA' },
      { question: 'Animal grande con trompa.', answer: 'ELEFANTE' },
      { question: 'Objeto para medir el tiempo.', answer: 'RELOJ' }
    ]},
    { letter: 'U', questions: [
      { question: 'Continente donde se encuentra España.', answer: 'EUROPA' },
      { question: 'Contrario de abajo.', answer: 'ARRIBA' },
      { question: 'Número impar que sigue al uno.', answer: 'TRES' }
    ]},
    { letter: 'V', questions: [
      { question: 'Color de la hierba.', answer: 'VERDE' },
      { question: 'Órgano de la vista.', answer: 'OJO' },
      { question: 'Día de la semana después del jueves.', answer: 'VIERNES' }
    ]},
    { letter: 'W', questions: [
      { question: 'Marca famosa de ropa deportiva.', answer: 'ADIDAS' },
      { question: 'Famoso explorador que descubrió América.', answer: 'COLON' },
      { question: 'Deporte acuático que se practica sobre una tabla.', answer: 'SURF' }
    ]},
    { letter: 'X', questions: [
      { question: 'Instrumento musical de percusión.', answer: 'XILOFONO' },
      { question: 'Rayos invisibles usados en medicina.', answer: 'RAYOSX' },
      { question: 'Pez de agua dulce, parecido a la anguila.', answer: 'XENOPUS' }
    ]},
    { letter: 'Y', questions: [
      { question: 'Parte del huevo de color amarillo.', answer: 'YEMA' },
      { question: 'Embarcación de recreo.', answer: 'YATE' },
      { question: 'Elemento químico, metal de color blanco plateado.', answer: 'ITRIO' }
    ]},
    { letter: 'Z', questions: [
      { question: 'Animal rayado de la sabana.', answer: 'CEBRA' },
      { question: 'Calzado que cubre el pie y parte de la pierna.', answer: 'ZAPATO' },
      { question: 'Lugar donde se guardan los animales salvajes.', answer: 'ZOO' }
    ]},
  ]), []); // useMemo para evitar la recreación en cada renderizado

  // Estado para las preguntas seleccionadas para la ronda actual
  const [currentRoundQuestions, setCurrentRoundQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scoreCorrect, setScoreCorrect] = useState(0);
  const [scoreIncorrect, setScoreIncorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // Tiempo inicial en segundos
  const [gameRunning, setGameRunning] = useState(false); // Verdadero cuando el temporizador está contando
  const [gameFinished, setGameFinished] = useState(false); // Verdadero cuando el juego ha terminado (tiempo o todas las preguntas respondidas)
  const [isGameStarted, setIsGameStarted] = useState(false); // Verdadero una vez que el juego ha sido iniciado al menos una vez
  const [initialTime, setInitialTime] = useState(120); // Tiempo inicial configurable

  const timerRef = useRef(null); // Referencia para el intervalo del temporizador

  // Efecto para manejar el temporizador
  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameRunning) {
      // El tiempo se acabó
      clearInterval(timerRef.current);
      setGameRunning(false);
      setGameFinished(true);
    }
    // Limpieza del intervalo al desmontar el componente o al detener el juego
    return () => clearInterval(timerRef.current);
  }, [gameRunning, timeLeft]);

  // Función para iniciar o reiniciar el juego
  const startGame = () => {
    // Seleccionar una pregunta aleatoria para cada letra para la ronda actual
    const selectedQuestions = allQuestionsData.map((letterData, index) => {
      const randomIndex = Math.floor(Math.random() * letterData.questions.length);
      return {
        id: index, // Usar el índice como ID por simplicidad en este contexto
        letter: letterData.letter,
        question: letterData.questions[randomIndex].question,
        answer: letterData.questions[randomIndex].answer,
        status: 'pending'
      };
    });

    setCurrentRoundQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScoreCorrect(0);
    setScoreIncorrect(0);
    setTimeLeft(initialTime); // Usar el tiempo inicial configurable
    setGameFinished(false);
    setGameRunning(true);
    setIsGameStarted(true); // Marcar el juego como iniciado
  };

  // Función para pausar el juego
  const pauseGame = () => {
    setGameRunning(false);
    clearInterval(timerRef.current);
  };

  // Función para reanudar el juego
  const resumeGame = () => {
    if (timeLeft > 0 && !gameFinished) {
      setGameRunning(true);
    }
  };

  // Función para manejar la respuesta "Correcto"
  const handleCorrect = () => {
    if (!gameRunning || gameFinished) return;

    const newQuestions = [...currentRoundQuestions];
    newQuestions[currentQuestionIndex].status = 'correct';
    setCurrentRoundQuestions(newQuestions);
    setScoreCorrect(scoreCorrect + 1);
    moveToNextQuestion();
  };

  // Función para manejar la respuesta "Incorrecto"
  const handleIncorrect = () => {
    if (!gameRunning || gameFinished) return;

    const newQuestions = [...currentRoundQuestions];
    newQuestions[currentQuestionIndex].status = 'incorrect';
    setCurrentRoundQuestions(newQuestions);
    setScoreIncorrect(scoreIncorrect + 1);
    moveToNextQuestion();
  };

  // Función para manejar "Pasa Palabra"
  const handlePass = () => {
    if (!gameRunning || gameFinished) return;

    const newQuestions = [...currentRoundQuestions];
    // Si ya ha pasado, se mantiene como 'passed', de lo contrario cambia de 'pending' a 'passed'
    if (newQuestions[currentQuestionIndex].status === 'pending') {
      newQuestions[currentQuestionIndex].status = 'passed';
    }
    setCurrentRoundQuestions(newQuestions);
    moveToNextQuestion();
  };

  // Mover a la siguiente pregunta pendiente o pasada
  const moveToNextQuestion = () => {
    const totalQuestions = currentRoundQuestions.length;
    let nextIndex = currentQuestionIndex;
    let foundNext = false;

    // Buscar la siguiente pregunta pendiente o pasada
    for (let i = 0; i < totalQuestions; i++) {
      nextIndex = (currentQuestionIndex + 1 + i) % totalQuestions;
      if (currentRoundQuestions[nextIndex].status === 'pending' || currentRoundQuestions[nextIndex].status === 'passed') {
        setCurrentQuestionIndex(nextIndex);
        foundNext = true;
        break;
      }
    }

    // Si no se encuentran más preguntas pendientes o pasadas, el juego termina
    if (!foundNext) {
      setGameRunning(false);
      setGameFinished(true);
      clearInterval(timerRef.current);
    }
  };

  // Formatear el tiempo restante a MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = currentRoundQuestions[currentQuestionIndex];

  // Calcular posiciones para el diseño circular del Rosco
  const numLetters = currentRoundQuestions.length;
  const roscoRadius = 150; // Radio del círculo en píxeles
  const letterSize = 40; // Tamaño de cada círculo de letra (ancho/alto)

  const getRoscoLetterStyle = (index) => {
    if (numLetters === 0) return {}; // Evitar división por cero

    // El ángulo inicial para la 'A' (índice 0) debe ser -90 grados (o 270 grados) para que esté arriba.
    // Los ángulos se calculan en sentido horario desde la parte superior.
    const startAngle = -90; // -90 grados para la parte superior (12 en punto)
    const angleIncrement = 360 / numLetters;
    const angle = startAngle + (angleIncrement * index);
    const radians = angle * (Math.PI / 180); // Convertir grados a radianes

    // Calcular posiciones x e y en el círculo
    // Math.cos y Math.sin operan con 0 grados a la derecha (eje X positivo),
    // 90 grados arriba (eje Y positivo), etc.
    const x = roscoRadius * Math.cos(radians);
    const y = roscoRadius * Math.sin(radians);

    return {
      position: 'absolute',
      // Ajustar para centrar la letra en su posición calculada
      left: `calc(50% + ${x}px - ${letterSize / 2}px)`,
      top: `calc(50% + ${y}px - ${letterSize / 2}px)`,
      // No aplicar transformación de rotación al elemento de la letra
      // para que el texto siempre se vea en posición vertical.
    };
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4 font-inter text-white">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-2xl text-center border border-white border-opacity-30">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg">
          Pasa Palabra
        </h1>

        {/* Pantalla de configuración inicial: solo visible si el juego no ha comenzado */}
        {!isGameStarted && !gameFinished ? (
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <label htmlFor="timeInput" className="block text-lg font-semibold mb-2">
                Tiempo de juego (segundos):
              </label>
              <input
                id="timeInput"
                type="number"
                value={initialTime}
                onChange={(e) => setInitialTime(Math.max(30, parseInt(e.target.value) || 0))}
                className="w-32 p-2 rounded-lg bg-white bg-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-center"
                min="30"
              />
            </div>
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Comenzar Juego
            </button>
          </div>
        ) : (
          <>
            <div className="text-3xl font-bold mb-4 text-yellow-300">
              Tiempo: {formatTime(timeLeft)}
            </div>

            {/* Rosco de Pasa Palabra */}
            <div className="relative w-[350px] h-[350px] mx-auto mb-8 flex items-center justify-center">
              {currentRoundQuestions.map((q, index) => (
                <div
                  key={q.id}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg
                    ${q.status === 'pending' ? 'bg-gray-300 text-gray-800' : ''}
                    ${q.status === 'correct' ? 'bg-green-500 text-white' : ''}
                    ${q.status === 'incorrect' ? 'bg-red-500 text-white' : ''}
                    ${q.status === 'passed' ? 'bg-yellow-500 text-white' : ''}
                    ${currentQuestion && currentQuestion.id === q.id ? 'ring-4 ring-blue-400 scale-110' : ''}
                    transition-all duration-200 ease-in-out
                  `}
                  style={getRoscoLetterStyle(index)}
                >
                  {q.letter}
                </div>
              ))}
            </div>

            {gameFinished ? (
              <div className="text-2xl font-bold mb-6">
                ¡Juego Terminado!
                <p className="text-xl mt-2">Respuestas Correctas: {scoreCorrect}</p>
                <p className="text-xl">Respuestas Incorrectas: {scoreIncorrect}</p>
                <button
                  onClick={startGame}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Jugar de Nuevo
                </button>
              </div>
            ) : (
              <>
                {/* Visualización de Pregunta y Respuesta */}
                {currentQuestion && ( // Asegurarse de que currentQuestion exista antes de renderizar
                    <div className="bg-white bg-opacity-30 p-6 rounded-lg mb-6 shadow-inner">
                        <p className="text-xl md:text-2xl font-semibold mb-3">
                            <span className="text-yellow-300">Con la {currentQuestion.letter}:</span> {currentQuestion.question}
                        </p>
                        <p className="text-lg md:text-xl font-medium text-gray-100">
                            Respuesta: <span className="font-bold text-yellow-200">{currentQuestion.answer}</span>
                        </p>
                    </div>
                )}


                <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                  <button
                    onClick={handleCorrect}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex-1"
                    disabled={!gameRunning} // Deshabilitar botones si el juego está en pausa
                  >
                    Correcto ({scoreCorrect})
                  </button>
                  <button
                    onClick={handleIncorrect}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex-1"
                    disabled={!gameRunning} // Deshabilitar botones si el juego está en pausa
                  >
                    Incorrecto ({scoreIncorrect})
                  </button>
                  <button
                    onClick={handlePass}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex-1"
                    disabled={!gameRunning} // Deshabilitar botones si el juego está en pausa
                  >
                    Pasa Palabra
                  </button>
                </div>

                <div className="flex justify-center gap-4">
                  {gameRunning ? (
                    <button
                      onClick={pauseGame}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Pausar
                    </button>
                  ) : (
                    <button
                      onClick={resumeGame}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Reanudar
                    </button>
                  )}
                  <button
                    onClick={startGame}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Reiniciar Juego
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
