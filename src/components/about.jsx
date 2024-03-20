import React from 'react'
import "./about.css"
import idea from '../idea.png'
// import development from '../development.png'
// import design from '../design.png'
// import success from '../success.png'


const About = () => {
  return (
    <div className='about_container'>
      {/* Section with text */}
      <div className="about_text">
        <h1 className='about_title'>We design digital products</h1>
        <div className="line">---------------</div>
        <p className='about_subtitle'>Your brand, your productYour brand, your productYour brand, your productYour brand, your product, your big idea. We believe in creating opportunities for elite brands, intrepid startups and passionate innovators to change the world.</p>
      </div>

      {/* Section with visuals */}
      <div className="about_images">
        <div className="visual">
          <div className="visual_icon">
          <img src={idea} alt='icon' className='icon'></img>
          </div>
          <div className="visual_text">
            IDEA
          </div>
        </div>

        <div className="visual">
          <div className="visual_icon">
          <img src={idea} alt='icon' className='icon'></img>
          </div>
          <div className="visual_text">
            DESIGN
          </div>
        </div>

        <div className="visual">
          <div className="visual_icon">
          <img src={idea} alt='icon' className='icon'></img>

          </div>
          <div className="visual_text">
            DEVELOPMENT
          </div>
        </div>

        <div className="visual">
          <div className="visual_icon">
            <img src={idea} alt='icon' className='icon'></img>
          </div>
          <div className="visual_text">
            SUCCESS
          </div>
        </div>
      </div>
    </div>
  )
}

export default About