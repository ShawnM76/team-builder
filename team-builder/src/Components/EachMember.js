import React from 'react';

function EachMember ({person}) {
   
    return (
        <div>
            <h2>Name: {person.Name}</h2>
            <div>Email: {person.Email}</div>
            <div>Role in Company: {person.Role}</div>
        </div>
    );
}

export default EachMember;