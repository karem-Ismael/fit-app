import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col,Input,Button,Form,FormGroup,FormFeedback } from 'reactstrap';
import React, { useState } from "react";
import axios from 'axios'
import { withRouter } from "react-router";
import { Mail } from '@material-ui/icons';
import Request from '../Request'
const Signup = (props) => {
    const [Name,setName]=useState('')
    const [invalidname,setinvalidname]=useState(false)

    const [mobile,setMobile]=useState(0)
    const [age,setAge]=useState(0)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confpass,setconfPass]=useState('')
    const [messageName,setmessageName]=useState('')
    const [messageMobile,setmessageMobile]=useState('')
    const [invalidmobile,setinvalidmobile]=useState(false)
    const [invalidmail,setinvalidmail]=useState(false)
    const [messageemail,setmessageemail]=useState(false)
    const [invalidage,setinvalidage]=useState(false)
    const [messageage,setmessageage]=useState('')
    const [validmatch,setvalidmatch]=useState(false)
const changeName=(e)=>{
    setName(e.target.value)
    console.log(Name)
}
const changeMobile=(e)=>{
    setMobile(e.target.value)
}
const changeEmail=(e)=>{
    setEmail(e.target.value)
}
const changeAge=(e)=>{
    setAge(e.target.value)
}
const changeConfpass=(e)=>{
    setconfPass(e.target.value)
    // alert('ok')
    
    console.log(confpass)
}
const changePass=(e)=>{
    setPassword(e.target.value)     
}   
    const gotoGoal =(e)=>{
        console.log(props)
        if(Name.length ==0 || mobile.length == undefined || email.length == 0 || age.length == undefined || age.length==0){
        if(Name.length == 0){
            setinvalidname(true)
            
            setmessageName('Name is required ')
        }
         if(mobile.length == undefined){
            setinvalidmobile(true)
            setmessageMobile('mobile required')
        }
        if(email.length == 0){
            setinvalidmail(true)
            setmessageemail('email required')
        }
        if(age.length == undefined || age.length == 0){
            setmessageage('Age is required')
            setinvalidage(true)
        }else{
            setinvalidage(false)
        }
    }else{
    fetch(`https://fit.codeitpro.com/api/v1/sa/auth/signup`,{
        method: "POST",
        body:JSON.stringify({
            name: Name,
            email: email,
            password:password,
            phone:mobile,
            password_confirmation:confpass,
            country_code:'02',
            country: 'SA',
            verification_code:'12345',
        })
    })

        // alert('karem done')
    //    Request.post('/signup',{
        // name: Name,
        // email: email,
        // password:password,
        // phone:mobile,
        // password_confirmation:confpass,
        // country_code:'02',
        // country: 'SA',
        // verification_code:'12345',
    //    })
        // axios.post('https://fit.codeitpro.com/api/v1/sa/auth/signup', {
            // name: Name,
            // email: email,
            // password:password,
            // phone:mobile,
            // password_confirmation:confpass,
            // country_code:'02',
            // country: 'SA',
            // verification_code:'12345',
        //     headers: {"Access-Control-Allow-Origin": "*"}
        //   })
       
    }
        console.log(password,confpass)
        if(password == confpass){
            setvalidmatch(true)
        }else{
            setvalidmatch(false)
        }
        
        e.preventDefault()
    // props.history.push('/Goals')
    }
    return (
        <div>
            <Container>
        <Row>
        <Col xs="12" style={{marginTop:'20px',display:'flex'}}>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>General Information</Button> 
            </Col>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button  onClick={()=> gotoGoal() } style={{marginLeft:'-16px',width:'100%',height:'50px',backgroundColor:'white',color:'black'}}>Goal</Button> 
            </Col>
          </Col>   
          </Row>
          <Row>
              <Form style={{width:'100%'}}> 
          <Col xs="12" style={{marginTop:'20px'}}>
          <FormGroup>
          <Input type="text" onChange={changeName} name="name" id="exampleEmail" placeholder="Name" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} invalid={invalidname}/>
    <FormFeedback tooltip>{messageName}</FormFeedback>
          </FormGroup>
          </Col>
          <Col xs="12" style={{marginTop:'20px'}} >
          <Input type="number" min="0" onChange={changeMobile} name="mobile" id="exampleEmail" placeholder="Mobile" style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} invalid={invalidmobile}/>
          <FormFeedback tooltip>{messageMobile}</FormFeedback>
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="email" onChange={changeEmail} name="email" id="exampleEmail" placeholder="Mail " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} invalid={invalidmail}/>
          <FormFeedback tooltip>{ messageemail}</FormFeedback>
         
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="number" min="0" onChange={changeAge} name="age" id="exampleEmail" placeholder="Age " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} invalid={invalidage}/>
          <FormFeedback tooltip>{ messageage}</FormFeedback>
          
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="password" onChange={changePass} name="password"  placeholder="Password " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
          <Input type="password" onChange={changeConfpass} required name="confirmpass" valid={validmatch} id="exampleEmail" placeholder="confirm password " style={{width:'70%',display:'inline',borderRadius:'0',height:'57px'}} />
          </Col>
          <Col xs="12" style={{marginTop:'20px'}}>
            <Col xs='3' style={{marginBottom:'20px'}}>
                <Button type="submit" onClick={(e)=>gotoGoal(e)} color="warning" style={{marginLeft:'-16px',width:'100%',height:'50px'}}>Next</Button> 
            </Col>
            
            

          </Col>
          </Form> 
        </Row>
      </Container>
        </div>
    );
}

export default withRouter (Signup);
