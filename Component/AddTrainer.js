import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col,Input,Button } from 'reactstrap';
import React, { useState } from "react";
import{ ReactComponent as Logo } from '../logo1.svg';
import{ ReactComponent as Facebook } from  '../facebook.svg'
import{ ReactComponent as Instegram } from  '../instgram.svg'
import{ ReactComponent as Linkedin } from  '../linkedin.svg'
import{ ReactComponent as Twitter } from  '../twitter.svg'
import{ ReactComponent as Youtube } from  '../youtube.svg'
import { withRouter } from "react-router";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const AddTrainer = (props) => {
    const gotoGoal =()=>{
        console.log(props)
    props.history.push('/Goals')
    }
    const onChangeName=(e)=>{
      // alert('ok')
      console.log(e.target.value)
    }
    const onChangeEmail=(e)=>{
      console.log(e.target.value)
    }
    const onChangeMobile=(e)=>{
      console.log(e.target.value)
    }
    return (
        <div>
            <Container>
        <Row>
            
        <Col xs="12" style={{marginTop:'20px',display:'flex'}}>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Trainer</Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  onClick={()=> gotoGoal() } style={{marginLeft:'-16px',width:'100%',height:'50px',backgroundColor:'white',color:'black'}}>Nutrations</Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  onClick={()=> gotoGoal() } style={{marginLeft:'-16px',width:'100%',height:'50px',backgroundColor:'white',color:'black'}}>Healthy food resturant </Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  onClick={()=> gotoGoal() } style={{marginLeft:'-16px',width:'100%',height:'50px',backgroundColor:'white',color:'black'}}>supplement store</Button> 
            </Col>
           
          </Col>
          <Col>
            <Typography variant="h6">Personal details</Typography>
            </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input onChange= {(e)=>onChangeName(e)}type="email" name="email" id="exampleEmail" placeholder="Name" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}}  />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}} >
          <Input onChange= {(e)=>onChangeMobile(e)} type="email" name="email" id="exampleEmail" placeholder="Mobile Number" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Mail " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="textarea" placeholder="Bio "name="text" id="exampleText" style={{width:'70%',display:'inline',borderRadius:'0',height:'200px'}} />
          </Col>
    
          <Col xs="12">
              <Typography variant="h6" style={{marginBottom: '15px'}}>certificates</Typography>
              <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Upload</Button> 
            </Col>
          </Col>
          
        
          <Col xs="12" style={{marginTop:'20px'}}>
          <Typography variant="h6" style={{marginBottom: '15px'}}>photo</Typography>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Upload</Button> 
            </Col>
          </Col>    
          <Col>
            <Typography variant="h6">Plans</Typography>
            </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Title" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="price" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="textarea" placeholder="steps " name="text" id="exampleText" style={{width:'70%',display:'inline',borderRadius:'0',height:'200px'}} />
          </Col>

          <Col xs="12" style={{marginTop:'20px',display:'flex'}}>
          <Col xs='3' style={{marginBottom:'20px'}}>
                <Button onClick={()=>gotoGoal()} color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px',background:'white',color:'#E0A800'}}>Add more plans</Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button onClick={()=>gotoGoal()} color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Submit</Button> 
            </Col>
          </Col>
        </Row>
      </Container>
        </div>
    );
}

export default withRouter (AddTrainer);
