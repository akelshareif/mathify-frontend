import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestionChoices from './QuestionChoices';
import Timer from './Timer';
import StatusBar from './StatusBar';
import { checkAnswer } from '../../actions';

const Game = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // Grab game data from redux store
    const gameType = useSelector((state) => state.gameType);
    const currentScore = useSelector((state) => state.currentScore);
    const questionsAnswers = useSelector((state) => state.questionsAnswers);

    // Initialize turn data
    const [turnData, setTurnData] = useState({
        currentQuestionIndex: 0,
        ans1: undefined,
        ans2: undefined,
    });

    const handleAnswer = (answer) => {
        // Update answers if selected/deselected
        if (answer === turnData.ans1) {
            setTurnData((data) => ({
                ...data,
                ans1: undefined,
            }));
        } else if (answer === turnData.ans2) {
            setTurnData((data) => ({
                ...data,
                ans2: undefined,
            }));
        } else {
            // Set initial answers
            if (!turnData.ans1) {
                setTurnData((data) => ({
                    ...data,
                    ans1: answer,
                }));
            } else if (!turnData.ans2) {
                setTurnData((data) => ({
                    ...data,
                    ans2: answer,
                }));
            }
        }
    };

    const handleAnswerSubmission = () => {
        // Update game score
        dispatch(
            checkAnswer({
                gameType,
                ans1: turnData.ans1,
                ans2: turnData.ans2,
                question: questionsAnswers[turnData.currentQuestionIndex].question,
            })
        );

        // Update current question index
        if (turnData.currentQuestionIndex < questionsAnswers.length - 1) {
            setTurnData({
                currentQuestionIndex: turnData.currentQuestionIndex + 1,
                ans1: undefined,
                ans2: undefined,
            });
        } else {
            // game over
            history.push('/game/over');
        }
    };

    return (
        <div>
            <Timer />
            <QuestionChoices
                gameType={gameType}
                questionChoices={questionsAnswers[turnData.currentQuestionIndex]}
                handleAnswer={handleAnswer}
                handleAnswerSubmission={handleAnswerSubmission}
                answers={{ ans1: turnData.ans1, ans2: turnData.ans2 }}
            />
            <StatusBar
                score={currentScore}
                questionNumber={turnData.currentQuestionIndex + 1}
                totalQuestions={questionsAnswers.length}
            />
        </div>
    );
};

export default Game;
