import React, { useState, useEffect } from 'react';

const PenaltyShootout = () => {
  // Game state
  const [playerScore, setPlayerScore] = useState(0);
  const [keeperScore, setKeeperScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  
  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [ballPosition, setBallPosition] = useState('center');
  const [keeperPosition, setKeeperPosition] = useState('center');
  const [shotDirection, setShotDirection] = useState(null);
  const [keeperDive, setKeeperDive] = useState(null);
  const [result, setResult] = useState(null);
  
  const TOTAL_ROUNDS = 5;
  const WINNING_SCORE = Math.ceil(TOTAL_ROUNDS / 2);

  // Reset ball and keeper positions
  const resetPositions = () => {
    setBallPosition('center');
    setKeeperPosition('center');
    setShotDirection(null);
    setKeeperDive(null);
    setResult(null);
  };

  // Handle shot
  const handleShot = (direction) => {
    if (isAnimating || gameOver) return;

    setIsAnimating(true);
    setShotDirection(direction);
    
    // Animate ball
    setBallPosition(direction);
    
    // Random keeper dive
    const directions = ['left', 'center', 'right'];
    const randomDive = directions[Math.floor(Math.random() * directions.length)];
    setKeeperDive(randomDive);
    setKeeperPosition(randomDive);
    
    // Determine result after animation
    setTimeout(() => {
      const isGoal = direction !== randomDive;
      setResult(isGoal ? 'goal' : 'save');
      
      if (isGoal) {
        setPlayerScore(prev => prev + 1);
      } else {
        setKeeperScore(prev => prev + 1);
      }
      
      // Check if game is over
      setTimeout(() => {
        const newPlayerScore = isGoal ? playerScore + 1 : playerScore;
        const newKeeperScore = isGoal ? keeperScore : keeperScore + 1;
        
        if (newPlayerScore >= WINNING_SCORE || newKeeperScore >= WINNING_SCORE || currentRound >= TOTAL_ROUNDS) {
          setGameOver(true);
          if (newPlayerScore > newKeeperScore) {
            setWinner('player');
          } else if (newKeeperScore > newPlayerScore) {
            setWinner('keeper');
          } else {
            setWinner('tie');
          }
        } else {
          setCurrentRound(prev => prev + 1);
        }
        
        setIsAnimating(false);
        resetPositions();
      }, 1500);
    }, 1000);
  };

  // Restart game
  const restartGame = () => {
    setPlayerScore(0);
    setKeeperScore(0);
    setCurrentRound(1);
    setGameOver(false);
    setWinner(null);
    setIsAnimating(false);
    resetPositions();
  };

  // Get result message
  const getResultMessage = () => {
    if (!result) return null;
    
    if (result === 'goal') {
      return 'GOAL! 🎉';
    } else {
      return 'SAVED! 🧤';
    }
  };

  // Get game over message
  const getGameOverMessage = () => {
    if (!gameOver) return null;
    
    if (winner === 'player') {
      return 'YOU WIN! 🏆';
    } else if (winner === 'keeper') {
      return 'GAME OVER! 😔';
    } else {
      return 'IT\'S A TIE! 🤝';
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">⚽ Penalty Shootout</h1>
      
      <div className="score-display">
        Player {playerScore} - {keeperScore} Keeper
      </div>
      
      {!gameOver && (
        <div className="round-info">
          Round {currentRound} of {TOTAL_ROUNDS}
        </div>
      )}
      
      <div className="goal-container">
        <div className="goal-net"></div>
        <div className="goal-posts"></div>
        
        {/* Ball */}
        <div 
          className={`ball ${shotDirection ? `shot-${shotDirection} shooting` : ''}`}
        ></div>
        
        {/* Keeper */}
        <div 
          className={`keeper ${keeperDive ? `diving-${keeperDive}` : ''}`}
        ></div>
      </div>
      
      {/* Result message */}
      {result && (
        <div className={`result-message ${result}`}>
          {getResultMessage()}
        </div>
      )}
      
      {/* Game over message */}
      {gameOver && (
        <div className={`game-over ${winner === 'player' ? 'win' : winner === 'keeper' ? 'lose' : ''}`}>
          {getGameOverMessage()}
        </div>
      )}
      
      {/* Controls */}
      {!gameOver && (
        <div className="controls">
          <button
            className="shoot-button left"
            onClick={() => handleShot('left')}
            disabled={isAnimating}
          >
            Left
          </button>
          <button
            className="shoot-button center"
            onClick={() => handleShot('center')}
            disabled={isAnimating}
          >
            Center
          </button>
          <button
            className="shoot-button right"
            onClick={() => handleShot('right')}
            disabled={isAnimating}
          >
            Right
          </button>
        </div>
      )}
      
      {/* Restart button */}
      {gameOver && (
        <button className="restart-button" onClick={restartGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default PenaltyShootout; 