"use client"

import React, { useState,useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { set, ref, get, getDatabase, DataSnapshot, child, update } from 'firebase/database';
import { database } from '@/lib/firebase';

export default function Page() {

    const [aisleCost, setAisleCost] = useState([]);

    useEffect(() => {
        const aisleCostRef = ref(database, 'aislecost');

        get(aisleCostRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const aisleCostData = snapshot.val();
                    setAisleCost(aisleCostData);
                    console.log('Aisle Cost Data:', aisleCostData);
                } else {
                    console.log('No aisle cost data available');
                }
            })
            .catch((error) => {
                console.error('Error fetching aisle cost data:', error);
            });
    }, []);

    const [itemName, setItemName] = useState('');

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    };

    const allotItem = async (position) => {
        try {
            // Check if itemName is not empty
            if (!itemName) {
                alert('Please enter an item name')
                console.log('Please enter an item name');
                return;
            }

            // Retrieve the current value of the item's aisle property
            const aisleRef = ref(database, `items/${itemName}/aisle`);
            set(aisleRef,position)
            alert(`updated item : ${itemName} to position : ${position}`)
            console.log(`updated item : ${itemName} to position : ${position}`)
            setItemName("")
        } catch (error) {
            alert(error)
            console.error('Error updating aisle:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call allotItem function with the provided position when the form is submitted
        allotItem();
    };

    const renderInnerFlexRow = () => {
        const items = Array.from({ length: 8 }, (_, index) => index + 1); // Create an array with 8 elements
        return items.map((item) => (
            <div key={item} className='flex flex-row gap-5'>
                <button onClick={() => allotItem(item)} className='w-20 h-20 bg-red-600'>A{item}</button>
                <button onClick={() => allotItem(item + 10)} className='w-20 h-20 bg-blue-600'>B{item + 10}</button>
            </div>
        ));
    };

    const renderInnerFlexRow2 = () => {
        const items = Array.from({ length: 8 }, (_, index) => index + 1); // Create an array with 8 elements
        return items.map((item) => (
            <div key={item} className='flex flex-row gap-5'>
                <button onClick={() => allotItem(item + 20)} className='w-20 h-20 bg-blue-600'>B{item + 20}</button>
                <button onClick={() => allotItem(item + 30)} className='w-20 h-20 bg-red-600'>A{item + 30}</button>
            </div>
        ));
    };

    return (
        <>
            <div className='sticky top-0 z-10'>
                <Navbar />
            </div>
            <div className="flex flex-row items-center align-middle justify-center p-5">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="itemName">Enter Item Name : </label>
                    <input name='itemName' className='border-2 border-solid border-slate-500 rounded-md' type="text" value={itemName} onChange={handleInputChange} placeholder="Enter item name" />
                </form>
            </div>
            <div className='text-center text-3xl font-bold my-3'>
                <h1>Aisle Cost is : {aisleCost}</h1>
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col gap-5 p-10'>
                    {renderInnerFlexRow()} {/* Render the inner flex row 8 times */}
                </div>
                <div className='flex flex-col gap-5 p-10'>
                    {renderInnerFlexRow2()} {/* Render the inner flex row 8 times */}
                </div>
            </div>
        </>
    );
}
