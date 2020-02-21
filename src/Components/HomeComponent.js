import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render() {
        return(
            <Button color="danger">Danger!</Button>
        );
    };
}

export default Home;