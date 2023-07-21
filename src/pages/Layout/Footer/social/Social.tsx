import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

export default function Social() {
  return (
    <section className='flex justify-start flex-col md:flex-row items-center gap-4'>
        <h1>follow us on social</h1>
        <span className='flex justify-start items-center gap-2'>
            <a href=""><AiOutlineInstagram className="w-5 h-auto" /></a>
            <a href=""><BiLogoFacebook className="w-5 h-auto" /></a>
            <a href=""><AiOutlineTwitter className="w-5 h-auto" /></a>
        </span>
    </section>
  )
}
