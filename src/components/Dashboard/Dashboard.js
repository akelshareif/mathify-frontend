import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Table, Card, CardHeader, CardBody, Button } from 'reactstrap';
import MathifyAPI from '../../MathifyAPI';
import { clearData } from '../../actions';

const Dashboard = ({ token }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [currUser, setCurrUser] = useState(undefined);

    useEffect(() => {
        const getUser = async () => {
            const user = await MathifyAPI.getCurrentUser(token);
            setCurrUser(user.user);
        };

        getUser();
    }, [token]);

    const handleDelete = async () => {
        await MathifyAPI.deleteCurrentUser(token);
        dispatch(clearData());
        history.push('/');
    };

    if (!token || !currUser) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Row className="justify-content-center my-3">
                <Col md="8">
                    <Card>
                        <CardHeader>
                            <Row className="justify-content-between">
                                <Col md="5" className="align-content-center">
                                    <h4 className="mt-1">Account Information</h4>
                                </Col>
                                <Col md="4">
                                    <Button color="danger" onClick={handleDelete} block>
                                        Delete Account
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center">
                                <Col>
                                    <b>Name</b>
                                </Col>
                                <Col>
                                    <p className="text-capitalize">{`${currUser.firstName.toLowerCase()} ${currUser.lastName.toLowerCase()}`}</p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col>
                                    <b>Username</b>
                                </Col>
                                <Col>
                                    <p>{currUser.username}</p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col>
                                    <b>Total Games Played</b>
                                </Col>
                                <Col>
                                    <p>{currUser.gamesPlayed.length}</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center my-3">
                <Col md="8">
                    <Card>
                        <CardHeader>
                            <h4 className="mt-1">Your Game Stats</h4>
                        </CardHeader>
                        <Table size="sm" className="text-center">
                            <thead>
                                <tr>
                                    <th>Game Type</th>
                                    <th>Difficulty</th>
                                    <th>Highest Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-primary">
                                    <td>Add</td>
                                    <td>Easy</td>
                                    <td>{currUser.highScores.add.easy || 'Not Played'}</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>Add</td>
                                    <td>Medium</td>
                                    <td>{currUser.highScores.add.medium || 'Not Played'}</td>
                                </tr>
                                <tr className="table-primary">
                                    <td>Add</td>
                                    <td>Hard</td>
                                    <td>{currUser.highScores.add.hard || 'Not Played'}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr className="table-info">
                                    <td>Subtract</td>
                                    <td>Easy</td>
                                    <td>{currUser.highScores.subtract.easy || 'Not Played'}</td>
                                </tr>
                                <tr className="table-info">
                                    <td>Subtract</td>
                                    <td>Medium</td>
                                    <td>{currUser.highScores.subtract.medium || 'Not Played'}</td>
                                </tr>
                                <tr className="table-info">
                                    <td>Subtract</td>
                                    <td>Hard</td>
                                    <td>{currUser.highScores.subtract.hard || 'Not Played'}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr className="table-success">
                                    <td>Multiply</td>
                                    <td>Easy</td>
                                    <td>{currUser.highScores.multiply.easy || 'Not Played'}</td>
                                </tr>
                                <tr className="table-success">
                                    <td>Multiply</td>
                                    <td>Medium</td>
                                    <td>{currUser.highScores.multiply.medium || 'Not Played'}</td>
                                </tr>
                                <tr className="table-success">
                                    <td>Multiply</td>
                                    <td>Hard</td>
                                    <td>{currUser.highScores.multiply.hard || 'Not Played'}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr className="table-warning">
                                    <td>Divide</td>
                                    <td>Easy</td>
                                    <td>{currUser.highScores.divide.easy || 'Not Played'}</td>
                                </tr>
                                <tr className="table-warning">
                                    <td>Divide</td>
                                    <td>Medium</td>
                                    <td>{currUser.highScores.divide.medium || 'Not Played'}</td>
                                </tr>
                                <tr className="table-warning">
                                    <td>Divide</td>
                                    <td>Hard</td>
                                    <td>{currUser.highScores.divide.hard || 'Not Played'}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
