import React from 'react'
import { faInstagram,faTwitter,faFacebook,faLinkedin,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
     <div className='container-fluid'>
        <div className='row bg-secondary py-5'>
          <div className="col-md-4 px-5">
            <div className='text-dark fs-5 fw-medium'>
              <img
                    alt=""
                    src="https://icon-library.com/images/media-player-icon/media-player-icon-2.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  Media Player
            </div>
            <p className='text-light mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dignissimos illo id unde, aliquam velit quod consectetur minima fugit fuga, nobis, ipsam quibusdam! Illo fugit ipsa deleniti provident, vero totam?</p>
          </div>
          <div className="col-md-2 px-5">
            <h5 className='text-dark fs-5 fw-medium'>Link</h5>
            <div className='text-light'>
              <Link to={'/'} className='text-light'><p>Landing Page</p></Link>
              <Link to={'/home'} className='text-light'><p>Home</p></Link>
              <Link to={'/history'} className='text-light'><p>History</p></Link>
            </div>
          </div>
          <div className="col-md-2 px-5">
            <h5 className='text-dark fs-5 fw-medium'>Guides</h5>
            <div className='text-light'>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h5 className='text-dark fs-5 fw-medium'>Contact Us</h5>
              <div className='d-flex mt-4'>
                <input type="text" placeholder='email id' className='form-control bg-primary me-3'/>
                <button className='btn btn-primary '>Subscribe</button>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x text-primary' />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x text-primary' />
                <FontAwesomeIcon icon={faFacebook} className='fa-2x text-primary' />
                <FontAwesomeIcon icon={faLinkedin} className='fa-2x text-primary' />
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x text-primary' />
              </div>
          </div>
            
        </div>
     </div>
    </>
  )
}

export default Footer