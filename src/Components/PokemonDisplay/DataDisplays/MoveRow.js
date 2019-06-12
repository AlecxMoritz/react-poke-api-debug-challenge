import React from 'react';

const MoveRow = (props) => {
    let name = props.move.move.name;
    let displayName = name[0].toUpperCase() + name.slice(1);
    
    let versionGroup = props.move.version_group_details[0];
    let method = versionGroup.move_learn_method.name;
    let displayMethod = method[0].toUpperCase() + method.slice(1);
    
    let level = versionGroup.level_learned_at;

    return (
        <tr>
            <td>{ displayName }</td>
            <td>{ level }</td>
        </tr>
    );
};

export default MoveRow;