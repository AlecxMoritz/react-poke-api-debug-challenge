import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import SearchBar from './Components/UI/SearchBar';
import PokemonDisplay from './Components/PokemonDisplay/PokemonDisplay';

function App() {
  const [ pokemon, setPokemon ] = useState(undefined); 
  const [ species, setSpecies ] = useState(undefined); 

  const storeSpecies = (searchResult) => {
    setSpecies(searchResult);
    console.log(searchResult)
  }

  const storePokemon = (searchResult) => {
    setPokemon(searchResult);
    console.log(searchResult);
  }

  return (
    <React.Fragment>
      <Container fluid={ true } >
        <Row>
          <Col xs="12">
            <h1>PokeAPI</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <SearchBar storeSpecies={ storeSpecies } storePokemon={ storePokemon } />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <PokemonDisplay pokemon={ pokemon } species={ species } />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;