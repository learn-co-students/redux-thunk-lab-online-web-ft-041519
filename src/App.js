import React, { Component } from 'react';
import {fetchCats} from './actions/catActions.js'
import { connect } from 'react-redux';
import CatList from './CatList'


class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats()
  }

  loadingObject = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading Objects...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }


  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.loadingObject()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchCats})(App)

