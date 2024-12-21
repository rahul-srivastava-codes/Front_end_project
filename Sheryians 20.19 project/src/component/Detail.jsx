import React from 'react'
import { Link } from 'react-router-dom'

function Detail() {
  return (
    <div>
      <div className='w-[70%] h-[100%] flex items-center justify-center  bg-red-100 m-auto p-[10%]'>
        <img className='w-[30%] h-[20%] contain rounded-lg m-3' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='content'>
          <h1>Title</h1>
          <h2>Prices</h2>
          <p>description</p>
          <Link>Edit</Link>
          <Link>Delete</Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
