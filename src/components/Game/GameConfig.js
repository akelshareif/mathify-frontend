import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { createNewGame, resetGame } from '../../actions';

const GameConfig = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [configData, setConfigData] = useState({
        difficulty: 'easy',
        gameType: 'add',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setConfigData((config) => ({
            ...config,
            [name]: value.toLowerCase(),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(resetGame());
        dispatch(createNewGame(configData));
        history.push('/game/play');
    };

    return (
        <div className="mt-4">
            <div className="text-center my-3">
                <i className="fas fa-calculator" style={{ fontSize: '4rem' }}></i>
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

                                <Button className="mt-2" type="submit" size="lg" block>
                                    Start Game
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default GameConfig;
