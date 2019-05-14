import React, {Component} from 'react';
import axios from 'axios';

class Portofolio extends Component {
    state = {
        prodaks: []
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/CptZeru/moccarootest/Product`)
          .then(res => {
            const prodaks = res.data;
            this.setState({ prodaks });
          })
    }
    render() {
        return (
            <div>
                <ul>
                    { this.state.prodaks.map(prodaks => <li>{prodaks.prodak_name}</li>)}
                </ul>
            </div>
        );
    }
}

export default Portofolio;
