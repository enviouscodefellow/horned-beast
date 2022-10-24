import React from "react";

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hearts: 0,
      favorite: false
    };
  };

  handleLove = () => {
    this.setState({
    hearts: this.state.hearts + 1
    });
  }

  render(){
    return(
      <article>
        <h2>{this.props.name}</h2>
        <p>{this.state.hearts}💓</p>
        <p onClick={this.handleLove}>Give some love! 💓</p>
        <img src={this.props.img} alt={this.props.name} title={this.props.desc}/>
        <p>{this.state.favorite}</p>
        <p>{this.props.desc}</p>
      </article>

    );
  }
}

export default HornedBeast;