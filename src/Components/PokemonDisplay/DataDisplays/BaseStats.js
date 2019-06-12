import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const BaseStats = (props) => {
    return (
        <React.Fragment>
            <h3>Base Stats</h3>
            <ListGroup>
                {
                    props.stats.map((stat, index) => {
                        let name = stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1);
                        return (
                            <ListGroupItem key={ index }>
                                { name + ' : ' + stat.base_stat }
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        </React.Fragment>
    )
}

export default BaseStats;