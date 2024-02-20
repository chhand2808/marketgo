import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Item_card({ itemPic, itemName, itemPrice, itemContent }) {
  return (
    <Card className="min-w-[45vh] md:min-w-[23%] w-full h-full">
      <CardHeader>
        <div className='flex align-middle justify-center items-center'>
          <Image
            src={itemPic}
            width={130}
            height={100}
            className='rounded-md w-fit'
          />
        </div>
        <CardTitle>{itemName}</CardTitle>
        <CardDescription>Price : {itemPrice}</CardDescription>
      </CardHeader>
      <CardContent>
        {itemContent}
      </CardContent>
      <CardFooter className='gap-4'>
        <button className= 'bg-green-300 rounded-md px-2 py-1 hover:text-white hover:bg-green-800 transition duration-500'>Add to Cart</button>
        <button className= 'bg-blue-300 rounded-md px-2 py-1 hover:text-white hover:bg-blue-800 transition duration-500'>Buy Now</button>
      </CardFooter>
    </Card>
  );
}
