import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
         <Container>
            <div className="row">
               
                  <div className="three columns">
                     <img className="profile-pic" src={require('../Images/logo.png')} />
                     {/* <img src={profilepic} alt="Tim Baker Profile Pic" /> */}
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Us</h2>

                     <p className="TypeText2">{bio}</p>
                     <div className="row">
                        <div className="columns contact-details">
                           <h2>Contact Details</h2>
                           <p className="address TypeText2">
                              <span>Tech Artists</span><br />
                              <span>Karachi, Pakistan
                           </span><br />
                              <span>Whatsapp +92 306 2812084</span><br />
                              <span>nazeerafridi690@gmail.com</span>
                           </p>
                        </div>
                     </div>
                  </div>
            </div>
            </Container>


         </section>
      );
   }
}

export default About;
