import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        let animals = this.props.data.map((beast, index) => {
            return <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                key={beast._id}
                handleOpenModal={this.props.handleOpenModal}
            />
        });


        return (
            <>
                <Container fluid>
                    <Row>
                    {animals}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;