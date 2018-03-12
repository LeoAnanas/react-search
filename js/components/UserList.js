import React, { Component } from 'react';
import UserData from './UserData'

export default ({usersList, update}) => {
    let users = usersList.map((user,i) => {
      return (<UserData user={user} index={i} key={i} update={update}/>)
    });

    return (
      <div className="col-md-9">
        <table className="table table-striped">
          <tbody>
            <tr><th>#</th><th>Name</th><th>Age</th><th>Phone</th></tr>
            {users}
          </tbody>
        </table>
      </div>
    );
}
