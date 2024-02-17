import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import studentService from '../service/student.service';


export default function NewAppoint() {

  const [student, setStudent] = useState({
    username:"",
    name:"",
    password:"",
    branch:"",
    profileImage:"",
    role:"",
  })

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
    studentService.getStudentById(id).then((res)=>{
      setStudent(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  const handleChange=(e)=>
  {
    const value = e.target.value;
    setAppointment({ ...appointment, [e.target.name]: value});
  };

  const AppointmentRegister=(e)=>{
    studentService.saveAppointment(appointment, student.username).then((res)=>{
      setAppointment(res.data)
      navigate('/Appointnxt/'+res.data.appointmentId);
    });
      console.log(appointment);
  }

  return (
    <>
    <div>
      <Sidebar/>

      <div>
        <div className='apbook'>
          <div className='book'>   <h3>
            Username: 
          </h3>
          <h3>{student.username}</h3>
          </div>
      
      <div className='book'>
          <h3>
            Name:
          </h3>
          <h3>{student.name}</h3>
          </div>
        </div>
      </div>
      

     <div className='dropd'>
     
      <div>
        <h5>Appointment Type</h5>
      <Form.Select aria-label="Default select example" name='appType' onChange={(e) => handleChange(e)}>
      <option>select</option>
      <option value="T1">T1</option>
      <option value="T2">T2</option>
      <option value="T3">T3</option>
    </Form.Select> 
      </div>
      
      
      
      <div>
        <h5>
          Select Doctor
        </h5>
      <Form.Select aria-label="Default select example" name='appDoctor' onChange={(e) => handleChange(e)}>
      <option>select</option>
      <option value="D1">D1</option>
      <option value="D2">D2</option>
      <option value="D3">D3</option>
    </Form.Select>
 </div>
    </div>
     <div className='proceed pt-1 pb-1 me-3 mt-2 mb-5' align="right" >
      <Button onClick={(e) => AppointmentRegister(e)} style={{textDecoration:"none",color:"white"}}><h5>Proceed</h5>
    </Button></div>
      </div>
    
    </>
  )
}