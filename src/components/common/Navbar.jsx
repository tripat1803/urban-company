import React, { useEffect, useState } from 'react';
import { IoPersonCircle } from "react-icons/io5";
import LoginModal from '../auth/modals/LoginModal';
import RegisterModal from '../auth/modals/RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { reset_auth } from '@/store/slices/login';

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
            <div className='w-full flex items-center max-w-screen-xl'>
                <div className='flex-1'></div>
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