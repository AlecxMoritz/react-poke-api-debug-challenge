import React, { useState } from 'react';
import {
    Input,
    Label,
    Form
} from 'reactstrap';

const BASEURL = 'https://pokeapi.co/api/v2/pokemon';

const searchStyles = {
    marginBottom : '2em'
}

const SearchBar = (props) => {
    const [ search, setSearch ] = useState('');

    const handleSubmit = (event) => {
        
        event.preventDefault();
        let speciesUrl = BASEURL + '-species/' + search;
        let pokemonUrl = BASEURL + '/' + search;

        fetch(speciesUrl)
            .then(res => res.json())
            .then(data => {
                props.storeSpecies(data)

                fetch(pokemonUrl)
                    .then(res => res.json())
                    .then(data => {
                        props.storePokemon(data)
                        setSearch('');
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    };

    return (
        <React.Fragment>
            <Form onSubmit={(e) => handleSubmit(e)} style={ searchStyles }>
                <Label>Search for a Pokemon!</Label>
                <Input type="text" name="search" value={ search } onChange={(e) => setSearch(e.target.value)} />
            </Form>
        </React.Fragment>
    );
};

export default SearchBar;