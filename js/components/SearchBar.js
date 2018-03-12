import React, { Component } from 'react';

export default ({users, update, searchStr}) => {
  
 let search = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = users.filter(user => {
      return user.name.toLowerCase().includes(value);
    });

    update({
      usersList: filter,
      activeUser: 0,
      searchText: value
    });
  }

    return (
      <div className="row search-bar">
        <div className="col-md-12">
          <input type="search" value={searchStr} 
                className="form-control" onChange={search} placeholder="Search" />
        </div>
      </div>
    );
  }
