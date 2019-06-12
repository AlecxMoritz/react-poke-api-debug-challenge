import React, { useState } from 'react';
import MoveRow from './MoveRow';
import { Table, Button } from 'reactstrap';

const buttonRowStyles = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space between'
}

const buttonStyles = {
    margin : '1em 1em'
}

const Moves = (props) => {
    const [ type, setType ] = useState('level-up');

    return (
        <React.Fragment>
            <h3>Possible Moves</h3>
            <div style={ buttonRowStyles }>
                <Button style={ buttonStyles } onClick={(e) => setType('level-up')}>By Level</Button>
                <Button style={ buttonStyles } onClick={(e) => setType('egg')}>Egg Moves</Button>
                <Button style={ buttonStyles } onClick={(e) => setType('machine')}>Machine Learned</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Level</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.moves.filter(move => move.version_group_details[0].move_learn_method.name === type).map((move, index) => (
                            <MoveRow key={ index } move={ move } /> 
                        ))
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
};

export default Moves;