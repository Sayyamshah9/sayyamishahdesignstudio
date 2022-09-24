import React from 'react'
import './Footer.css'
// import emailjs from "emailjs-com";

const Footer = () => {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  // const sendMail = (fname, lname, em)=>{

  //   let data = fname + " " + lname + " " + email;

  //   emailjs.sendForm('service_5cfuwq8', 'template_336nd8w', data, 'SETuQCO6QOroS06qg')
  //     .then((result) => {
  //       alert("Thanks For Reaching Out to us &#128515; We will get back to you!")
  //         // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  // const getData = ()=>{

  //   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //   if(firstName.length !== 0 && lastName.length !== 0 && email.length !== 0){
  //     if(!email.match(validRegex)){
  //       return alert("Invalid Email");
  //     }
  //     sendMail(firstName, lastName, email);
  //     // console.log(firstName + " " + lastName + " " + email);
  //   }else{
  //     alert("All Fields Are Required");
  //   }
  // }

  return (
    <div className='container-fluid footer-main mt-5'>

      <div className="from-div container pt-5 pb-3 text-center">
        <p>Sayyami Shah <span className='dsgnStudioTxt'>  DesignStudio </span> </p>
        {/* <h5 className='gint-heading mb-3'>Get In touch</h5>

        <div className="row">

          <div className="col-md pb-2 pb-md-0">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange={ (e)=>setFirstName(e.target.value) } value={firstName}/>
          </div>
          <div className="col-md pb-2 pb-md-0">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={ (e)=>setLastName(e.target.value) } value={lastName}/>
          </div>
          <div className="col-md pb-2 pb-md-0">
            <input type="email" className="form-control" placeholder="Email" aria-label="Email Id" onChange={ (e)=>setEmail(e.target.value) } value={email}/>
          </div>
          <div className="col-md">
            <button className="btn btn-secondary" onClick={getData}>Submit</button>
          </div>

        </div>  */}
        <hr className="copyright-content mt-3"/>
        <div>
          <p> <small>Copyright©2022SayyamiShahDesignStudio</small> </p>
        </div>

      </div>

    </div>
  )
}

export default Footer
