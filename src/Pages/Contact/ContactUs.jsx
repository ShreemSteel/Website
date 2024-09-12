import React from "react";
import "./ContactUs.css";


const ContactUs = () => {

  return (
    <div className="contact-us-container">
      <br></br><br></br>
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-us-content">

        
        {/* Form Section */}
        <div
          className="contact-us-form"
        >
          <form action="https://api.web3forms.com/submit" method="POST">
{/* <h1>Contact US</h1> */}

            <input type="hidden" name="access_key"  />
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>

        </div>

        {/* Map Section */}
   
          <iframe className="contact-us-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.663066917285!2d77.4550984!3d28.6477606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1e244d01f19%3A0xae6484aedd3ea345!2s55%2C%20Loha%20Mandi%2C%20Bulandshahr%20Road%20Industrial%20Area%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1693641245397!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
     


      </div>

      {/* Testimonials Section */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ContactUs;