import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';

const GameStats = () => {
    const gameType = useSelector((state) => state.gameType);
    const difficulty = useSelector((state) => state.difficulty);

    return (
        <Table className="my-3" striped>
            <thead>
                <tr>
                    <th>Game Type</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-capitalize">{gameType}</td>
                    <td className="text-capitalize">{difficulty}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default GameStats;
