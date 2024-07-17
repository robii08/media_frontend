import React, { useState } from 'react'
import Add from "../components/Add"
import View from "../components/View"
import Category from "../components/Category"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons/faClockRotateLeft'
import { Link } from 'react-router-dom'

function Home() {
  const [addVidStatus, setAddVidStatus] = useState([])
  const [dragOut,setDragOut] = useState(false)
  return (
    <>
      <div className="d-flex p-5">
        <Add setAddVidStatus=
        {setAddVidStatus}/>
        <h5 className='ms-auto mt-3 '><Link to={'/history'} style={{textDecoration:'none'}} className='text-secondary'><span className='hide'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
      </div>

      <div className="row w-100 p-4">
        <div className="col-md-9">
          <View addVidStatus={addVidStatus} setDragOut={setDragOut}  />
        </div>
        <div className="col-md-3 px-5">
          <Category dragOut={dragOut} setDragOut={setDragOut} />
        </div>
      </div>
    </>
  )
}

export default Home