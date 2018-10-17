import React from "react"
import "./hello.scss"

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1> 👋 Webpack Configuration Demonstration </h1>
        <p className="note"> Hover over the images to see the link or a base-64 data-encoded string</p>
      </div>
    )
  }
}

export default Hello
