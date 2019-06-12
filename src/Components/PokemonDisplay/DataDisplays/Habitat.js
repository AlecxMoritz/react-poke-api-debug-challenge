import React from 'react';

const Habitat = (props) => {
    let habitat = props.habitat[0].toUpperCase() + props.habitat.slice(1);
    return (
        <p>Habitat : { habitat }</p>
    );
};

export default Habitat;