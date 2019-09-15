import React, { Component } from 'react'

export default class CatList extends Component {
  renderCats = () => {
    return this.props.catPics.map(pic => {
      return <img key={pic.id} src={pic.url} alt="catPic" />
    })
  }

  render(){
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}
