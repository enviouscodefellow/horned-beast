import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <main className='main-component'>
          <HornedBeast name="Test" img="https://www.bing.com/th?id=OP.F6XQ2rS2HMw%2fdw474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=2&c=17" desc='Test Desc'/>
          <HornedBeast name="Korbin" img="http://www.writeups.org/wp-content/uploads/Korben-Dallas-Fifth-Element-Bruce-Willis-a.jpg"desc='Meat Popsicle'/>
          <HornedBeast name="Bob"img="https://wallpapercave.com/wp/wp5735633.jpg"desc='Builder'/>
        </main>
      </>
    );
  }
}

export default Main;
