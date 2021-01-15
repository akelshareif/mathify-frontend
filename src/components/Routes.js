import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar/NavBar';
import AuthPage from './AuthPage/AuthPage';
import Login from './AuthPage/Login';
import Dashboard from './Dashboard/Dashboard';
import GameConfig from './Game/GameConfig';
import Game from './Game/Game';
import GameOver from './Game/GameOver';
import LeaderboardConfig from './Leaderboards/LeaderboardConfig';
import Leaderboard from './Leaderboards/Leaderboard';

const Routes = () => {
    const token = useSelector((state) => state.token);

    return (
        <Switch>
            <Route exact path="/">
                <Container>
                    <AuthPage />
                </Container>
            </Route>

            <Route exact path="/login">
                <Container>
                    <Login />
                </Container>
            </Route>

            {token ? (
                <>
                    <Route exact path="/dashboard">
                        <NavBar />
                        <Container>
                            <Dashboard token={token} />
                        </Container>
                    </Route>

                    <Route exact path="/game/new">
                        <NavBar />
                        <Container>
                            <GameConfig />
                        </Container>
                    </Route>

                    <Route exact path="/game/play">
                        <NavBar />
                        <Container>
                            <Game />
                        </Container>
                    </Route>

                    <Route exact path="/game/over">
                        <NavBar />
                        <Container>
                            <GameOver />
                        </Container>
                    </Route>

                    <Route exact path="/leaderboards">
                        <NavBar />
                        <Container>
                            <LeaderboardConfig />
                        </Container>
                    </Route>

                    <Route exact path="/leaderboards/:gameType/:difficulty">
                        <NavBar />
                        <Container>
                            <Leaderboard />
                        </Container>
                    </Route>
                </>
            ) : null}

            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
