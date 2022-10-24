import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt="Horned Beast" title="Beast Img"/>
        <p>{this.props.desc}</p>
      </article>

    );
  }
}

export default HornedBeast;