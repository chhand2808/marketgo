"use client"

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { db } from '@/firebase';

export default function Page() {
    const [itemName, setItemName] = useState('');

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    };

    const allotItem = async (position) => {
        try {
            // Check if itemName is not empty
            if (!itemName) {
                console.log('Please enter an item name');
                return;
            }

            // Update the database with the aisle value for the corresponding item
            await db.collection('items').doc(itemName).update({
                aisle: position
            });

            console.log(`Successfully updated aisle for item ${itemName} to position ${position}`);
        } catch (error) {
            console.error('Error updating aisle:', error);
        }
    };

    const renderInnerFlexRow = () => {
        const items = Array.from({ length: 8 }, (_, index) => index + 1); // Create an array with 8 elements
        return items.map((item) => (
            <div key={item} className='flex flex-row gap-5'>
                <button onClick={() => allotItem(item)} className='w-20 h-20 bg-red-600'>A{item}</button>
                <button onClick={() => allotItem(item + 8)} className='w-20 h-20 bg-blue-600'>B{item + 8}</button>
            </div>
        ));
    };

    const renderInnerFlexRow2 = () => {
        const items = Array.from({ length: 8 }, (_, index) => index + 1); // Create an array with 8 elements
        return items.map((item) => (
            <div key={item} className='flex flex-row gap-5'>
                <button onClick={() => allotItem(item + 16)} className='w-20 h-20 bg-red-600'>A{item + 16}</button>
                <button onClick={() => allotItem(item + 24)} className='w-20 h-20 bg-blue-600'>B{item + 24}</button>
            </div>
        ));
    };

    return (
        <>
            <div className='sticky top-0 z-10'>
                <Navbar />
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col gap-5 p-10'>
                    {renderInnerFlexRow()} {/* Render the inner flex row 8 times */}
                </div>
                <div className='flex flex-col gap-5 p-10'>
                    {renderInnerFlexRow2()} {/* Render the inner flex row 8 times */}
                </div>
            </div>
            <div className="p-5">
                <input type="text" value={itemName} onChange={handleInputChange} placeholder="Enter item name" />
            </div>
        </>
    );
}
