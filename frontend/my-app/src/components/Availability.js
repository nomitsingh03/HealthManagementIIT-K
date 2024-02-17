import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Slots from './Slots';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import studentService from '../service/student.service';


export default function Availability() {

  const [appointment, setAppointment] = useState({
    appointmentId:"",
	  appType:"",
	  appDoctor:"",
	  date:"",
	  slot:"",
    username:"",
  });

  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(()=>{
    studentService.getAppointmentById(id).then((res)=>{
      setAppointment(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

const handleChange = (event) => {
  const value = event.target.value;
  setAppointment({ ...appointment, [event.target.name]: value});
};

const ConfirmAppointment=(e)=>{
  studentService.updateSlot(appointment, appointment.appointmentId).then((res)=>{
    navigate('/final/'+appointment.appointmentId);
  });
    console.log(appointment);
}

  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
const slots1 = () =>{
  if(show2==true) {
    setShow2(false)
  }
  if(show1===true){
    setShow1(false)
  }
else{
  setShow1(true)
}

}

const slots2 = () =>{
  if(show1==true) {
    setShow1(false)
  }
  if(show2===false){
    setShow2(true)
  }
else{
  setShow2(false)
}

}

  return (
    <>
    <div>
        <Sidebar/>
    </div>

<div><Row className="g-2 m-5 mb-0  time" >
      <Col md className='me-5'>
      <div> 
     <button onClick={slots1}  className="sbutton" style={{backgroundColor:"green",color:"white"}}><h6>09:00 AM - 10:00 AM</h6></button>{
      show1 && (<div className="slot1">
      <div className='slot'>
       <div className='row mb-3'>
        <div>
          <input name='slot' id='1' type="radio" onChange={(e) => handleChange(e)} value="1 (9:00AM-10:AM)"/>
          <label htmlFor="1">1</label>
        </div>
        <div>
          <input name='slot' id='2' type="radio" onChange={(e) => handleChange(e)} value="2 (9:00AM-10:AM)"/>
          <label name='slot' htmlFor="2">2</label>
        </div>
        <div>
          <input name='slot' id='3' type="radio" onChange={(e) => handleChange(e)} value="3 (9:00AM-10:AM)"/>
          <label htmlFor="3">3</label>
        </div>
        </div>
        <div className='row mb-3'>
        <div>
          <input name='slot' id='4' type="radio" onChange={(e) => handleChange(e)} value="4 (9:00AM-10:AM)"/>
          <label htmlFor="4">4</label>
        </div>
        <div>
          <input name='slot' id='5' type="radio" onChange={(e) => handleChange(e)} value="5 (9:00AM-10:AM)"/>
          <label htmlFor="5">5</label>
        </div>
        
        <div>
          <input name='slot' id='6' type="radio" onChange={(e) => handleChange(e)} value="6 (9:00AM-10:AM)"/>
          <label htmlFor="6">6</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='7' type="radio" onChange={(e) => handleChange(e)} value="7 (9:00AM-10:AM)"/>
          <label htmlFor="7">7</label>
        </div>
        <div>
          <input name='slot' id='8' type="radio" onChange={(e) => handleChange(e)} value="8 (9:00AM-10:AM)"/>
          <label htmlFor="8">8</label>
        </div>
        <div>
          <input name='slot' id='9' type="radio" onChange={(e) => handleChange(e)} value="9 (9:00AM-10:AM)"/>
          <label htmlFor="9">9</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='10' type="radio" onChange={(e) => handleChange(e)} value="10 (9:00AM-10:AM)"/>
          <label htmlFor="10">10</label>
        </div>
        <div>
          <input name='slot' id='11' type="radio" onChange={(e) => handleChange(e)} value="11 (9:00AM-10:AM)"/>
          <label htmlFor="11">11</label>
        </div>
  
        <div>
          <input name='slot' id='12' type="radio" onChange={(e) => handleChange(e)} value="12 (9:00AM-10:AM)"/>
          <label htmlFor="12">12</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='13' type="radio" onChange={(e) => handleChange(e)} value="13 (9:00AM-10:AM)"/>
          <label htmlFor="13">13</label>
        </div>
        <div>
          <input name='slot' id='14' type="radio" onChange={(e) => handleChange(e)} value="14 (9:00AM-10:AM)"/>
          <label htmlFor="14">14</label>
        </div>
  
        <div>
          <input name='slot' id='15' type="radio" onChange={(e) => handleChange(e)} value="15 (9:00AM-10:AM)" />
          <label htmlFor="15">15</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='16' type="radio" onChange={(e) => handleChange(e)} value="16 (9:00AM-10:AM)"/>
          <label htmlFor="16">16</label>
        </div>
        <div>
          <input name='slot' id='17' type="radio" onChange={(e) => handleChange(e)} value="17 (9:00AM-10:AM)"/>
          <label htmlFor="17">17</label>
        </div>
        <div>
          <input name='slot' id='18' type="radio" onChange={(e) => handleChange(e)} value="18 (9:00AM-10:AM)"/>
          <label htmlFor="18">18</label>
        </div>
        </div>
      
         </div> 
      </div>
    )
     }</div>
      </Col>
     
      <Col md>
     <div> 
     <button onClick={slots2}  className="sbutton" style={{backgroundColor:"green",color:"white"}}><h6>10:00 AM - 11:00 AM</h6></button>{
      show2 && (<div className="slot2">
      <div className='slot'>
      <div className='row mb-3'>
        <div>
          <input name='slot' id='1' type="radio" onChange={(e) => handleChange(e)} value="1 (10:00AM-11:AM)"/>
          <label htmlFor="1">1</label>
        </div>
        <div>
          <input name='slot' id='2' type="radio" onChange={(e) => handleChange(e)} value="2 (10:00AM-11:AM) "/>
          <label name='slot' htmlFor="2">2</label>
        </div>
        <div>
          <input name='slot' id='3' type="radio" onChange={(e) => handleChange(e)} value="3 (10:00AM-11:AM)"/>
          <label htmlFor="3">3</label>
        </div>
        </div>
        <div className='row mb-3'>
        <div>
          <input name='slot' id='4' type="radio" onChange={(e) => handleChange(e)} value="4 (10:00AM-11:AM)"/>
          <label htmlFor="4">4</label>
        </div>
        <div>
          <input name='slot' id='5' type="radio" onChange={(e) => handleChange(e)} value="5 (10:00AM-11:AM)"/>
          <label htmlFor="5">5</label>
        </div>
        
        <div>
          <input name='slot' id='6' type="radio" onChange={(e) => handleChange(e)} value="6 (10:00AM-11:AM)"/>
          <label htmlFor="6">6</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='7' type="radio" onChange={(e) => handleChange(e)} value="7 (10:00AM-11:AM)"/>
          <label htmlFor="7">7</label>
        </div>
        <div>
          <input name='slot' id='8' type="radio" onChange={(e) => handleChange(e)} value="8 (10:00AM-11:AM)"/>
          <label htmlFor="8">8</label>
        </div>
        <div>
          <input name='slot' id='9' type="radio" onChange={(e) => handleChange(e)} value="9 (10:00AM-11:AM)"/>
          <label htmlFor="9">9</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='10' type="radio" onChange={(e) => handleChange(e)} value="10 (10:00AM-11:AM)"/>
          <label htmlFor="10">10</label>
        </div>
        <div>
          <input name='slot' id='11' type="radio" onChange={(e) => handleChange(e)} value="11 (10:00AM-11:AM)"/>
          <label htmlFor="11">11</label>
        </div>
  
        <div>
          <input name='slot' id='12' type="radio" onChange={(e) => handleChange(e)} value="12 (10:00AM-11:AM)"/>
          <label htmlFor="12">12</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='13' type="radio" onChange={(e) => handleChange(e)} value="13 (10:00AM-11:AM)"/>
          <label htmlFor="13">13</label>
        </div>
        <div>
          <input name='slot' id='14' type="radio" onChange={(e) => handleChange(e)} value="14 (10:00AM-11:AM)"/>
          <label htmlFor="14">14</label>
        </div>
  
        <div>
          <input name='slot' id='15' type="radio" onChange={(e) => handleChange(e)} value="15 (10:00AM-11:AM)" />
          <label htmlFor="15">15</label>
        </div>
        </div>
        <div className='row'>
        <div>
          <input name='slot' id='16' type="radio" onChange={(e) => handleChange(e)} value="16 (10:00AM-11:AM)"/>
          <label htmlFor="16">16</label>
        </div>
        <div>
          <input name='slot' id='17' type="radio" onChange={(e) => handleChange(e)} value="17 (10:00AM-11:AM)"/>
          <label htmlFor="17">17</label>
        </div>
        <div>
          <input name='slot' id='18' type="radio" onChange={(e) => handleChange(e)} value="18 (10:00AM-11:AM)"/>
          <label htmlFor="18">18</label>
        </div>
        </div>
          
      </div></div>)
     }</div>
      </Col>
    </Row></div>  
    <Container  className='text-center'>
    <Row ><Col>
      <Button style={{backgroundColor:"tomato"}} onClick={(e)=>ConfirmAppointment(e)}>  
    <h6>Book Appointment</h6>
    </Button></Col></Row>
      </Container> 
    </>
  )
}