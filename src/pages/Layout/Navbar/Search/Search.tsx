import React from 'react'
import { IoMdSearch } from 'react-icons/io';

export default function Search() {
  return (
    <form action="" className='w-full h-12 mr-2 flex justify-start items-center max-w-[40rem]'>
        <IoMdSearch className="text-zinc-400 w-5 h-auto absolute ml-3" />
        <input type="text" placeholder='Search sneakers' className='w-full h-full rounded-lg pl-10 pr-4 text-base border-[1px] border-zinc-300' name="" />
    </form>
  )
}
