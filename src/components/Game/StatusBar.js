import React from 'react';
import { Row } from 'reactstrap';
import StatusItem from './StatusItem';

const StatusBar = ({ score, questionNumber, totalQuestions }) => {
    return (
        <div>
            <Row className="justify-content-between">
                <StatusItem itemText="Score" itemData={score} />
                <StatusItem itemText="Question" itemData={`${questionNumber} of ${totalQuestions}`} />
            </Row>
        </div>
    );
};

export default StatusBar;
