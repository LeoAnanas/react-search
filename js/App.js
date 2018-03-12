import React, { Component } from 'react';
import ToolBar from './components/ToolBar';
import SearchBar from './components/SearchBar';
import ContentBoard from './components/ContentBoard';

export default class App extends Component {
  constructor(props){
    super(props);
    this.initialData = [];
    this.state = {
      usersList: null,
      activeUser: 0,
      sorted: {
        name: 0,
        age: 0
      },
      searchText: '',
      ready: false
    }
  }
  componentDidMount () {
    fetch('data.json')
      .then((data)=>data.json())
      .then((data)=>{
        this.initialData=data
        this.setState({ 
          usersList: this.initialData,
          ready: true 
        });
      });
  }

  updateData(newState){
    this.setState(newState);
  }

  render() {
    return (
      <div className="container-fluid app">
        <SearchBar update={this.updateData.bind(this)} users={this.initialData} 
                   searchStr={this.state.searchText}/>
        <ToolBar initialData={this.initialData} update={this.updateData.bind(this)} 
                 users={this.state.usersList} sorted={this.state.sorted}/>               
        {!this.state.ready ? 
          <div className="loader"/> :
          <ContentBoard state={this.state} update={this.updateData.bind(this)}/>
        }
      </div>
    );
  }
}
