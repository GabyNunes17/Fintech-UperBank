import React from 'react'
import { Link } from 'react-router-dom'

const Cadastro = () => {
  return (
    <div className='bg-fundo-sm h-[900px] bg-cover '>
        <div className='w-full text-center'>
            <p className='text-white pt-10 text-4xl'>Uper<span className='text-[#FF9C09]'>Bank</span></p>
        </div>
        <div className='ml-[37.5%] mt-20 text-4xl text-white'>
            Abra sua conta digital
        </div>
        <div className='flex flex-col m-auto w-[25%] gap-12 mt-20'>
            <input type="text" placeholder='Digite seu nome' className='bg-transparent border-b text-white'/>
            <input type="text" placeholder='Digite seu telefone' className='bg-transparent border-b text-white'/>
            <input type="email" placeholder='Digite seu E-mail' className='bg-transparent border-b text-white'/>
            <input type="text" placeholder='Digite seu CPF' className='bg-transparent border-b text-white'/>
            <input type="date" placeholder='Data nascimento' className='bg-transparent border-b text-white'/>
            <input type="text" placeholder='Senha'  className='bg-transparent border-b text-white'/>
            <button className='bg-[#FF9C09] text-white h-10'><Link to="/">Cadastre-se</Link></button>
        </div>
        <div className='ml-[37.5%] mt-5 text-lg text-white'>
           <input type="checkbox" name="" id="" ></input> Autorizo o Uper a tratar meus dados pessoais <br />   para envio de comunicações <span className='text-[#FF9C09]'>Política de Privacidade.</span> 
        </div>
  </div>
  )
}

export default Cadastro