import React from 'react'
import "./PatientCaring.css"
import Patient1 from "../../Assets/Patient1.png"
import Patient2 from "../../Assets/Patient2.png"
import { FaPhoneVolume } from "react-icons/fa6";
import Verified from "../../Assets/verified.png"

function PatientCaring() {
  return (
    <div className='patient-container'>
        <div className='inner-container'>
            <div className='patient'>
                <div className='consultation'>
                    <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                        <div style={{width:'34px',height:'34px',background: '#2AA7FF',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px',marginLeft:'25px'}}>
                           <FaPhoneVolume style={{ color: 'white',padding:'5px' }} />
                        </div>
                        <p className='txtconsult'>Free consultation</p>
                    </div>
                    
                    <p className='consultSub'>Consultation with the best</p>
                </div>
                <div>
                    <img src={Patient1} alt="patient1" className='img1'/>
                    <img src={Patient2} alt="patient2" className='img2'/>
                </div>
            </div>
            <div className='mainHead'>
                <p className='title'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <p className='subTitle'>Patient <span>Caring</span></p>
                <p className='para'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </p>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <img src={Verified} alt="verfied" style={{width:'20px',height:'20px'}}/><p style={{fontFamily:'Roboto',
                        fontSize:'15px',fontWeight:'500',color:'#1B3C74', paddingLeft:'8px'
                    }}>Stay Updated About Your Health</p>
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <img src={Verified} alt="verfied" style={{width:'20px',height:'20px'}}/><p style={{fontFamily:'Roboto',
                        fontSize:'15px',fontWeight:'500',color:'#1B3C74', paddingLeft:'8px'
                    }}>Check Your Results Online</p>
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                    <img src={Verified} alt="verfied" style={{width:'20px',height:'20px'}}/><p style={{fontFamily:'Roboto',
                        fontSize:'15px',fontWeight:'500',color:'#1B3C74', paddingLeft:'8px'
                    }}>Manage Your Appointments</p>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default PatientCaring