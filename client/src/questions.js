import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Form,
    Col,
    Row,
    Card,
    Container
    } from 'react-bootstrap';
import happy from './assets/smiling.png'
import sad from './assets/sad.png'
import './questions.css'
import axios from "axios";

class Questions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "",
        tags : {
          "sad": false,
          "happy": false,
        }
      }
      this.handleClickImage = this.handleClickImage.bind(this)
      this.handleMessageChange = this.handleMessageChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleMessageChange = e => {
      this.setState(()=>{
        return {
          message : e.target.value,
        }
      })
    }

    handleClickImage = (tag) => {
      console.log('image was chicaskdasjhdakj');
      this.setState((prev)=>{
        prev.tags[tag] = !prev.tags[tag];
        console.log(prev);
        return {
          tag : prev.tags,
        }
      })
    }

    handleSubmit = () => {
      // const check = k => object[k] === true;
      

      let trueKeys = Object.keys(this.state.tags).filter(k => this.state.tags[k]);
      console.log(trueKeys)
      axios.post('/api/postmessage', {
        message: this.state.message,
        tags: trueKeys,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    
    render() {
      return (
        <Container id="main">
          <Row id="line">
          <Col sm='2'/>
          <Col id>
            <Row className="g-2">
              <Col sm='2'/>
              <Col >
              <Card border={(this.state.tags["happy"])?"primary":"light"} onClick = {()=>this.handleClickImage("happy")}>
                <Card.Img  variant="top" src={happy} />
                <Card.Body>
                    <Card.Title className='cen'>Speed is OK!</Card.Title>
                </Card.Body>
              </Card>
              </Col>
              <Col sm='1'/>
              <Col >
              <Card border={(this.state.tags["sad"])?"primary":"light"} onClick={()=>this.handleClickImage("sad")} >
                <Card.Img  variant="top" src={sad} />
                <Card.Body>
                    <Card.Title className='cen' >Slow Down!</Card.Title>
                </Card.Body>
              </Card>
              </Col>
              <Col sm='2'/>
            </Row>
            <Form onSubmit={e=>{e.preventDefault();this.handleSubmit()}}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Col id="spacing"></Col>

                <Form.Label>Write your questions here</Form.Label>
                <Form.Control as="textarea" rows={3} value={this.state.message} onChange={this.handleMessageChange}  />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit Question
              </Button>
            </Form>
          </Col>
          <Col sm='2'/>
          </Row>
        </Container>
      );
    }
  }
  


  export default Questions;

