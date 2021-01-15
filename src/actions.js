import MathifyAPI from './MathifyAPI';

// ********* Thunk action creators ***************
export const createNewGame = (gameConfig) => {
    return async (dispatch) => {
        try {
            const gameData = await MathifyAPI.newGame(gameConfig);
            dispatch(createdNewGame(gameData));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const checkAnswer = (data) => {
    return async (dispatch) => {
        try {
            const { isCorrect } = await MathifyAPI.checkAnswer(data);
            dispatch(checkedAnswer(isCorrect));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

// ********* Basic action creators ***************
export const loadUser = (token) => {
    return {
        type: 'ADD_USER',
        token,
    };
};

export const resetGame = () => {
    return {
        type: 'RESET_GAME',
    };
};

export const clearData = () => {
    return {
        type: 'RESET',
    };
};

const createdNewGame = (gameData) => {
    return {
        type: 'ADD_GAME',
        gameID: gameData._id,
        gameType: gameData.gameType,
        difficulty: gameData.difficulty,
        duration: gameData.duration,
        questionsAnswers: gameData.questionsAnswers,
    };
};

const checkedAnswer = (isCorrect) => {
    return {
        type: 'CHECK_ANSWER',
        isCorrect,
    };
};
