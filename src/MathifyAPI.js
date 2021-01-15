import axios from 'axios';

class MathifyAPI {
    static async request(endpoint, paramsOrData = {}, verb = 'get') {
        console.debug('API Call:', endpoint, paramsOrData, verb);

        try {
            return await axios({
                method: verb,
                // url: `http://localhost:3001/${endpoint}`,
                url: `https://mathify.herokuapp.com/${endpoint}`,
                [verb === 'get' ? 'params' : 'data']: paramsOrData,
            });
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        } catch (e) {
            console.error('API Error:', e);
        }
    }

    static async register({ firstName, lastName, username, password }) {
        try {
            const { data } = await this.request('auth/register', { firstName, lastName, username, password }, 'post');

            return data.token;
        } catch (e) {
            return { err: 'Username is already taken' };
        }
    }

    static async authenticate({ username, password }) {
        try {
            const { data } = await this.request('auth/login', { username, password }, 'post');

            return data.token;
        } catch (e) {
            return { err: 'Incorrect Username or Password' };
        }
    }

    static async newGame({ difficulty, gameType }) {
        const gameData = await this.request(
            'mathify/new',
            { difficulty, gameType, _token: localStorage.getItem('_token') },
            'post'
        );
        return gameData.data;
    }

    static async checkAnswer({ gameType, ans1, ans2, question }) {
        const isCorrect = await this.request(
            'mathify/answer',
            { gameType, ans1, ans2, question, _token: localStorage.getItem('_token') },
            'post'
        );
        return isCorrect.data;
    }

    static async checkHighScore(gameID, currentScore) {
        const isHighScore = await this.request(
            'mathify/gameover',
            { gameID, currentScore, _token: localStorage.getItem('_token') },
            'post'
        );
        return isHighScore.data;
    }

    static async getLeaderboard({ gameType, difficulty }) {
        const leaderboard = await this.request(
            'mathify/leaderboard',
            { gameType, difficulty, _token: localStorage.getItem('_token') },
            'post'
        );
        return leaderboard.data;
    }

    static async getCurrentUser(token) {
        const user = await this.request('mathify/user', { _token: token });
        return user.data;
    }

    static async deleteCurrentUser(token) {
        try {
            await this.request('mathify/delete', { _token: token }, 'post');
            return true;
        } catch (e) {
            return false;
        }
    }
}

export default MathifyAPI;
