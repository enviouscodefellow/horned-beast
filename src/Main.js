import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {

    let hornedBeasts = [];

    data.forEach((beast)=>{
      hornedBeasts.push(
        <HornedBeast
        name={beast.title}
        img={beast.image_url}
        desc={beast.description}
        key={beast._id}
        />
      )
      
    })
    console.log(hornedBeasts);

    return (
      <>
        <main>
          {hornedBeasts}
        </main>
      </>
    );
  }
}

export default Main;
