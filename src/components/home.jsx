import React from 'react'
import "./home.css"
import picture from '../pic14.jpg'

const Home = () => {
  return (
    <div className='home_container'>

      {/* Section containing text */}
      <div className='home_text'>
        <h1 className='title'>Manage inventory</h1>
        <p className='subtitle'>Simplify your stock control, reduce errors, and save time with our intelligent inventory system.</p>
        <a href='signup' className='getstarted'>Get Started Now </a>
      </div>

      {/* Section containing image */}
      <div className='home_image'>
        <div className='image_container'>
          <img src={picture} alt='hero_section_image'></img>
        </div>
      </div>



    </div>
  )
}

export default Home