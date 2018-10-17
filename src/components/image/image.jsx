import React from "react"

import "./image.scss"

class Image extends React.Component {
  render() {
    return (
      <div>
        <p className="caption">{this.props.caption}</p>
        <img src={this.props.src} alt={this.props.src} title={this.props.src} width="110"/>
      </div>
    )
  }
}

export default Image
