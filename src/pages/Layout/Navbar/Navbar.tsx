import React from 'react'
import Search from './Search/Search'
import DataUser from './DataUser/DataUser'

export default function Navbar() {
  return (
    <div className='w-full p-4 h-auto flex justify-between items-center'>
        <Search />
        <DataUser />
    </div>
  )
}
