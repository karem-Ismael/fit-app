import{ ReactComponent as Logo } from '../logo1.svg';
// import './App.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import { Container, Row, Col,Input,Button } from 'reactstrap';
import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const toggle = () => setIsOpen(!isOpen);
    return (
     
  <>
  <Navbar color="light"  expand="md" style={{boxShadow:'0px 2px #ccc'}}>
  <Container><Col xs="2"><NavbarBrand href="/"><Logo style={{height:'50px'}}/></NavbarBrand></Col></Container> 
    <Col xs="5"><Input type="email" name="email" id="exampleEmail" placeholder="what are you looking for " style={{width:'70%',display:'inline',borderRadius:'0',height:'53px'}} />
    <Button color="warning" style={{borderRadius:'0',height:'53px',verticalAlign:'baseline'}}><SearchIcon /></Button>
    </Col>
    <Col xs="4" md="4" style={{display:'flex',justifyContent: 'space-evenly'}}>
      <ShoppingCartIcon style={{marginTop:8,color:'#FBCC04'}}/>
      <NavLink className="d-inline" to="Services" >Services</NavLink>
      <NavLink className="d-inline" to="Services" >Log in</NavLink>
      <Button color="link"  onClick={handleClick}>
        English
    </Button>
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
      </Col>
  
  
  
  </Navbar>
  
  <Navbar  expand="md"  style={{boxShadow:'0px 2px #ccc',backgroundColor:'#FBCC04'}}>
    <div className="col-md-8 d-flex" style={{justifyContent: 'space-evenly'}}> 
    <NavbarBrand href="/" style={{color:'black'}}>Store</NavbarBrand>
    <NavbarBrand href="/" style={{color:'black'}}>Workouts</NavbarBrand>
    <NavbarBrand href="/" style={{color:'black'}}>Articles</NavbarBrand>
    <NavbarBrand href="/" style={{color:'black'}}>Videos</NavbarBrand>
    </div>
  </Navbar>
 
      </>
    );
  }
export default NavBar