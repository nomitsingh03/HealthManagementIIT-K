import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Regform from './Regform';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Text from './Text';

export default function Home() {
  return (
    <div>
    <div className="" style={{backgroundColor:"brown"}}>
    <div className='pt-1 pb-1 me-3 mt-2 mb-2' align="right" ><Button >
     
    
    <Link to="/Signup" style={{textDecoration:"none",color:"white"}}><h5>Sign Up</h5></Link>
    </Button></div>
      </div> 

    
<Text/>
<Regform/>
<Banner/>


      
    


    </div>
  )
}
