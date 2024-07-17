import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {addVideoHistoryApi, deleteVideoApi } from '../../services/allApi';

function Videocard({video, setDeleteVideoStatus,ispresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => 
  {
    setShow(true)
    const caption = video?.caption
    const url = video?.vidUrl
    const time = new Date()
    const timestamp = new Intl.DateTimeFormat('en-GB',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timestamp);
    const reqBody={caption,url,timestamp}
    const result = await addVideoHistoryApi(reqBody)
  }

  const handleDelete=async(id)=>
  {
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)
  }

  const videoDrag = (e,video) =>
  {
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }

  return (
    <>
      <Card style={{ width: '100%'}} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-2'>
        {!ispresent && <Card.Img variant="top" onClick={handleShow} src={video?.imgUrl} height={'300px'} />}
        <Card.Body >
          <div className='d-flex justify-content-between'>
            <Card.Text className='d-flex justify-content-center align-items-center' onClick={handleShow}>{video?.caption}</Card.Text>
            {!ispresent && <Button variant="danger" style={{height:'50px',width:'50px'}} onClick={()=>handleDelete(video?.id)} className='btn btn-ouline-danger rounded-5'><FontAwesomeIcon icon={faTrashCan} /></Button>}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="500" src={`${video?.vidUrl}?autoplay=1`} title="Akshath - Nadaaniyan (Official Video) Aisha Ahmed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard