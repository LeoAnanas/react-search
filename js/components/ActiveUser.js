import React from 'react';

export default({usersList, active}) =>{
  let user = usersList[active];

    return (
      <div className="col-md-3">
          <div className="thumbnail">
            <img src={`images/${user.image}.svg`} />
      
            <div className="thumbnail-caption">
              <h3>{user.name}</h3>
              <table className="user-info table table-responsive">
                <tbody>
                  <tr>
                    <td>Age:</td>
                    <td>{user.age}</td>
                  </tr>
                  <tr>
                    <td>Favorite animal:</td>
                    <td>{user.image}</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>8 {user.phone}</td>
                  </tr>
                </tbody>
              </table>
      
              <p><b>Favorite phrase:</b> {user.phrase}</p>
            </div>
          </div>
        </div>
    );
  }
