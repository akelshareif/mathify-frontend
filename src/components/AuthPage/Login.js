import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Alert, Card, CardTitle, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import MathifyAPI from '../../MathifyAPI';
import { loadUser } from '../../actions';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState({
        isHidden: false,
        msg: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await MathifyAPI.authenticate(formData);
        if (data.hasOwnProperty('err')) {
            setError((err) => ({
                isHidden: !err.isHidden,
                msg: data.err,
            }));
        } else {
            localStorage.setItem('_token', data);
            dispatch(loadUser(data));
            history.push('/dashboard');
        }
    };

    return (
        <div>
            <Row className="justify-content-center mt-3">
                <Col md="8">
                    <div className="text-center mt-3">
                        <i className="fas fa-calculator" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h4 className="text-center my-3">A Fun, Fast-Paced Number Game</h4>
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3" className="text-center mb-3">
                                Login
                            </CardTitle>
                            {error.isHidden ? (
                                <Alert color="danger" className="text-center">
                                    {error.msg}
                                </Alert>
                            ) : null}
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        onChange={handleChange}
                                        bsSize="lg"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        bsSize="lg"
                                        required
                                    />
                                </FormGroup>
                                <Button type="submit" color="success" size="lg" block>
                                    Login
                                </Button>
                            </Form>
                            <Row className="my-2">
                                <Col>
                                    <hr />
                                </Col>
                                <Col xs="6" className="text-center text-muted">
                                    <small>Don't Have An Account?</small>
                                </Col>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                            <Button tag={Link} to="/" className="text-center" color="info" size="lg" block>
                                Sign Up
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
