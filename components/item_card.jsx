import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Item_card({ itemPic, itemName, itemPrice }) {
  return (
    <Card className="min-w-[20%] h-full">
      <CardHeader>
        <Image
          src={itemPic}
          width={100}
          height={100}
          className='rounded-md w-fit'
        />
        <CardTitle>{itemName}</CardTitle>
        <CardDescription>Price : {itemPrice}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
