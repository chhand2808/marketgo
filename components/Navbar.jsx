"use client"

import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/img/logo3.png';
import { IoHome, IoCartOutline } from 'react-icons/io5';
import { LiaProductHunt } from 'react-icons/lia';
import { FiPackage } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const CurrentPage = usePathname();
    return (
        <>
            <div className='flex flex-row sticky w-full h-24 bg-[#5E503F] align-middle items-center justify-left'>
                <Image src={logo} width={200} height={200} />
                <div className='flex flex-row space-x-10 ml-[60vh]'>
                    <NavLink href="/" icon={<IoHome />} text="Home" currentPage={CurrentPage} />
                    <NavLink href="/Products" icon={<LiaProductHunt />} text="Products" currentPage={CurrentPage} />
                    <NavLink href="/Cart" icon={<IoCartOutline />} text="Cart" currentPage={CurrentPage} />
                    <NavLink href="/Orders" icon={<FiPackage />} text="Your Orders" currentPage={CurrentPage} />
                </div>
            </div>
        </>
    );
}

function NavLink({ href, icon, text, currentPage }) {
    const isActive = currentPage === href;

    return (
        <a className={`flex items-center align-middle gap-2 font-bold text-[#F2F4F3] text-xl hover:text-blue-300 transition duration-300 
            ${isActive ? 'text-blue-500' : ''}`}
            href={href}>
            {icon}
            {text}
        </a>
    );
}
