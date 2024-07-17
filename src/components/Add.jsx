import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudArrowUp ,faFilm } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { allVideoApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVidStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState(
  {
    caption:"",
    imgUrl:"",
    vidUrl:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getlink = (e) =>
  {
    const link = e.target.value
    if(link.startsWith('https://youtu.be/'))
    {
      setVideoDetails({...videoDetails,vidUrl:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }
    else
    {
      setVideoDetails({...videoDetails,vidUrl:`https://www.youtube.com/embed/${link.slice(-11)}`}) 
    }
  
    
  }

  const handleUpload = async(e) =>
  {
    e.preventDefault()
    const{caption,imgUrl,vidUrl}=videoDetails
    if(!caption || !imgUrl || !vidUrl)
    {
      toast.error('complete the details')
    }
    else
    {
      const result = await allVideoApi(videoDetails)
      if(result.status>=200 && result.status<300)
      {
        toast.success('Video Added Successfully')
        handleClose()
        setAddVidStatus(result.data)
      }
      else
      {
        toast.error('Something Went Wrong')
        console.log(result)
      }
    }
    
  }
  
  return (
    <>
      <div className='d-flex align-items-center'>
        <h4>Upload New Video</h4>
        <button className='btn fs-5 border-dark pb-3 text-warning' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp}/></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos  <FontAwesomeIcon icon={faFilm} className='text-warning' /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border p-3 rounded'>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='video caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='video image' onChange={(e)=>setVideoDetails({...videoDetails,imgUrl:e.target.value})}/>
            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='video url' onChange={(e)=>getlink(e)}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="warning" onClick={(e)=>handleUpload(e)}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </>
  )
}

export default Add