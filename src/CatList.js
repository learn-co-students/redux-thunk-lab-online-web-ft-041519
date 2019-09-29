import React, { Component } from 'react';

class CatList extends Component {   

  render() {
      return (
      <div>
          {this.props.catPics.map((info) => (<img src={info.url}></img>))}
      </div>
      )
  }

}

export default CatList