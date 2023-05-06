import React from 'react'
import Celular  from '../../assets/celular.png'
import Up from '../../assets/up.png'

const Meio1 = () => {
  return (
    <div className='bg-gradient-to-r from-[#1A1E27] to-[#112140] w-full h-[560px]'>
      <div className='flex gap-28'>
        <p className='text-white text-6xl w-96 ml-40 pt-40'>O banco que <span className='text-[#FF9C09]'>trabalha</span> para o seu sucesso <span className='text-[#FF9C09]'>financeiro</span></p>
        <div className='h-[550px]'>
            <img src={Celular} className='w-full h-full' />
        </div>
      </div>
      <div className='w-full h-[650px] mb-36  ' >
        <img src={Up} className='w-full h-full absolute z' />
          <div className='bg-white w-72 h-80  z-1 absolute rounded-lg ml-40 mt-32 '>
            <p className='text-2xl p-10'> Peça seu cartão de crédito do Up<span className='text-[#FF9C09]'>Bank</span></p>
            <div className='flex flex-col space-y-8 m-5'>
              <input type="text" placeholder='Digite seu CPF' className='border rounded-2xl w-60 h-8 shadow-lg p-3'/>
              <button className='w-40 h-7 rounded-2xl bg-[#FF9C09] m-10'>Continuar</button>
            </div>
          </div>
          <p className='absolute z-2 ml-[45%] text-white text-5xl pr-10'>Seu patrimônio em boas mãos conte com a nossa solidez e credibilidade</p>
      </div>
    </div>
  )
}

export default Meio1