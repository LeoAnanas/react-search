import React, { Component } from 'react';

export default ({user, update, index}) => {
    let changeActive= active => update({activeUser: index})
    return (
      <tr onClick={changeActive}>
        <td><img src={`images/${user.image}.svg`}/></td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
      </tr>
    );
}
