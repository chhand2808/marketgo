import Navbar from '@/components/Navbar'
import React from 'react'
import shelf11 from '@/public/assets/img/shelf11.png'
import shelfL from '@/public/assets/img/shelfL.png'
import shelfU from '@/public/assets/img/shelfU.png'
import Image from 'next/image'


export default function page() {
  return (
    <>
    <div className='sticky top-0 z-10'>
    <Navbar/>
    </div>
    <div className='flex flow-row justify-evenly w-full h-[80vh] my-auto items-center align-middle'>
        <div className='w-[40vh] h-[40vh] border border-solid bg-red-200 rounded-xl p-4'>
            <a href="/Aisle/1">
            <Image
            src={shelf11}
            className='w-full h-full rounded-lg'
            />
            </a>
        </div>
        <div className='w-[40vh] h-[40vh] border border-solid bg-red-200 rounded-xl p-4'>
            <a href="/Aisle/2">
            <Image
            src={shelfL}
            className='w-full h-full rounded-lg'
            />
            </a>
        </div>
        <div className='w-[40vh] h-[40vh] border border-solid bg-red-200 rounded-xl p-4'>
            <a href="/Aisle/3">
            <Image
            src={shelfU}
            className='w-full h-full rounded-lg rotate-180'
            />
            </a>
        </div>
    </div>
    </>
  )
}
