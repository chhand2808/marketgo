"use client"

import React,{useState,useEffect} from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from '@/public/assets/img/hero.jpg'
import brocoli from "@/public/assets/img/brocoli.jpg"
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";
import tree from '@/public/assets/img/tree.jpg'
import Item_card from "@/components/item_card";
import {DataSnapshot, get, ref} from 'firebase/database';
import {database} from '@/lib/firebase';


export default function Home() {

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

  return (
    <>
      <div className="sticky top-0 z-10 ">
        <Navbar/>
      </div>
      <div>
        <Image
          src={hero}
          className="w-fit"
        />
        <div className="text-[60px] font-extrabold text-white absolute top-[40vh] left-[20vh] border-text-2">
          <h1>Welcome to <span className="text-yellow-500">MarketGo</span></h1>
          <h3>Your Ready to Go Market Platform</h3>
        </div>
      </div>
      <div className="flex flex-col bg-slate-200 rounded-lg gap-5 m-10 mt-5 p-10 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-5">Deal of the Day</h1>
          <div className="flex flex-row gap-5">
          {items.sort((a,b) => a.Seasonid - b.Seasonid).slice(0,3).map((item)=>(
            <>
              <Item_card itemName={item.id} itemPic={item.img} itemSeason={item.Season} itemPrice={item.CP} itemReview={item.review}/>
            </>
          ))}
          </div>
      </div>
      <div className="flex flex-col">
        <Image
        src={tree}
        className="w-full h-full"/>

        <div className="flex flex-col absolute w-[70%] mt-[20vh] left-[45vh] text-center">
          <h1 className="text-[60px] font-extrabold text-yellow-500 mb-10 border-text-2">Seasonal Picks</h1>
          <div className="flex flex-row  gap-10">
          {items.sort((a,b) => a.Seasonid - b.Seasonid).slice(0,3).map((item,index)=>(
            <>
              <Item_card itemName={item.id} itemPic={item.img} itemSeason={item.Season} itemPrice={item.CP} itemReview={item.review}/>
            </>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
