import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';

const LeaderboardConfig = () => {
    const history = useHistory();

    const [leaderboardConfig, setLeaderboardConfig] = useState({
        difficulty: 'easy',
        gameType: 'add',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLeaderboardConfig((config) => ({
            ...config,
            [name]: value.toLowerCase(),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push(`/leaderboards/${leaderboardConfig.gameType}/${leaderboardConfig.difficulty}`);
    };

    return (
        <div className="mt-4">
            <div className="text-center my-3">
                <i className="far fa-star" style={{ fontSize: '4rem' }}></i>
                <h2 className="my-3">Select A Leaderboard</h2>
            </div>
            <Row className="justify-content-center">
                <Col md="8">
                    <Card>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <Row className="justify-content-center text-center mt-2" form>
                                    <Col>
                                        <h4>Select A Game Type</h4>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Input type="select" name="gameType" bsSize="lg" onChange={handleChange}>
                                                <option>Add</option>
                                                <option>Subtract</option>
                                                <option>Multiply</option>
                                                <option>Divide</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center text-center mb-2" form>
                                    <Col>
                                        <h4>Select A Difficulty Level</h4>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Input type="select" name="difficulty" bsSize="lg" onChange={handleChange}>
                                                <option>Easy</option>
                                                <option>Medium</option>
                                                <option>Hard</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Button className="mt-2" type="submit" size="lg" color="info" block>
                                    Load Leaderboard
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeaderboardConfig;
