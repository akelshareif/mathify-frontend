import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Timer = () => {
    const intervalID = useRef();
    const history = useHistory();
    const duration = useSelector((state) => state.duration);

    const [seconds, setSeconds] = useState();

    // Initialize state timer
    useEffect(() => {
        setSeconds(duration);
    }, [duration]);

    // Handle countdown
    useEffect(() => {
        intervalID.current = setInterval(() => {
            setSeconds((s) => s - 1);
        }, 1000);

        return () => clearInterval(intervalID.current);
    }, []);

    // Handle game over
    useEffect(() => {
        if (seconds === 0) {
            clearInterval(intervalID.current);
            history.push('/game/over');
        }
    }, [seconds, history]);

    return (
        <div className="mt-2">
            <Row className="text-center">
                <Col>
                    <b style={{ fontSize: '1.3rem' }}>Timer </b>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <p style={{ fontSize: '1.2rem' }}>{seconds}s</p>
                </Col>
            </Row>
        </div>
    );
};

export default Timer;
