import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col,Input,Button } from 'reactstrap';
import React, { useState } from "react";
import{ ReactComponent as Logo } from '../logo1.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core'
import{ ReactComponent as Facebook } from  '../facebook.svg'
import{ ReactComponent as Instegram } from  '../instgram.svg'
import{ ReactComponent as Linkedin } from  '../linkedin.svg'
import{ ReactComponent as Twitter } from  '../twitter.svg'
import{ ReactComponent as Youtube } from  '../youtube.svg'
import { withRouter } from "react-router";

const Goals = (props) => {
    const gotoGoal =()=>{
        console.log(props)
    props.history.push('/signup')
    }
    return (
        <div>
            <Container>
        <Row>
        <Col xs="12" style={{marginTop:'20px',display:'flex'}}>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button onClick={()=> gotoGoal() }  style={{marginLeft:'-16px',width:'100%',height:'50px',backgroundColor:'white',color:'black'}}>General Information</Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  color="warning"  style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Goal</Button> 
            </Col>
          </Col>
          <Col xs="12">
              
          </Col>
        </Row>
      </Container>
        </div>
    );
}

export default withRouter(Goals);
