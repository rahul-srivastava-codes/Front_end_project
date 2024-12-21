import React from 'react'

function Navbar() {
  return (
    <> 
      <div>
          <nav className='h-full w-[15%] bg-zinc-200 flex flex-col items-center py-5'>
            <a href="/create" className='py-3 px-5 border rounded border-blue-200 text-blue-400'>Add New Product</a>
            <hr className='my-3 w-[80%]'/>
            <h1 className='text-2xl'>Category Filter</h1>
            <ul className='w-[80%]'>
              <li className='flex items-center mb-3'>
                <span className='rounded-full mr-2 w-[10px] h-[10px] bg-red-500'></span>cat 1
              </li>
              <li className='flex items-center mb-3'>
                <span className='rounded-full mr-2 w-[10px] h-[10px] bg-red-500'></span>cat 2
              </li>
              <li className='flex items-center mb-3'>
                <span className='rounded-full mr-2 w-[10px] h-[10px] bg-red-500'></span>cat 3
              </li>
              <li className='flex items-center mb-3'>
                <span className='rounded-full mr-2 w-[10px] h-[10px] bg-red-500'></span>cat 4
              </li>
            </ul>
          </nav>
      </div>
    </>
  )
}

export default Navbar
