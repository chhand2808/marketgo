"use client"

import Image from 'next/image';
import Item_card from '@/components/item_card';
import React , { useState,useEffect } from 'react'
import Navbar from '@/components/Navbar';

export default function page() {
   
  const Items = [
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"mango",
        "price":120,
        "content":"King of the fruits, available for this season",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"apple",
        "price":100,
        "content":"An apple a day keeps the doctor away",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"banana",
        "price":70,
        "content":"Freshly available throughout the year",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"strawberry",
        "price":120,
        "content":"Only available during winter season",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"banana",
        "price":70,
        "content":"Freshly available throughout the year",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"strawberry",
        "price":120,
        "content":"Only available during winter season",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"banana",
        "price":70,
        "content":"Freshly available throughout the year",
    },
    {
        "picUrl":'/assets/img/hero.jpg',
        "name":"strawberry",
        "price":120,
        "content":"Only available during winter season",
    },
  ]
    

  return (
    <>
    <div className="sticky top-0">
        <Navbar/>
      </div>
    <div className='flex flex-col gap-5'>
        <div className='p-5 bg-red-400'>
            <h1 className='pl-5 text-4xl font-extrabold text-orange-900'>Popular Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                        {/* Map through the Items array and render each Item_card */}
                        {Items.map((item, index) => (
                            <Item_card key={index} itemPic={item.picUrl} itemName={item.name} itemPrice={item.price} itemContent={item.content} />
                        ))}
            </div>
        </div>
        <div className='p-5 bg-yellow-300'>
            <h1 className='pl-5 text-4xl text-red-600 font-extrabold'>Seasonal Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
            {Items.map((item, index) => (
                            <Item_card key={index} itemPic={item.picUrl} itemName={item.name} itemPrice={item.price} itemContent={item.content} />
                        ))}
            </div>
        </div>
        <div className='p-5 bg-lime-400'>
            <h1 className='pl-5 text-4xl font-extrabold text-green-950'>Recommended Products</h1>
                <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                {Items.map((item, index) => (
                            <Item_card key={index} itemPic={item.picUrl} itemName={item.name} itemPrice={item.price} itemContent={item.content} />
                        ))}
                </div>
        </div>
    </div>
    </>
  );
};
