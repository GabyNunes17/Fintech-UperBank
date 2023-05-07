import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=''>
        <div className='w-full h-12 flex justify-between items-center'>
            <div className='flex gap-32 ml-40'>
                <p className=''>Uper<span className=' text-[#FF9C09]' >Bank</span></p>
                <div className='flex gap-10'>
                    <Link to='/'>Home</Link>
                    <Link to="">Pra você</Link>
                    <p>Empresa</p>
                </div>
            </div>
            <div className='pr-20'>
                <Link to='/login' className=' text-[#FF9C09] flex items-center gap-2'>Login<FiLogIn/></Link>
            </div>
        </div>
    </div>
  )
}

export default Header