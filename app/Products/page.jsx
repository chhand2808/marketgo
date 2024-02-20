"use client"

import Image from 'next/image';
import {DataSnapshot, get, ref} from 'firebase/database';
import Item_card from '@/components/item_card';
import React , { useState,useEffect } from 'react'
import Navbar from '@/components/Navbar';
import {database} from '@/lib/firebase';

export default function page() {

    const [items,setItems] = useState([]);
    useEffect(() => {
      const usersRef = ref(database,'items');
      get(usersRef).then((DataSnapshot) => {
        if(DataSnapshot.exists()) {
          const userArray = Object.entries(DataSnapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setItems(userArray);
        }
        else{
          console.log('No data available')
        }
  
      }).catch((error) => {
        console.error(error);
      });
    }, []);
   
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
    <div className="sticky top-0 z-10">
        <Navbar/>
      </div>
    <div className='flex flex-col gap-5'>
        <div className='p-5 bg-red-400'>
            <div className='flex flex-row justify-between'>
                <h1 className='pl-5 text-4xl font-extrabold text-orange-900 border-text-3'>Popular Products</h1>
            </div>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                        {/* Map through the Items array and render each Item_card */}
                        {items.sort((a,b) => b.review - a.review).map((item,index) => (
                          <Item_card 
                          key={index} 
                          itemName={item.id} 
                          itemPrice={item.CP} 
                          itemReview={item.review} 
                          itemPic={item.img} 
                          itemContent={item.content}
                          itemSeason={item.Season}
                        />
                        ))} 
                            {/* unmapped items */}
                            <a href='/Add_item'>
                                <Item_card itemName={'Add New'} itemPic={'/assets/img/add_icon.png'}/>
                            </a>
            </div>
        </div>
        <div className='p-5 bg-yellow-300'>
            <h1 className='pl-5 text-4xl text-red-600 font-extrabold'>Seasonal Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                           {items.sort((a,b) => a.Seasonid - b.Seasonid).map((item,index) => (
                            <Item_card 
                            key={index} 
                            itemName={item.id} 
                            itemPrice={item.CP} 
                            itemReview={item.review} 
                            itemPic={item.img} 
                            itemContent={item.content}
                            itemSeason={item.Season}
                          />
                          ))}  
            </div>
        </div>
        <div className='p-5 bg-lime-400'>
            <h1 className='pl-5 text-4xl font-extrabold text-green-950'>Recommended Products</h1>
            <div className='flex flex-row p-5 w-full gap-5 overflow-x-auto'>
                           {items.sort((a,b) => a.Monthly - b.Monthly).reverse().map((item,index) => (
                            <Item_card 
                            key={index} 
                            itemName={item.id} 
                            itemPrice={item.CP} 
                            itemReview={item.review} 
                            itemPic={item.img} 
                            itemContent={item.content}
                            itemSeason={item.Season}
                          />
                          ))}  
            </div>
        </div>
    </div>
    </>
  );
};
