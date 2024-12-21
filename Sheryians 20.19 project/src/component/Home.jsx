import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {ProductContext} from '../utils/Context'
import Loading from './Loading'

function Home () {

  const [products] = useContext(ProductContext)
  console.log(products)

  return products ?(
    <>
      <div className='h-screen w-screen flex'>
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
          <div className='w-[80%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
            {products.map((p, i) => (
              <Link to={'/details/${p.id}'} className='h-full w-[85%] bg-red-600 p-5 pt-[5%]'>
               <div className='ccard p-3 border shadow rounded w-[18%] h-[25vh] flex-col flex justify center items-center'>
                 <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center' style={{
                   backgroundImage: `url(${p.image})`,
                 }}></div>
                 <h1 className='hover:text-blue-600'>{p.title}</h1>
               </div>
           </Link>
            ))}
          </div>

       
      </div>
    </>
  ) : (
    <Loading/>
  )
}

export default Home



       
      