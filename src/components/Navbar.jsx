import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'
const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-5 px-5 md:px-10'>
      <nav className='flex w-full screen-max-width  '>
          <img src={appleImg} alt="" width={14} height={18} />
      <div className='flex justify-center flex-1 max-sm:hidden'>
          {
               navLists.map((item) => {
                    return (
                         <div key={item} className='px-5  text-sm cursor-pointer text-gray hover:text-white transition-all '>{item}</div>
                    )
               })
          }
      </div>
      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="" width={18} height={18}/>
          <img src={bagImg} alt="" width={18} height={18}/>

      </div>
      </nav>

    </header>
  )
}

export default Navbar
