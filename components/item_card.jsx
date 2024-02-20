import React from 'react'
import { Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent } from '@/components/ui/card';

export default function Item_card() {
  return (
    <>
        <Card className="min-w-[20%]">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
        </Card>
    </>
  )
}
