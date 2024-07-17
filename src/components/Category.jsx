import React, { useEffect } from 'react'
import Videocard from './Videocard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { categoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../../services/allApi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName , setCategoryName] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [status, setStatus] = useState(false)

  const handleClose = () => 
  {
    setShow(false)
    setCategoryName('')
  }
  const handleShow = () => setShow(true);

  const handleCategoryAdd=async()=>
  {
    if(categoryName)
    {
      const reqBody={
      categoryName,
      allVideo:[]
      }
      const result = await categoryApi(reqBody)
      if(result.status>=200 && result.status<300)
      {
        alert('Category added successfully')
        setCategoryName('')
        handleClose()
        setStatus(true)
      }
    }
    else
    {
      alert('give proper input')
    }
  }

  const getCategory = async() =>
  {
    const result = await getCategoryApi()
    setAllCategory(result.data)
  }
  const handleDelete = async(id) =>
  {
    await deleteCategoryApi(id)
    setStatus(true)
  }

  const dragOver = (e) =>
  {
    e.preventDefault()
  }

  const videoDrop = async(e,selectedVideo) =>
  {
    
    const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
    if(selectedVideo.allVideo.find(item=>item.id == videoDetails.id))
    {
      toast.error('already exist')
    }
    else
    {
      selectedVideo.allVideo.push(videoDetails)
      const result = await updateCategoryApi(selectedVideo.id,selectedVideo)
      toast.success('video added successfully')
      setStatus(true)
    }
  }

  const onDrag = (e,vidId,CatDetails) =>
  {
    const dataShare={vidId,CatDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))

  }

  useEffect(()=>{
    getCategory()
    setDragOut(false)
    setStatus(false)},[status,dragOut])
  return (
    <>
      <h4>Category</h4>
      <button className='btn btn-warning w-100 mt-4 ' onClick={handleShow} >add category</button>
      {allCategory?.length>0 ?
        allCategory?.map((item)=>(
        <div className='p-3 border rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item)}>
        <div className='d-flex justify-content-between'>
          <p className='mb-4'>{item.categoryName}</p>
          <button className='btn btn-outline-danger rounded-5' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
          {item?.allVideo?.length>0 && item?.allVideo?.map((video)=>
          <div draggable onDragStart={(e)=>onDrag(e,video.id,item)}>
            <Videocard video={video} ispresent={true} />
          </div>
          
          )}
        </div>))
        :
        <p className='text-danger text-center mt-5'>No Categories</p>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'><input type="text" onChange={(e)=>setCategoryName(e.target.value)} className='form-control' placeholder='category name' /></form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </>
  )
}

export default Category