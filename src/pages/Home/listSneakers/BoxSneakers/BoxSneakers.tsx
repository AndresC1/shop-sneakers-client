import React from 'react'
import SneakersType from '../../../../types/SneakersType'
import { PiShoppingCartSimple } from 'react-icons/pi';

interface BoxSneakersProps {
    sneaker: SneakersType
}

export default function BoxSneakers({ sneaker }: BoxSneakersProps) {
  console.log(sneaker)
    return (
    <div className='w-full max-w-[20rem] border-[1px] border-zinc-200 p-4 rounded-xl flex justify-center items-start flex-col gap-4'>
        <div className='w-full h-auto py-1 px-2 border-l-4 border-l-green-600'>
            <h1 className='text-zinc-900 font-bold text-lg'>{sneaker.name}</h1>
            <h3 className='text-zinc-400 font-semibold'>{sneaker.brand}</h3>
        </div>
        <div className='bg-cover bg-center w-full h-52' style={{backgroundImage: `URL(${sneaker.images[0]})`}}></div>
        <section className='flex justify-between items-center w-full'>
            <span className='flex justify-center items-start flex-col'>
                <h3 className='text-zinc-400 font-semibold'>Price</h3>
                <h3 className='text-zinc-900 text-lg font-bold'>${sneaker.price}</h3>
            </span>
            <span className='flex justify-end items-center gap-2'>
                <div className='bg-cover bg-center w-10 h-10 border-[1px] border-zinc-100' style={{backgroundImage: `URL(${sneaker.images[1]})`}}></div>
                <div className='bg-cover bg-center w-10 h-10 border-[1px] border-zinc-100' style={{backgroundImage: `URL(${sneaker.images[2]})`}}></div>
            </span>
        </section>
        <h1 className='text-zinc-500 font-semibold'>{sneaker.gender}</h1>
        <button className='w-full bg-black text-white h-12 rounded-md font-semibold hover:bg-zinc-800 flex justify-center items-center gap-3'>
            <PiShoppingCartSimple className="w-5 h-5" />
            Add to Cart
        </button>
    </div>
  )
}
