import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MathifyAPI from '../../MathifyAPI';
import GameOverStatus from './GameOverStatus';

const GameOver = () => {
    const [highScoreBool, setHighScoreBool] = useState(undefined);

    const gameID = useSelector((state) => state.currentGameID);
    const currentScore = useSelector((state) => state.currentScore);
    const numQuestions = useSelector((state) => state.questionsAnswers.length);

    // Checks if currentScore is a new high score and sets it on state
    useEffect(() => {
        const checkHighScore = async () => {
            const { isNewHighScore } = await MathifyAPI.checkHighScore(gameID, currentScore);
            setHighScoreBool(isNewHighScore);
        };
        checkHighScore();
    }, [gameID, currentScore]);

    // If new high score, congratualte user, else show regular game over
    return (
        <div>
            {highScoreBool ? (
                <GameOverStatus
                    title="New High Score"
                    message="Congratulations"
                    currentScore={currentScore}
                    numQuestions={numQuestions}
                />
            ) : (
                <GameOverStatus title="Game Over" currentScore={currentScore} numQuestions={numQuestions} />
            )}
        </div>
    );
};

export default GameOver;
