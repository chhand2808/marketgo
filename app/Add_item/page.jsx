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
  const [SP, setSP] = useState('');

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
        setMonthly('');
        setCP('');
        setSP('');
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
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Item Name" />
              <label htmlFor="itemName" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Item Name</label>
            </div>
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="text" value={Season} onChange={(e) => setSeason(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Season" />
              <label htmlFor="Season" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Season</label>
            </div>
            {/* SeasonId */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={SeasonId} onChange={(e) => setSeasonId(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Season ID" />
              <label htmlFor="SeasonId" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Season ID</label>
            </div>
            {/* Aisle */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={aisle} onChange={(e) => setAisle(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Aisle" />
              <label htmlFor="aisle" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Aisle</label>
            </div>
            {/* Category */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Category" />
              <label htmlFor="category" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Category</label>
            </div>
            {/* Content */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Content" />
              <label htmlFor="content" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Content</label>
            </div>
            {/* Image URL */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="text" value={img} onChange={(e) => setImageURL(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Image URL" />
              <label htmlFor="img" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Image URL</label>
            </div>
            {/* Quantity */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Quantity" />
              <label htmlFor="quantity" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Quantity</label>
            </div>
            {/* Review */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={review} onChange={(e) => setReview(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Review" />
              <label htmlFor="review" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Review</label>
            </div>
            {/* Monthly */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={Monthly} onChange={(e) => setMonthly(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Monthly" />
              <label htmlFor="Monthly" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Monthly</label>
            </div>
            {/* Cost Price */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={CP} onChange={(e) => setCP(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Cost Price" />
              <label htmlFor="CP" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Cost Price</label>
            </div>
            {/* Selling Price */}
            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
              <input type="number" value={SP} onChange={(e) => setSP(e.target.value)} className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Selling Price" />
              <label htmlFor="SP" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Selling Price</label>
            </div>
            {/* Submit Button */}
            <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Add Item</button>
          </form>
        </div>
      </div>
    </div>
  );
}
