import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let animals = this.props.data.map((beast, index) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
          horns={beast.horns}
          handleOpenModal={this.props.handleOpenModal}
        />
      );
    });

    let filteredAnimals = animals;
    if (this.props.selectedNumOfHorns !== -1) {
      filteredAnimals = animals.filter(
        (element) => element.props.horns === this.props.selectedNumOfHorns
      );
    }

    return (
      <>
        <Container fluid>
          <Row>{filteredAnimals}</Row>
        </Container>
      </>
    );
  }
}

export default Main;
