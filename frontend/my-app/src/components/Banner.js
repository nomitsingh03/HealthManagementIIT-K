import React from 'react'
import Image from 'react-bootstrap/Image';
export default function Banner() {
  return (
    <>
    <div id="sm-banner">
    <div className="banner-box">
    <Image className='ih' src="https://www.bulkaccountsbuy.com/wp-content/uploads/2020/12/faq.jpg" height= "150px" />
    <div>
    <h2>FAQ</h2>
    
    <p>
    Have questions about using MyHealth? <br /> Find information about things like:
    <ul>
<li>Help with various MyHealth features</li>
<li>Sharing access with caregivers & family</li>
<li>eCheck-in & arriving to your visits
</li>
</ul>
    </p>
    
    <button className="white">Learn More</button>
    </div>
</div>
<div className="banner-box">

<Image className='ih' src="https://tse1.explicit.bing.net/th?id=OIP.UcQhJkmqUy7MmLMomtMV0gHaHa&pid=Api&P=0&h=180" height= "150px" width="130px" />
<div>  
    <h2>Support</h2>
    <p>
    Having issues with MyHealth? <br />We can help you with:
    <ul>
<li>Technical Support</li>
<li>Billing Support</li>
<li>Clinic/Hospital Support</li>
</ul>
    </p>
    <button className="white">Collection</button>
    </div>
  
</div>
    </div>
    </>
  )
}
