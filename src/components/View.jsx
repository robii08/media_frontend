import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { getAllVideoApi, updateCategoryApi } from '../../services/allApi'

function View({addVidStatus,setDragOut}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([])

  const getAllVideo = async()=>
  {
    const result=await getAllVideoApi()
    setAllVideo(result.data)
  }

  const dragOver=(e)=>
  {
    e.preventDefault()
  }

  const videoDrop=async (e)=>
  {
    const result=JSON.parse(e.dataTransfer.getData("dataShare"))
    
    const selectedCategory=result.CatDetails
    const newDetails=selectedCategory.allVideo.filter((item)=>item.id!=result.vidId)
    const reqBody={
      categoryName : selectedCategory.categoryName,
      allVideo:newDetails,
      id:selectedCategory.id
    }
    console.log(reqBody);
    const response = await updateCategoryApi(selectedCategory.id, reqBody)
    console.log(response);
    setDragOut(true)
  }


  
  useEffect(()=>{getAllVideo()},[addVidStatus,deleteVideoStatus])

  return (
    <>
      <div className="row" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <h4>All Videos</h4>
        
        {
        allVideo?
        allVideo?.map((item)=>
        <div className="col-md-3 mt-4">
          <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
        </div>)
        :
        <p className='text-danger fs-4 m-5'>No Videos Available</p>
        }
        
      </div>
    </>
  )
}

export default View