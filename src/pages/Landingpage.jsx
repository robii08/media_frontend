import React from 'react'
import { Row,Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <>
      <Row className='d-flex justify-content-center align-items-center w-100 mt-5'>
        <Col md={1} ></Col>
        <Col md={5} className='p-3'>
          <h3 className='py-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est animi modi saepe error vel nobis ducimus exercitationem natus, sit temporibus perspiciatis suscipit reiciendis in voluptatem blanditiis unde corporis magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque ducimus dignissimos? Officia tenetur enim facere aliquid, voluptatum, delectus sint nobis quisquam libero vero ipsa saepe voluptas, placeat debitis exercitationem!</p>
          <Link to={'/home'}><button className='btn btn-warning my-3'>get started</button></Link>
        </Col>
        <Col md={1} ></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
          <img src="https://img1.picmix.com/output/stamp/normal/4/8/3/5/1435384_54f6a.gif" alt="" className='w-75 pt-3' height={'80%'} />
        </Col>
      </Row>

      <div className='container my-5'>
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3} className=' d-flex justify-content-center align-items-center mt-3'>
              <Card style={{ width: '18rem',height:'450px' }} className='p-3'>
                <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
          </Card>
          </Col>
          <Col md={4} className=' d-flex justify-content-center align-items-center mt-3'>
              <Card style={{ width: '18rem',height:'450px' }} className='p-3'>
                <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
          </Card>
          </Col>
          <Col md={3} className=' d-flex justify-content-center align-items-center mt-3'>
              <Card style={{ width: '18rem',height:'450px' }} className='p-3'>
                <Card.Img variant="top" src="https://media1.tenor.com/images/4d5fdb6c20630ca254865fd9ba781bd2/tenor.gif?itemid=14460643" height={'255px'}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
          </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>

      <div className='container-fluid my-5'>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 border border-secondary p-3 my-5 rounded">
                <div className="row p-4">
                  <div className="col-md-6 px-4">
                      <h3 className='text-warning'>Simple Fast and Powerful</h3>
                      <p className='mt-4'><span className='fs-5 text-danger'>Play Everything : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptates placeat nesciunt qui impedit beatae voluptatum, autem delectus repudiandae.</p>
                      <p className='mt-4'><span className='fs-5 text-danger'>Play Everything : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptates placeat nesciunt qui impedit beatae voluptatum, autem delectus repudiandae.</p>
                      <p className='mt-4'><span className='fs-5 text-danger'>Play Everything : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptates placeat nesciunt qui impedit beatae voluptatum, autem delectus repudiandae.</p>
                      
                  </div>
                  <div className="col-md-6 px-4">
                      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/u_wB6byrl5k" title="Oo Antava Mawa..Oo Oo Antava Full Video Song | Pushpa Songs | Allu Arjun| DSP |Sukumar |Samantha" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
            <div className="col-md-1"></div>
          </div>
      </div>
    </>
  )
}

export default Landing