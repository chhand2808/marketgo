"use client"

import React,{useState} from 'react';
import Image from 'next/image';
import logo from '@/public/assets/img/logo3.png';
import { IoHome, IoCartOutline, IoClose } from 'react-icons/io5';
import { LiaProductHunt } from 'react-icons/lia';
import { FiPackage } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const CurrentPage = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <div className='flex flex-row sticky w-full h-20 bg-[#5E503F] align-middle items-center justify-left'>
                <Image src={logo} width={200} height={200} />
                <div className='md:flex hidden md:flex-row space-x-10'>
                    <NavLink href="/" icon={<IoHome />} text="Home" currentPage={CurrentPage} />
                    <NavLink href="/Products" icon={<LiaProductHunt />} text="Products" currentPage={CurrentPage} />
                    <NavLink href="/Cart" icon={<IoCartOutline />} text="Cart" currentPage={CurrentPage} />
                    <NavLink href="/Orders" icon={<FiPackage />} text="Your Orders" currentPage={CurrentPage} />
                </div>
                <div className='md:hidden relative ml-[30%]'>
                    <IoClose onClick={toggleMobileMenu} className='w-full text-[#F2F4F3] align-baseline items-end justify-self-end mb-4  scale-[2] hover:text-blue-500 cursor-pointer'/>
                    {isMobileMenuOpen && (
                        <div className='flex flex-col absolute right-[-4vh] top-10 bg-[#5E503F] p-5 rounded-lg'>
                            <NavLink href="/" icon={<IoHome />} text="Home" currentPage={CurrentPage} />
                            <hr />
                            <NavLink href="/Products" icon={<LiaProductHunt />} text="Products" currentPage={CurrentPage} />
                            <hr />
                            <NavLink href="/Cart" icon={<IoCartOutline />} text="Cart" currentPage={CurrentPage} />
                            <hr />
                            <NavLink href="/Orders" icon={<FiPackage />} text="Your Orders" currentPage={CurrentPage} />
                        </div>
                    )}
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
