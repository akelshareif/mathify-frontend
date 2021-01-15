import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Form, FormGroup, Input, Col, Row, Button, Card, CardTitle, CardBody } from 'reactstrap';
import MathifyAPI from '../../MathifyAPI';
import { loadUser } from '../../actions';

const AuthForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        const data = await MathifyAPI.register(formData);
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
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h3" className="text-center mb-3">
                    Sign Up
                </CardTitle>
                {error.isHidden ? (
                    <Alert color="danger" className="text-center">
                        {error.msg}
                    </Alert>
                ) : null}
                <Form className="mb-2" onSubmit={handleSubmit}>
                    <Row form>
                        <Col md="6">
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    bsSize="lg"
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    bsSize="lg"
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
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
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
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
                        </Col>
                    </Row>
                    <Row form>
                        <Col>
                            <Button type="submit" color="success" size="lg" block>
                                Create Account
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="mb-2">
                    <Col>
                        <hr />
                    </Col>
                    <Col xs="6" className="text-center text-muted">
                        <small>Have An Account?</small>
                    </Col>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Button tag={Link} to="/login" className="text-center" color="info" size="lg" block>
                    Login
                </Button>
            </CardBody>
        </Card>
    );
};

export default AuthForm;
