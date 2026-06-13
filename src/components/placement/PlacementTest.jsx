import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../common/back/Back';
import './placement.css';
import { quizQuestions } from '../../dummydata'; // Importing quiz questions from a separate file

const PlacementTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer Logic
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit(); // Auto-submit when time runs out
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isSubmitted]);

  // Format Time (MM:SS)
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let finalScore = 0;
    quizQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);
  };

  return (
    <>
      <Back title="LGI Placement Test" />
      <div className="placement-page">
        <div className="placement-container">
          
          {!isSubmitted ? (
            <>
              {/* HEADER & TIMER */}
              <div className="test-header">
                <h2>Question {currentQuestion + 1} of {quizQuestions.length}</h2>
                <div className={`timer ${timeLeft <= 60 ? 'warning' : ''}`}>
                  <i className="fa fa-clock"></i> {formatTime()}
                </div>
              </div>

              {/* MAIN TEST AREA (SPLIT LAYOUT) */}
              <div className={`test-layout ${quizQuestions[currentQuestion].passage ? 'has-passage' : ''}`}>
                
                {/* 1. PASSAGE BOX (Only shows if the question has a passage) */}
                {quizQuestions[currentQuestion].passage && (
                  <div className="passage-section fade-in">
                    <h3>{quizQuestions[currentQuestion].passage.title}</h3>
                    <p>{quizQuestions[currentQuestion].passage.text}</p>
                  </div>
                )}

                {/* 2. QUESTION BOX */}
                <div className="question-section fade-in">
                  <div className="question-block">
                    <h3>{quizQuestions[currentQuestion].q}</h3>
                    <div className="options-grid">
                      {quizQuestions[currentQuestion].options.map((option, idx) => (
                        <div 
                          key={idx} 
                          className={`option-card ${answers[currentQuestion] === option ? 'selected' : ''}`}
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* NAVIGATION */}
              <div className="test-navigation">
                <button 
                  className="btn-prev" 
                  onClick={prevQuestion} 
                  disabled={currentQuestion === 0}
                  style={{ opacity: currentQuestion === 0 ? 0 : 1 }}
                >
                  <i className="fa fa-arrow-left"></i> Previous
                </button>
                
                {currentQuestion === quizQuestions.length - 1 ? (
                  <button className="btn-submit" onClick={handleSubmit}>
                    Submit Test <i className="fa fa-paper-plane"></i>
                  </button>
                ) : (
                  <button className="btn-next" onClick={nextQuestion}>
                    Next Question <i className="fa fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </>
          ) : (
            
            /* RESULTS SCREEN */
            <div className="results-screen fade-in">
              <i className="fa fa-check-circle"></i>
              <h1>Test Completed!</h1>
              <p style={{ fontSize: '18px', color: '#777', marginTop: '10px' }}>
                Thank you for completing the KOLAWOLE LERNT DEUTSCH assessment.
              </p>
              
              <div className="score-box">
                <h2>{score} / {quizQuestions.length}</h2>
                <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
                  {score <= 8 ? "Recommended Level: A1.1 (Beginner Phase 1)" : 
                   score <= 15 ? "Recommended Level: A1.2 (Beginner Phase 2)" : 
                   "Recommended Level: A2 (Elementary Ready)"}
                </p>
              </div>

              <button 
                className="primary-btn" 
                onClick={() => navigate('/enroll')}
                style={{ width: '100%', maxWidth: '300px', fontSize: '16px' }}
              >
                Proceed to Enrollment <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default PlacementTest;