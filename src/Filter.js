import React from 'react';
import Form from 'react-bootstrap/Form';
    
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numHorns: '',
        }
    }

    handleSelect = (event) => {
        let numHorns = Number(event.target.value);
        this.setState({
            numHorns 
        })
        this.props.setSelectedNumOfHorns(numHorns);
    }

    render() {
        let horns = [-1, 1, 2, 3, 100];
        let filter = horns.map((element, index)=> {
            return <option value={element} key={index}>{element}</option>
            });
        return (
            <Form>
                <Form.Label>Select Horns Filter
                    <Form.Select name="num of horns" onChange={this.handleSelect}>
                        {filter}
                    </Form.Select>
                </Form.Label>
            </Form>
        )
    }
}

export default Filter;