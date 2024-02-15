import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentQuestion < questions.length) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
  }, [currentQuestion, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/questions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1);
    }, 1000);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    clearInterval(timerRef.current);
    if (selectedOption !== '') {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    if (currentQuestion >= questions.length) {
      return (
        <div>
          <h2>Quiz ferdig</h2>
          <p>You got {correctAnswers} out of {questions.length} questions correct.</p>
          <p>Time elapsed: {formatTime(timeElapsed)}</p>
        </div>
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <div>
        <div className="timer">Tid brukt: {formatTime(timeElapsed)}</div>
        <h2>{currentQuestionData.question}</h2>
        <ul>
          {currentQuestionData.options.map((option, index) => (
            <li 
              key={index} 
              onClick={() => handleOptionClick(option)} 
              className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
        <button onClick={handleNextClick} disabled={!selectedOption}>Next</button>
      </div>
    );
  };

  return (
    <div className="Quiz">
      {renderQuestion()}
    </div>
  );
}

export default App;
