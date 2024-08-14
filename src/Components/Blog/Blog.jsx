import React from 'react'
import "./Blog.css"
import DocIcon from "../../Assets/DocIcon.png";
import Blogs from "../../Assets/Blogs.png"

function Blog() {
  return (
    <div className='blog-container'>
        <div className='cardDiv'>
            <div>
                <p className='mainTit'>Blog & News</p>
                <p className='subTit'>Read Our Latest News</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className='card'>
                  <div className='imgDiv'>
                    <img src={Blogs} alt='img'/>
                  </div>
                  <div className='cardContent'>
                      <p className='subText'>Medical  |  March 31, 2022</p>
                      <p className='subHead'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <img src={DocIcon} alt='docicon' style={{width:'32px',height:'32px'}}/>
                        <p className='docname'>Rebecca Lee</p>
                      </div>
                  </div>
                </div>


              <div className='card'>
                  <div className='imgDiv'>
                    <img src={Blogs} alt='img'/>
                  </div>
                  <div className='cardContent'>
                      <p className='subText'>Medical  |  March 31, 2022</p>
                      <p className='subHead'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <img src={DocIcon} alt='docicon' style={{width:'32px',height:'32px'}}/>
                        <p className='docname'>Rebecca Lee</p>
                    </div>
                  </div>
              </div>


              <div className='card'>
                  <div className='imgDiv'>
                    <img src={Blogs} alt='img'/>
                  </div>
                  <div className='cardContent'>
                      <p className='subText'>Medical  |  March 31, 2022</p>
                      <p className='subHead'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <img src={DocIcon} alt='docicon' style={{width:'32px',height:'32px'}}/>
                        <p className='docname'>Rebecca Lee</p>
                      </div>
                  </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Blog