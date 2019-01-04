import React, { Component } from 'react';
import Form_Data from "./component/ui/Form_Data";

import {Navbar,NavbarBrand} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return <div>
            <Navbar color="danger" light expand="md">
              <NavbarBrand className="text-white">
                React App
              </NavbarBrand>
            </Navbar>
            <div className="container ">
                <Form_Data />
            </div>
          </div>;
        }
    }

    export default App;