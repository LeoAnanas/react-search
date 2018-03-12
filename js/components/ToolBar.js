import React, { Component } from 'react';

export default ({users, sorted, update, initialData}) => {
  
  let sort = (field) => {
    let direction = sorted[field] || 1;
    sorted[field] = -direction;
    let sortedUsers = users.sort((a,b) => {
      if (a[field] > b[field]) return direction
      if (a[field] < b[field]) return -direction
      return 0
    })

    update({
      usersList: sortedUsers,
      sorted: sorted,
      activeUser: 0
    });
  }

  let refresh = ()=>{
    update({
      usersList: initialData,
      activeUser: 0,
      searchText: ''
    });
  } 

    return (
      <div className="row tool-bar">
      <div className="col-md-12">
        <button type="button" onClick={refresh} className="btn btn-danger all">All</button>
        <button type="button" onClick={sort.bind(this, 'name')} className="btn btn-default sort name">
        <i className="fa fa-sort-numeric-desc"/>
        <span>Sort by name</span></button>
        <button type="button" onClick={sort.bind(this, 'age')} className="btn btn-default sort age">
        <i className="fa fa-sort-numeric-desc"/><span>Sort by age</span></button>
      </div>
    </div>
    );
}
