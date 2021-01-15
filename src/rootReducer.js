const INITIAL_STATE = {
    token: '',
    currentGameID: '',
    currentScore: 0,
    gameType: '',
    difficulty: undefined,
    duration: undefined,
    questionsAnswers: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                token: action.token,
            };

        case 'ADD_GAME':
            return {
                ...state,
                currentGameID: action.gameID,
                gameType: action.gameType,
                difficulty: action.difficulty,
                duration: action.duration,
                questionsAnswers: action.questionsAnswers,
            };

        case 'CHECK_ANSWER':
            if (action.isCorrect) {
                return {
                    ...state,
                    currentScore: state.currentScore + 1,
                };
            } else {
                return state;
            }

        case 'RESET_GAME':
            return {
                ...INITIAL_STATE,
                token: state.token,
            };

        case 'RESET':
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default rootReducer;
