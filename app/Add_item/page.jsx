"use client"
import React, { useState } from 'react';
import { set, ref } from 'firebase/database';
import { database } from '@/lib/firebase';

export default function Page() {
  const [itemName, setItemName] = useState('');
  const [Season, setSeason] = useState('');
  const [SeasonId, setSeasonId] = useState('');
  const [aisle, setAisle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [img, setImageURL] = useState('');
  const [quantity, setQuantity] = useState('');
  const [review, setReview] = useState('');
  const [Monthly, setMonthly] = useState('');
  const [CP, setCP] = useState('');
  const [SP,setSP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      Season,
      SeasonId,
      aisle,
      category,
      content,
      img,
      Monthly,
      CP,
      SP,
      quantity,
      review
    };

    const itemsRef = ref(database, `items/${itemName}`); 

    set(itemsRef, newItem) 
      .then(() => {
        console.log('Item added successfully');
        setItemName('');
        setSeason('');
        setSeasonId('');
        setAisle('');
        setCategory('');
        setContent('');
        setImageURL('');
        setQuantity('');
        setReview('');
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div>
        <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">Add Item</h1>
        <div className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
            <input type="text" value={Season} onChange={(e) => setSeason(e.target.value)} placeholder="Season" />
            <input type="text" value={SeasonId} onChange={(e) => setSeasonId(e.target.value)} placeholder="Season ID" />
            <input type="text" value={aisle} onChange={(e) => setAisle(e.target.value)} placeholder="Aisle" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <input type="text" value={img} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
            <input type="number" value={SP} onChange={(e) => setSP(e.target.value)} placeholder="SP" />
            <input type="number" value={CP} onChange={(e) => setCP(e.target.value)} placeholder="CP" />
            <input type="number" value={Monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="Monthly" />
            <input type="number" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Review" />
            <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Add Item</button>
          </form>
        </div>
      </div>
    </div>
  );
}
