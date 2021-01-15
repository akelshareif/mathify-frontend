import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

const NumberCard = ({ contents, setAnswer, answers }) => {
    const handleClick = () => {
        setAnswer(contents);
    };

    return (
        <Card
            className="mb-2"
            onClick={handleClick}
            color={answers.ans1 === contents || answers.ans2 === contents ? 'success' : ''}
        >
            <CardBody>
                <Row className="justify-content-center">
                    <Col>
                        <h1
                            className={`text-center ${
                                answers.ans1 === contents || answers.ans2 === contents ? 'text-light' : ''
                            }`}
                        >
                            {contents}
                        </h1>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default NumberCard;
