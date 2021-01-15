import React from 'react';
import { Row, Col } from 'reactstrap';
import AuthForm from './AuthForm';

const AuthPage = () => {
    return (
        <Row className="justify-content-center mt-3">
            <Col md="8">
                <div className="text-center mt-3">
                    <i className="fas fa-calculator" style={{ fontSize: '4rem' }}></i>
                </div>
                <h4 className="text-center my-3">A Fun, Fast-Paced Number Game</h4>
                <AuthForm />
            </Col>
        </Row>
    );
};

export default AuthPage;
