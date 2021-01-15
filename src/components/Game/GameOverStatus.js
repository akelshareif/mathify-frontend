import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import GameStats from './GameStats';

const GameOverStatus = ({ title, message, currentScore, numQuestions }) => {
    return (
        <div className="text-center">
            <h1 className="display-3 my-3">{title}</h1>
            <Card>
                <CardBody>
                    <h3 className="mb-2">{message}</h3>
                    <h3 className="mb-4">
                        You scored {currentScore} out of {numQuestions}!
                    </h3>
                    <GameStats />
                    <Row>
                        <Col md="6" className="mb-3">
                            <Button tag={Link} to="/game/new" size="lg" color="success" block>
                                Start New Game
                            </Button>
                        </Col>
                        <Col md="6" className="mb-3">
                            <Button tag={Link} to="/leaderboards" size="lg" color="info" block>
                                See Leaderboards
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};

export default GameOverStatus;
