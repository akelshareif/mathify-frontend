import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Prompt from './Prompt';
import NumberCard from './NumberCard';

const QuestionChoices = ({ gameType, questionChoices, handleAnswer, handleAnswerSubmission, answers }) => {
    if (!questionChoices) {
        return <div>Loading...</div>;
    }

    return (
        <div className="my-4">
            <Row>
                <Col>
                    <Prompt gameType={gameType} question={questionChoices.question} />
                </Col>
            </Row>
            <hr className="my-4" />

            <Row className="justify-content-center">
                {questionChoices.choices.map((choice) => (
                    <Col key={choice} xs="4">
                        <NumberCard contents={choice} setAnswer={handleAnswer} answers={answers} />
                    </Col>
                ))}
            </Row>

            {answers.ans1 >= 0 && answers.ans2 >= 0 ? (
                <Row className="justify-content-center mt-4">
                    <Col md="8">
                        <Button size="lg" color="info" onClick={handleAnswerSubmission} block>
                            Submit
                        </Button>
                    </Col>
                </Row>
            ) : null}
        </div>
    );
};

export default QuestionChoices;
