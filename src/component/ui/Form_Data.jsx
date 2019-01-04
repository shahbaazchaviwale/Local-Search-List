import React, { Component } from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import { Alert,Jumbotron,Col,InputGroup,InputGroupAddon,Input,Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import Main from './Main';
export default class Form_Data extends Component {
  
  state = { newText: "" };
   // ============================== bootstrap function.
  onDismiss = () => { this.setState({ visible: false });}

  submitHandler = (evt) => {
      
      evt.preventDefault();
      if(this.state.newText === ''){
        
      }else{
        this.props.pass_props_method(this.state.newText);
        this.setState({ newText: '' });
      }
      
      
  }

  getTextBoxHandler = (evt) => {
      this.setState({ newText: evt.target.value });
  }
                
render() {
                   return <Jumbotron fluid>
                       <Col sm="12" md={{ size: 8, offset: 2 }}>
                         <form onSubmit={this.submitHandler}>
                           <InputGroup>
                           <Input placeholder="Add data here ..." type="text"  
                           name="newText" value={this.state.newText} 
                           onChange={this.getTextBoxHandler} className="text-upper-case"
                           autoComplete="off" />
                             <InputGroupAddon addonType="append">
                               <Button color="danger">
                                 <FaSearch />
                               </Button>
                             </InputGroupAddon>
                           </InputGroup>
                         </form>
                       </Col>
                       <br />

                     <Main/>
                     </Jumbotron>;
                 }
}