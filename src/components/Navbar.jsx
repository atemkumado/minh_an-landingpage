import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMenuMobile, setShowMenuMobile] = React.useState(false);
  React.useEffect(() => {
    if (showMenuMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showMenuMobile]);
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <div><img src={assets.logo_no_text} alt="" className='w-20' /><span className='text-white font-semibold pl-3'>Minh An</span></div>
            <ul className='hidden md:flex gap-7 text-white'>
                <a
                  href='#About'
                  className='cursor-pointer hover:text-gray-400 rounded-full px-5 py-2 transition hover:bg-white/10'
                >
                  Giới thiệu
                </a>
                <a
                  href='#Service'
                  className='cursor-pointer hover:text-gray-400 rounded-full px-5 py-2 transition hover:bg-white/10'
                >
                  Dịch vụ
                </a>
                <a
                  href='#Projects'
                  className='cursor-pointer hover:text-gray-400 rounded-full px-5 py-2 transition hover:bg-white/10'
                >
                  Dự án
                </a>
            </ul>
            <img onClick={()=>setShowMenuMobile(true)} src={assets.menu_icon} alt="menu" className='md:hidden w-7 cursor-pointer' />
        </div>        
        {/* Mobile menu */}
        <div className={`md:hidden ${showMenuMobile ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex justify-end p-6 cursor-pointer">
            <img  src={assets.cross_icon} className='w-6' alt="" onClick={()=>setShowMenuMobile(false)} />
          </div>
          <ul className='flex flex-col items-center justify-center gap-2 mt-2 px-6 text-lg font-medium '>
              <a  onClick={()=>setShowMenuMobile(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>Giới thiệu</a>
              <a  onClick={()=>setShowMenuMobile(false)} href="#Service" className='px-4 py-2 rounded-full inline-block'>Dịch vụ</a>
              <a  onClick={()=>setShowMenuMobile(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Dự án</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar