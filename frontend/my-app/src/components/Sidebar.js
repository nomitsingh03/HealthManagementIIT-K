import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className='ms-3 mt-3 mb-3 pt-2 ps-2'>     <i className="fa-solid fa-bars fa-2xl"  onClick={handleShow}></i>
      
 

      <Offcanvas className="side" style={{width: "275px",color:"brown", backgroundColor:"skyblue"}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='sibar'>
          <li>
          <i class="fa-solid fa-house-chimney-user"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Home</Link> 
          </li>
          <li>
          <i class="fa-solid fa-id-card"></i>
          <Link to="/NewAppoint" style={{textDecoration:"none"}}>New Appointment</Link> 
          </li>
          <li>
          <i class="fa-solid fa-id-card"></i>
          <Link to="/Vappoint" style={{textDecoration:"none"}}>View Appointment</Link> 
          </li>
          <li>
          <i class="fa-regular fa-file-pdf"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>My Medical Records</Link> 
          </li>
          <li>
          <i class="fa-regular fa-file-pdf"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Lab Reports</Link> 
          </li>
          <li>
          <i class="fa-solid fa-file-signature"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Prescription</Link> 
          </li>
          <li>
          <i class="fa-solid fa-key"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Change Password</Link> 
          </li>

        </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  )
}
