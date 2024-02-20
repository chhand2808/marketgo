import Image from 'next/image';
import Item_card from '@/components/item_card';
import React from 'react'
import Navbar from '@/components/Navbar';

export default function page() {
  return (
    <>
    <div className="sticky top-0">
        <Navbar/>
      </div>
    <div className='flex flex-col gap-5'>
        <div className='p-5 bg-slate-200'>
            <h1 className='pl-5 text-4xl font-extrabold text-orange-500'>Popular Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
            </div>
        </div>
        <div className='p-5 bg-yellow-300'>
            <h1 className='pl-5 text-4xl text-red-600 font-extrabold'>Seasonal Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
                <Item_card/>
            </div>
        </div>
        <div className='p-5 bg-lime-400'>
            <h1 className='pl-5 text-4xl font-extrabold text-green-950'>Recommended Products</h1>
                <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                    <Item_card/>
                </div>
        </div>
    </div>
    </>
  );
};
