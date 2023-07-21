import React from 'react'
import { PiShoppingCartSimple } from 'react-icons/pi';

export default function DataUser() {
  return (
    <section className='flex justify-end items-center gap-4'>
        <button className='w-12 h-12 rounded-full p-2 flex justify-end items-start'>
            <div className='w-3 h-3 bg-red-600 rounded-full absolute'></div>
            <PiShoppingCartSimple className="w-full h-auto text-zinc-700" />
        </button>
        <button className='flex justify-start items-center'>
          <div className='w-12 h-12 bg-center bg-cover border-2 border-green-600 rounded-full flex justify-center items-center text-white' style={{ backgroundImage: `url(https://assets.adidas.com/images/w_600,f_auto,q_auto/bd43ce71f589498ab6b1aad6009a0e6e_9366/Superstar_Shoes_White_EG4958_07_standard.jpg)` }}>
          </div>
        </button>
    </section>
  )
}
