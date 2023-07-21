import React from 'react'
import Social from './social/Social'
import Contract from './contract/Contract'

export default function Footer() {
  return (
    <footer className='w-full h-auto px-6 p-10 bg-zinc-950 text-zinc-100 flex justify-center items-center flex-col gap-14'>
        <div className='flex justify-between w-full'>
            <Contract/>
            <h1 className='text-white text-2xl font-bold'>Sneakers</h1>
            <Social/>
        </div>
        <h1 className='text-center text-sm'>2023&copy; Todos los derechos reservados</h1>
    </footer>
  )
}
