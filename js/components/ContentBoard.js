import React from 'react';
import ActiveUser  from './ActiveUser';
import UserList  from './UserList';
export default({state, update}) =>{

  return(
    <div className="row">    
        {state.usersList.length>0 ? 
        <div>     
            <UserList usersList={state.usersList} update={update.bind(this)}/>
            <ActiveUser usersList={state.usersList} active={state.activeUser} />
        </div> :
        <div className="col-md-12"><p>Nothing found</p></div>
        }
    </div>
  )
}