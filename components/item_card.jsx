import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Item_card({ itemPic, itemName, itemPrice }) {
  return (
    <Card className="min-w-[45vh] md:min-w-[23%] w-full h-full hover:shadow-lg hover:shadow-black hover:scale-[1.02] transition duration-300">
      <CardHeader>
        <div className='flex align-middle justify-center items-center'>
          <img
            src={itemPic}
            width={100}
            height={100}
            className='rounded-md w-fit max-w-[30vh] min-h-[40vh] max-h-[50vh]'
          />
        </div>
        <CardTitle>{itemName}</CardTitle>
        <CardDescription>Price : {itemPrice}</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className='gap-4'>
        <button className= 'bg-green-300 rounded-md px-2 py-1 hover:text-white hover:bg-green-800 transition duration-500'>Add to Cart</button>
        <button className= 'bg-blue-300 rounded-md px-2 py-1 hover:text-white hover:bg-blue-800 transition duration-500'>Buy Now</button>
      </CardFooter>
    </Card>
  );
}