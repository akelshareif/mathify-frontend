import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

const Prompt = ({ gameType, question }) => {
    const getOperationIcon = () => {
        switch (gameType) {
            case 'add':
                return <i className="fas fa-plus align-middle"></i>;
            case 'subtract':
                return <i className="fas fa-minus align-middle"></i>;
            case 'multiply':
                return <i className="fas fa-times align-middle"></i>;
            case 'divide':
                return <i className="fas fa-divide align-middle"></i>;
            default:
                return 'No Game Type Selected';
        }
    };

    return (
        <Card>
            <CardBody>
                <Row className="justify-content-center text-center">
                    <Col md="3">
                        <h1>? &nbsp; {getOperationIcon()} &nbsp; ?</h1>
                    </Col>
                    <Col md="1">
                        <h1>=</h1>
                    </Col>
                    <Col md="3">
                        {question.length > 1 ? (
                            <h1>
                                {question[0]} &nbsp; r &nbsp; {question[1]}
                            </h1>
                        ) : (
                            <h1>{question[0]}</h1>
                        )}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Prompt;
