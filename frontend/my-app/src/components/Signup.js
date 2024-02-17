import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import studentService from '../service/student.service';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
  const [student, setStudent] = useState({
    username:"",
    name:"",
    password:"",
    branch:"",
    profileImage:"",
    role:"",
  });
  
  const handleChange=(e)=>
  {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value});
  };
  
  const navigate = useNavigate();

  const StudentRegister=(e)=>{
    e.preventDefault();
    studentService.saveStudent(student).then((res)=>{
      navigate("/");
    });
  }

  
  return (
  <>
    <div className='su'>
      <div className='container' align="right">
      <div className='card   border-3 border-secondary pt-4 ps-3 ' >
        <div className='card-header  fs-5  bg-secondary text-white text-center w-50 pt-1 '>SIGN UP</div>
        <div className='card-body p-3'  align="left">
    <Form onSubmit={(e) => StudentRegister(e)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  name="name" onChange={(e) => handleChange(e)} value={student.name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll No.</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" onChange={(e) => handleChange(e)} value={student.username}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" placeholder="Enter branch" name='branch' onChange={(e) => handleChange(e)} value={student.branch}/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => handleChange(e)} value={student.password}/>
      </Form.Group>

      <Form.Group className='mb-4'>
        <Form.Check className='m-2 ' type="radio" id="2" name="role" label="Doctor" value='doctor' onChange={(e) => handleChange(e)}/>
        <Form.Check className='m-2' type="radio" id="1" name="role" label="Student" value='student' onChange={(e) => handleChange(e)}/>
      </Form.Group>
      <div className='text-center'><Button variant="secondary" type="submit" size="lg">
        Submit
      </Button></div>
    
    </Form>

    </div>
    </div>
    </div>
    </div>
    </>
  )
}
