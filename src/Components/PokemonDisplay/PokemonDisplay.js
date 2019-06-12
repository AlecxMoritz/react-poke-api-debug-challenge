import React from 'react';
import PokemonData from './PokemonData';

const PokemonDisplay = (props) => {
    if(props.pokemon && props.species) {
        return (
            <PokemonData pokemon={ props.pokemon } species={ props.species } />
        );
    } else {
        return (
            <p>Search for your favorite pokemon!</p>
        )
    }
};

export default PokemonDisplay;