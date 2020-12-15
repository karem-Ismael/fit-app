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
import './style.css'
const PersonalInfo = () => {
    return (
        <>
        <Container>
        <Row>
          <Col xs="12">
            <Typography variant="h6" >
               Personal information
            </Typography>
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Name" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}} >
          <Input type="email" name="email" id="exampleEmail" placeholder="Mobile" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Password " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="confirm password " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Submit</Button> 
            </Col>
          </Col>
        </Row>
      </Container>
      </>
    );
}
export default PersonalInfo;
