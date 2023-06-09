import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert';






export default function Contact() {
   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  
  
  
 const handleSubmit=(e)=>{
  e.preventDefault();
  if (name.length===0||email.lenght===0||subject.length===0||message.lenght===0) {
    setError(true)
    
  }
  if (name && email && subject && message) {
    console.log("name:",name,"email:",email,"subject:",subject,"message:",message)
    Swal({
      position: 'center',
      
      //  icon: 'success',
      // title2: 'Thanks for Submitting the form',
       showConfirmButton: true,
       title: "Are you sure?",
  text: "You want to submit this action.",
  icon: "success",
  buttons: ["No, cancel", "Yes, submit it"],
  
        
       })
  }else
  console.log(name,email,subject,message)
  
 }
  const style = {
    frameborder: "0",
    border: "0",
    width: "100%",
    height: "290px",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      
      <main id="main">
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
            </div>

            <div class="row">
              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      EMeelan(GyanStream), RH52, Ramky Serene woods Chikkagubbi
                      Kohthnuru Bengaluru 560077
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>emeelanpvtltd@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 91797 19329 </p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.3003788741053!2d77.6615431!3d13.0801397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a19c848871d%3A0x808322ec058eb477!2sRAMKY%20SERENE%20WOODS%2C%20Chikkagubbi%20Village%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1679909707814!5m2!1sen!2sin"
                    title="/"
                    style={style}
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form onSubmit={handleSubmit}   class="php-email-form">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        onChange={e=>setName(e.target.value)}
                        name="name"
                        class="form-control"
                        id="name"/>
                        {error&&name.length<=0?
                       <label style={{color:"red"}}>reaquired this field</label>:""}
                    </div>
                    
                    
                    <div class="form-group col-md-6">
                      <label for="name">Email</label>
                      <input
                        type="email"
                      
                        onChange={e=>setEmail(e.target.value)}
                        class="form-control"
                        name="email"
                        id="email"
                        
                      />
                      {error&&email.length<=0?
                       <label style={{color:"red"}}>reaquired this field</label>:""}
                    </div>
                   
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                     
                      onChange={e=>setSubject(e.target.value)}
                      class="form-control"
                      name="subject"
                      id="subject"
                   
                
                    />
                    {error && subject.length<=0?
                     <label style={{color:"red"}}>reaquired this field</label>:""}
                  </div>
               
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea
                      class="form-control"
                      
                      onChange={e=>setMessage(e.target.value)}
                      name="message"
                      rows="10"
                     
                    ></textarea>
                    {error && message.length<=0?
                     <label style={{color:"red"}}>reaquired this field</label>:""}
                  </div>
                  
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
