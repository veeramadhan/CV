import React from 'react'
import "./Cardtwo.css"
import logov3 from "../../Assests/logoV3.png"

const Cardtwo = () => {
  return (
    <div class="card"> 
          <img src={logov3} alt="aahaas" height="150px" width='500px' />
  <div class="card__content">
    <p class="card__title">Software developer</p>
    <p class="card__description">
        Appleholidaysds | Software Developer
          <span> Feb, 2023 </span>
</p>
<p>Key responsibilities:</p>
<p>Designed and developed a feature-rich e-commerce
website called AAahaas, offering a wide range of products
and services across different categories, including
essential items, non-essential goods, lifestyle products,
education resources, hotels, and flights. The website was
built from the ground up, from conceptualization to
deployment, with a strong focus on user experience and
functionality</p>
<p className='text_para text-muted'>Web Application Development: Actively involved in the
development of a responsive and feature-rich web application.
</p>
<p className='text_para text-muted'>Application Interactivity: Implemented interactive features to
enhance user engagement and experience.
</p>
<p className='text_para text-muted'>
Bug Resolution: Identified and resolved bugs to ensure smooth
functioning and performance optimization of the application
</p>
  </div>
</div>

  )
}

export default Cardtwo