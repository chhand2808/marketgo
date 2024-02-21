import React from 'react';
import Image from 'next/image';
import { FaRegStar,FaCloudRain,FaRegSnowflake,FaSun } from "react-icons/fa";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Item_card({ itemPic, itemName, itemPrice, itemContent, itemReview, itemSeason }) {
  return (
    <Card className="min-w-[45vh] md:min-w-[23%] w-full min-h-[80vh] hover:shadow-lg hover:shadow-black hover:scale-[1.02] transition duration-300">
      <CardHeader className='pb-2'>
        <div className='w-32 h-12 bg-orange-500 absolute text-center align-middle items-center my-auto right-0 top-0 rounded-tr-lg rounded-bl-lg'>
          <div className='flex flex-row'>
            <h1 className='text-lg font-extrabold p-2 text-white align-middle items-center'>{itemSeason}</h1>
            {itemSeason=='Summer'?<FaSun className='text-lg font-extrabold mt-3 text-white align-middle items-center'/>:itemSeason=='Rainy'?<FaCloudRain className='text-lg font-extrabold mt-3 text-white align-middle items-center'/>:<FaRegSnowflake className='text-lg font-extrabold mt-3 text-white align-middle items-center'/>}
          </div>
        </div>
        <div className='flex align-middle justify-center items-center'>
          <img
            src={itemPic}
            width={100}
            height={100}
            className='rounded-md w-fit max-w-[30vh] min-h-[35vh] max-h-[35vh]'
          />
        </div>
        <CardTitle>{itemName}</CardTitle>
        <CardDescription>Price : {itemPrice}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col justify-evenly min-h-[15vh] pb-0'>
        <h2>{itemContent}</h2>
        <br />
        <div className='flex flex-row gap-2 align-middle items-center'>{itemReview}<FaRegStar/></div>
      </CardContent>
      <CardFooter className='gap-4'>
        {/* <button className= 'bg-green-300 rounded-md px-2 py-1 hover:text-white hover:bg-green-800 transition duration-500'>Add to Cart</button>
        <button className= 'bg-blue-300 rounded-md px-2 py-1 hover:text-white hover:bg-blue-800 transition duration-500'>Buy Now</button> */}
      </CardFooter>
    </Card>
  );
}