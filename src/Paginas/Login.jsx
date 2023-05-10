import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-fundo-sm h-[750px] bg-cover '>
      <div className='w-full text-center'>
        <p className='text-white pt-10 text-4xl'>Uper<span className='text-[#FF9C09]'>Bank</span></p>
      </div>
      <div className='ml-[37.5%] mt-20 text-4xl text-white'>
        Login
      </div>
      <div className='flex flex-col m-auto w-[25%] gap-12 mt-20'>
        <input type="e-mail" placeholder='E-mail' className='bg-transparent border-b text-white'/>
        <input type="text" placeholder='Senha'  className='bg-transparent border-b text-white'/>
        <button className='bg-[#FF9C09] text-white h-10'><Link to="/">Login</Link></button>
      </div>
      <div className='ml-[37.5%] mt-5 text-xl text-white'>
        Não tem uma conta?<Link to="/cadastro" className='text-[#FF9C09]'> Cadastre-se</Link>
      </div>
    </div>
  )
}

export default Login