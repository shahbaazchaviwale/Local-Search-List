import React, { Component } from "react";
import FormData from "./Form_Data";
// Ui libraries
import { Table, Button, Alert } from "reactstrap";
import {  FaWindowClose } from "react-icons/fa";

export default class Main extends Component{
    // ============================DATA DECLARATION
    state = { data_list: [],  visible: true, remove_msg : ''};
    
    // ============================== bootstrap function.
    onDismiss = () => {
    this.setState({ visible: false });
  }

    // ============================FUNCTION DECLARATION
    

 

  render(){       
        return <div>
            <Table>
              <thead>
               
              </thead>
              <tbody>
                
              </tbody>
            </Table>
          </div>;
    }
}