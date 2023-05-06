import React from 'react'
import Celular  from '../../assets/celular.png'
import Cartao from '../../assets/cartao.png'
import Cash from '../../assets/cash.png'

const Meio = () => {
  return (
    <div className='bg-gradient-to-r from-[#1A1E27] to-[#112140] w-full h-[650px]'>
      <div className='flex gap-28'>
        <p className='text-white text-6xl w-96 ml-40 pt-40'>O banco que <span className='text-[#FF9C09]'>trabalha</span> para o seu sucesso <span className='text-[#FF9C09]'>financeiro</span></p>
        <div className='h-[550px]'>
            <img src={Celular} className='w-full h-full' />
        </div>
      </div>

      <div className='w-full h-[595px] bg-[Up] '>
          <div className='bg-white w-72 h-80 rounded-lg ml-40 mt-32 '>
            <p className='text-2xl p-10'> Peça seu cartão de crédito do Up<span className='text-[#FF9C09]'>Bank</span></p>
            <div className='flex flex-col space-y-8 m-5'>
              <input type="text" placeholder='Digite seu CPF' className='border rounded-2xl w-60 h-8 shadow-lg p-3'/>
              <button className='w-40 h-7 rounded-2xl bg-[#FF9C09] m-10'>Continuar</button>
            </div>
          </div>
          <p className='ml-[50%] text-white text-5xl pr-10 space-y-8 mt-20 p-20'>Seu patrimônio em boas mãos conte com a nossa solidez e credibilidade</p>
      </div>

      <div className='flex'>
        <div className='w-[50%]'>
          <img src={Cartao} className='w-full h-full'/>
        </div>
        <div className='w-[50%] mt-10'>
          <p className='text-4xl p-20'>Conquiste a <span className='text-[#FF9C09]'>liberdade</span> financeira com nosso cartão de <span className='text-[#FF9C09]'>crédito</span>. Vantagens exclusivas, facilidade e <span className='text-[#FF9C09]'>segurança</span>. Peça já o seu!</p>
          <button className='w-52 h-7 rounded-2xl border ml-48 shadow-lg  '>Quero ser um <span className='text-[#FF9C09]'>Uper</span></button>
        </div>
      </div>
      
      <div className='p-5'>
        <div className='flex'>
          <div className='w-[40%] space-y-8 pl-16'>
            <p className='text-4xl'>Uper<span className='text-[#FF9C09]'>Shop</span></p>
            <p className='text-2xl'>Com o <span className='text-[#FF9C09]'>Cashback</span> do nosso banco, suas compras rendem mais! Aproveite já essa <span className='text-[#FF9C09]'>vantagem</span> exclusiva.</p>

            <p className='flex flex-col text-xl w-full'>
              <span>• O melhor e mais rápido cashback do país</span>
              <span> • Mais de 900 lojas</span>
              <span> • Dezenas de categorias</span>
              <span> •Ofertas cumulativas com cashback</span>
            </p>
          </div>

          <div>
            <img src={Cash}/>
          </div>
        </div>
        <button className='w-40 h-7 rounded-2xl bg-[#FF9C09] ml-40'>Continuar</button>
      </div>
    </div>
  )
}

export default Meio