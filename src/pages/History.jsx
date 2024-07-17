import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleXmark,faHouse} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getVideoHistoryApi } from '../../services/allApi'

function History() {
  const [allVideo, setAllVideo] = useState([])

  const getVideoHistory = async()=>
  {
    const result = await getVideoHistoryApi()
    if(result.status>=200 && result.status<300)
    {
      setAllVideo(result.data)
    }
  }

  const handleDeleteVideo = async(id) =>
  {
    await deleteVideoHistoryApi(id)
    getVideoHistory()
  }

  useEffect(()=>{getVideoHistory()},[])
  return (
    <>
      <div className="row w-100 my-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h4 className='text-center'>Watch History</h4>
          <div className='table-responsive'>
            {allVideo?.length>0?
              <table className='table mt-5'>
              <thead>
                <tr className='text-center'>
                  <th>Sl . No</th>
                  <th>Caption</th>
                  <th>Url</th>
                  <th>Time  Stamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                allVideo?.map((item,i)=>(
                <tr>
                  <td className='text-center'>{i+1}</td>
                  <td>{item.caption}</td>
                  <td className='text-center'><Link to={item.url} target='blank'>{item.url}</Link></td>
                  <td className='text-center'>{item.timestamp}</td>
                  <td className='text-center'><button className='bg-dark rounded-5 border-0' onClick={()=>handleDeleteVideo(item.id)}><FontAwesomeIcon icon={faCircleXmark} style={{color:'red'}} /></button></td>
                </tr>))}
                
                
                
              </tbody>
            </table>
            :
            <p className='text-danger text-center mt-5 fs-3'>No History Available</p>}
          </div>
          <h5 className='text-center mt-5'><Link to={'/home'} className='text-secondary' style={{textDecoration:'none'}}>Home <FontAwesomeIcon icon={faHouse} /></Link></h5>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  )
}

export default History