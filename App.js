import React, { Component } from 'react';
import './App.css';
import './components/postList.css';
import PostList from './components/postList';
import { connect } from 'react-redux';
import history from './history';
import fillDetails from './allactions/postactions';


class Main extends Component {
  handleSubmit = e => {
    e.preventDefault();
    alert("Enter your Details");
    history.push("submit")
  }
  render() {
    return (
      <div className="main">
        <header className="App">
          USER MANAGEMENT SYSTEM
        </header>
        <button onClick={e => this.handleSubmit(e)} className="button">REGISTER HERE</button>
        <h1 className="List">LIST OF USERS</h1>
        <PostList data={this.props.keycloak} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    keycloak: state.loginReducer,
});
const mapDisptachToProps = dispatch => {
  return ({
      fillDetails: (dataform) => { dispatch(fillDetails(dataform)) }
  })
}
export default connect(mapStateToProps,mapDisptachToProps)(Main);
