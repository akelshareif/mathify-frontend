import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, Table, Button } from 'reactstrap';
import MathifyAPI from '../../MathifyAPI';

const Leaderboard = () => {
    const { gameType, difficulty } = useParams();
    const [leaderboardData, setLeaderboardData] = useState(undefined);

    useEffect(() => {
        const getLeaderboard = async () => {
            const { leaderboard } = await MathifyAPI.getLeaderboard({ gameType, difficulty });
            setLeaderboardData(leaderboard);
        };
        getLeaderboard();
    }, [gameType, difficulty]);

    if (!leaderboardData) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="text-center my-3">
            <CardBody>
                <CardTitle tag="h1" className="text-center text-capitalize my-2">
                    {gameType} {difficulty} Leaderboard
                </CardTitle>
                {leaderboardData.length > 0 ? (
                    <Table striped responsive className="my-4">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Username</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((user, idx) => (
                                <tr key={user.username}>
                                    <td>{idx + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.highScore}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <div>
                        <h4 className="my-4 text-">No Scores Yet!</h4>
                    </div>
                )}

                <Row className="justify-content-center mt-3">
                    <Col md="5" className="mb-2">
                        <Button tag={Link} to="/game/new" color="success" size="lg" block>
                            Start New Game
                        </Button>
                    </Col>
                    <Col md="5" className="mb-2">
                        <Button tag={Link} to="/leaderboards" color="info" size="lg" block>
                            Select New Leaderboard
                        </Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Leaderboard;
