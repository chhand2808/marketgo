"use client"
import {DataSnapshot, get, ref} from 'firebase/database';
import Navbar from '@/components/Navbar'
import React from 'react'
import { useEffect,useState } from 'react';
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
  return (
    <>   
        <div className="sticky top-0">
        <Navbar/>
      </div>
        <div>
          {items.map((items) => (
             <div key={items.id}>
              <h2>{items.id}</h2>
             </div>
          ))}
        </div>
    </>
  )
}
