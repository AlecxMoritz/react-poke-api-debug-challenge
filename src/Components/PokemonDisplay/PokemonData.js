import React from 'react';
import Sprite from './DataDisplays/Sprite';
import Name from './DataDisplays/Name';
import Genera from './DataDisplays/Genera';
import FlavorText from './DataDisplays/FlavorText';
import Habitat from './DataDisplays/Habitat';
import BaseStats from './DataDisplays/BaseStats';
import Moves from './DataDisplays/Moves';
import { 
    Row, 
    Col,
    Container
} from 'reactstrap';

const PokemonData = (props) => {
    // let moves = props.pokemon.moves.filter(move => move.version_group_details[0].move_learn_method.name === 'level-up');

    return (
        <Container fluid={ true }>
            <Row>
                <Col xs="8">
                    {/* general info */}
                    <Sprite image={ props.pokemon.sprites.front_default } />
                    <Name name={ props.species.names[2].name } />
                    <Genera genera={ props.species.genera[2].genus }/>
                    <FlavorText flavorText={ props.species.flavor_text_entries[2].flavor_text } />
                    <Habitat habitat={ props.species.habitat.name } />
                </Col>
                <Col xs="4">
                    <BaseStats stats={ props.pokemon.stats } />
                </Col>
            </Row>
            <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                    <Moves moves={ props.pokemon.moves } />
                </Col>
                <Col xs="2"></Col>
            </Row>
        </Container>
    );
};

export default PokemonData;