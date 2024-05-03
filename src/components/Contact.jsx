import React, { useState } from 'react'
import "../css/contact.css"
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SEND_MAIL } from '../apiServices';

const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  })

  const [formErrors,setFormErrors]=useState({
  }
  )

const handleValidations =() =>{
  const {name,email,message,subject} =formData;

  if(validator.isEmpty(name)){
     
    toast.error("Name is required")
    return false;
  }
  if(validator.isEmail(email)==false){
    toast.error("Invalid email address")
    return false;
  }
  if(validator.isEmpty(subject)){
    toast.error("subject is required")
    return false;
  }
  if(validator.isEmpty(message)){
    toast.error("message is required")
    return false;
  }
 
  return true;
}

  const handleSubmit = async () => {
    
    if(handleValidations())
    {
      await axios.post(SEND_MAIL,formData).then((res) => {
           if(res.data.success)
           {
            toast.success("Submited successfully !")
           }
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  console.log(formData)


  return (
    <>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
    <div className='contact' id='contact' data-aos="fade-down" >
    
        <div className='map'> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0228673086317!2d78.09631718205927!3d9.906431582740419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfdb501bbab3%3A0xec93ec2e6ea8771b!2sSRV%20Training%20Academy!5e0!3m2!1sen!2sin!4v1710767406584!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='form'>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus?</p>
            <div>{formErrors.name}</div>
            <div className='contact-form'>
                      <div>
                        <span><FaUser/></span>
                        <input type='text' 
                         name='name'
                         onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
                        placeholder='Name' />
                      </div>
                

                      <div>
                        <span><MdAlternateEmail/></span>
                      
                        <input type='text'
                          name='email'
                          onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
                        placeholder='Email' />
                      </div>

                      <div>
                        <span><FaInfo/></span>
                        <input type='text'
                          name='subject'
                          onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
                         placeholder='Subject' />
                      </div>
                      <div>
                        <span><RiMessage2Fill/></span>
                        <textarea rows={5}
                          name='message'
                          onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
                         placeholder='Message'></textarea>
                      </div>
            </div>
            <div className='send-btn'>
                <button onClick={handleSubmit} > SEND MESSAGE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact