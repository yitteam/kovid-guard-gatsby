import React from 'react'
import {Form, Button, Spinner} from 'react-bootstrap'
import axios from 'axios';


class CheckPhish extends React.Component {
    constructor(props) {
      super(props)
      this.state = { url: '', load: true, msg: '' }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
        this.setState({ url: event.target.value })
    }
    
    handleSubmit = async event => {
    this.setState({ msg: "Đang kiểm tra", load:false });
    var tobefetch = "http://localhost:5000/predict_json?url=" + this.state.url;
    //alert(tobefetch);
    fetch(tobefetch, { method: 'get', mode: 'cors' })
    .then(response => response.json())
    .then(data => {
    if (data.result == "safe"){
        this.setState({msg: "Website của bạn an toàn!" , load: true})
    }
    else if (data.result=="phishing"){
        this.setState({msg: "Trang web này có nguy cơ lừa đảo, nó không thuộc về: " + data.origin, load: true})
    }
    })      
    .catch(function (error) { alert(error) });
    event.preventDefault()
    }
    
    render() {
      return (
        <>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>URL to check</Form.Label>
            <Form.Control type="text" placeholder="Enter url" onChange={this.handleChange} value={this.state.url} />
            <Form.Text className="text-muted">
            {this.state.msg}
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Spinner animation="border" hidden={this.state.load}></Spinner>
        </Form>
        
        </>
        
      )
    }
  }

export default CheckPhish;