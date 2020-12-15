import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col,Input,Button } from 'reactstrap';

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
const Footer = () => {
    return (
        <div>
            <Row style={{background:'black'}} xs="12">
          <Container style={{display:'flex',justifyContent:'space-around'}}>
              <Col xs="5" style={{color:'white'}}>
            <Col xs="12">
                <Logo style={{marginTop:"10px"}}/>
            </Col>
            <Col xs="12">
            <Typography variant="h6" style={{marginTop:'20px'}}>
               <RoomIcon /> <Typography variant="span">Happy, street .Saudi Arabia</Typography>
            </Typography>
            </Col>
            <Col xs="12">
            <Typography variant="h6" style={{marginTop:'20px'}}>
               <PhoneIcon /> <Typography variant="span">4647989808</Typography>
            </Typography>
            </Col>
            <Col xs="12 mb-3" >
            <Typography variant="h6" style={{marginTop:'20px'}}>
               <MailOutlineIcon /> <Typography variant="span">lorem.com</Typography>
            </Typography>
            </Col>
            </Col>
            <Col xs="6" style={{marginTop:'20px',color:'white'}}>
                <Col xs="12" >
                    <Typography variant="h6" style={{marginTop:'15px',marginBottom:'15px'}}>subscribe our news letter </Typography>
                </Col>
                <Col xs="12" style={{display:'flex',justifyContent:'space-between'}}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Full Name" style={{width:'260px',display:'inline',borderRadius:'0',background:'black',height:'45px'}} />
                <Button style={{width:'206px',border:'none'}}color="warning">subscribe</Button>
                </Col>
                <Col xs="12" style={{marginTop:'20px',marginBottom:'10px'}} >
                    follow us on 
                </Col>
                <Col xs="8" className="d-flex" style={{justifyContent:'space-evenly'}}>
                <Button  className="karem"  style={{width:'52px',border:'none',background:'#545454'}}><Facebook/></Button>
                <Button  className="karem"  style={{width:'52px',border:'none',background:'#545454'}}><Instegram/></Button>
                <Button  className="karem"  style={{width:'52px',border:'none',background:'#545454'}}> <Linkedin /></Button>
                <Button   className="karem"  style={{width:'52px',border:'none',background:'#545454'}}><Twitter style={{width:'35px'}} /></Button>
                <Button  className="karem" style={{width:'52px',border:'none',background:'#545454'}}><Youtube style={{width:'35px'}}  /></Button>
                </Col>
            </Col>
          </Container>
        {/* <Col xs="8">kareeeeeeem</Col> */}
      </Row>
            
        </div>
    );
}

export default Footer;
