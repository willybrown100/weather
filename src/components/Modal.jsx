import React from 'react'
import { HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import useLogout from './useLogout';
import MiniLoader from './miniLoader';

export default function Modal() {
      const { mutate,isPending } = useLogout();
      const handleLogOut = function(){
        mutate()
      }
  return (
    

    <div className='flex gap-x-2 bg-white shadow-xl items-center p-4 rounded-lg'>
      <HiArrowRightEndOnRectangle />

      <button className='capitalize cursor-pointer' onClick={mutate}>{isPending?<MiniLoader/>:"logout"}</button>
    </div>
   
  );
}
