"use client";

import React, { useState } from 'react';
import { IoPersonCircle } from "react-icons/io5";
import LoginModal from '../auth/modals/LoginModal';
import RegisterModal from '../auth/modals/RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { reset_auth } from '@/store/slices/login';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.login);
    const [open, setOpen] = useState({
        login: false,
        register: false
    });
    const [dropdown, setDropdown] = useState(false);
    const handleAccount = () => {
        if(isLoggedIn){
            setDropdown((prev) => !prev);
        } else {
            setOpen({ login: true, register: false });
        }
    }

    return (
        <div className='py-4 px-8 flex justify-center border-b border-b-[rgba(84,84,84,0.3)]'>
            <div className='w-full flex justify-between items-center max-w-screen-xl'>
                <Link href={"/"} className=''>
                    <Image className='object-cover w-32' width={100} height={100} src={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg"}/>
                </Link>
                <div className='relative'>
                    <input placeholder="Search here..." className='w-[400px] text-sm outline-none border border-[rgba(84,84,84,0.3)] px-4 py-2 rounded-lg' />
                    {/* <div className='bg-white px-4 py-4 absolute top-[100%] w-[350px] rounded-lg'>

                    </div> */}
                </div>
                <div>
                    <div className='relative'>
                        <IoPersonCircle onClick={handleAccount} className='cursor-pointer' size={24} />
                        {(dropdown && isLoggedIn) && <div className='absolute right-0 px-4 py-1 drop-shadow-lg rounded-lg bg-[rgba(255,255,255)]'>
                            <button onClick={() => {
                                dispatch(reset_auth());
                                setDropdown(false);
                            }} className='text-xs'>Logout</button>
                        </div>}
                    </div>
                    <LoginModal open={open.login} openRegister={() => setOpen({ login: false, register: true })} handleClose={() => setOpen({ login: false, register: false })} />
                    <RegisterModal open={open.register} openLogin={() => setOpen({ login: true, register: false })} handleClose={() => setOpen({ login: false, register: false })} />
                </div>
            </div>
        </div>
    );
}