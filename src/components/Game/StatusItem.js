import React from 'react';
import { Col } from 'reactstrap';

const StatusItem = ({ itemText, itemData }) => {
    return (
        <Col xs="3">
            <div className="text-center">
                <b>{itemText}</b>
            </div>
            <div className="text-center">
                <span>{itemData}</span>
            </div>
        </Col>
    );
};

export default StatusItem;
