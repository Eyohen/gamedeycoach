import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import uba from '../assets/uba.png'
import gtb from '../assets/gtb.png'
import {
    MessageSquareMore,Ellipsis
} from 'lucide-react';

const GetPaid = () => {
  return (
    <div className='p-6 max-w-[1000px]'>
        <div className='flex justify-between'>
            <div className='border border-black px-4 py-2 rounded-lg border-r-[6px] border-b-[4px]'>
                <div className='flex gap-x-32 items-center'>
                    <div>
                <p>Available Balance</p>
                <p className='font-semibold text-2xl'>N150,000</p>
                </div>
                <div>
                <button className='border border-[#946BEF] text-[#946BEF] text-sm px-3 py-1 rounded-md'>Get Paid Now</button>
           </div>
            </div>
            </div>


                <div className='border border-black px-4 py-2 rounded-lg border-r-[6px] border-b-[4px]'>
                <div className='flex gap-x-32 items-center'>
                    <div>
                <p>Withdrawal Schedule</p>
                <p className='font-semibold text-2xl'>Weekly (next on May 21)</p>
                </div>
                <div>
<FiEdit2 color='#946BEF'/>
           </div>
            </div>
            </div>
        </div>


        <div className='flex justify-between mt-6'>
            <p>Withdrawal Accounts</p>
            <p className='text-[#946BEF]'>Add Account</p>
          
        </div>

          <div className='flex gap-x-6 mt-3'>
                <div className='border border-black rounded-xl bg-[#F3F1E0] p-3'>
                    <div className='flex justify-between pb-2'>
                    <p>Bank Details</p>
                    <Ellipsis/>
                    </div>
                    <div className='flex gap-x-2 pb-2'>
                    <img src={uba} className='w-5'/>
                    <p className='font-semibold text-xl'>United Bank of Africa</p>
                    <button className='border border-black rounded-full px-1'>Preferred</button>
                    </div>
                    <p>2076523647367</p>
                    <p>Abiodun Abayomi</p>
                </div>

                   <div className='border border-black rounded-xl bg-[#F3F1E0] p-3'>
                    <div className='flex justify-between pb-2'>
                    <p>Bank Details</p>
                    <Ellipsis/>
                    </div>
                    <div className='flex gap-x-2 pb-2'>
                    <img src={gtb} className='w-5'/>
                    <p className='font-semibold text-xl'>Guaranty Trust Bank</p>
                    <button className='border border-black rounded-full px-1'>Preferred</button>
                    </div>
                    <p>2076523647367</p>
                    <p>Abiodun Abayomi</p>
                </div>
            </div>
    </div>
  )
}

export default GetPaid