//pages/GetPaid.jsx
import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import uba from '../assets/uba.png'
import gtb from '../assets/gtb.png'
import {
    MessageSquareMore, Ellipsis
} from 'lucide-react';

const GetPaid = () => {
  return (
    <div className='p-4 sm:p-6 max-w-none lg:max-w-[1000px] mx-auto'>
        {/* Main Balance and Schedule Cards - Mobile Responsive */}
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 lg:justify-between'>
            {/* Available Balance Card */}
            <div className='border border-black px-4 py-3 sm:py-4 rounded-lg border-r-[4px] sm:border-r-[6px] border-b-[2px] sm:border-b-[4px] flex-1'>
                <div className='flex flex-col sm:flex-row sm:gap-x-8 lg:gap-x-32 sm:items-center space-y-3 sm:space-y-0'>
                    <div className="flex-1">
                        <p className="text-sm sm:text-base text-gray-600">Available Balance</p>
                        <p className='font-semibold text-xl sm:text-2xl text-gray-900'>N150,000</p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className='border border-[#946BEF] text-[#946BEF] text-xs sm:text-sm px-3 py-1 sm:py-2 rounded-md hover:bg-[#946BEF] hover:text-white transition-colors w-full sm:w-auto'>
                            Get Paid Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Withdrawal Schedule Card */}
            <div className='border border-black px-4 py-3 sm:py-4 rounded-lg border-r-[4px] sm:border-r-[6px] border-b-[2px] sm:border-b-[4px] flex-1'>
                <div className='flex flex-col sm:flex-row sm:gap-x-8 lg:gap-x-32 sm:items-center space-y-3 sm:space-y-0'>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-gray-600">Withdrawal Schedule</p>
                        <p className='font-semibold text-base sm:text-xl lg:text-2xl text-gray-900 break-words'>
                            Weekly (next on May 21)
                        </p>
                    </div>
                    <div className="flex-shrink-0 self-start sm:self-center">
                        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                            <FiEdit2 color='#946BEF' size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Withdrawal Accounts Header - Mobile Responsive */}
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 space-y-2 sm:space-y-0'>
            <p className="text-base sm:text-lg font-medium text-gray-900">Withdrawal Accounts</p>
            <button className='text-[#946BEF] text-sm sm:text-base font-medium hover:underline self-start sm:self-auto'>
                Add Account
            </button>
        </div>

        {/* Bank Account Cards - Mobile Responsive */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-3'>
            {/* UBA Account Card */}
            <div className='border border-black rounded-xl bg-[#F3F1E0] p-3 sm:p-4 flex-1'>
                <div className='flex justify-between items-center pb-2 mb-2'>
                    <p className="text-sm sm:text-base font-medium text-gray-700">Bank Details</p>
                    <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <Ellipsis size={18} className="text-gray-600" />
                    </button>
                </div>
                
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 pb-2 mb-2'>
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        <img src={uba} className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' alt="UBA Logo" />
                        <p className='font-semibold text-sm sm:text-lg lg:text-xl text-gray-900 truncate'>
                            United Bank of Africa
                        </p>
                    </div>
                    <button className='border border-black rounded-full px-2 py-1 text-xs font-medium bg-white hover:bg-gray-50 transition-colors self-start sm:self-auto flex-shrink-0'>
                        Preferred
                    </button>
                </div>
                
                <div className="space-y-1">
                    <p className="text-sm sm:text-base text-gray-900 font-mono">2076523647367</p>
                    <p className="text-sm sm:text-base text-gray-700">Abiodun Abayomi</p>
                </div>
            </div>

            {/* GTB Account Card */}
            <div className='border border-black rounded-xl bg-[#F3F1E0] p-3 sm:p-4 flex-1'>
                <div className='flex justify-between items-center pb-2 mb-2'>
                    <p className="text-sm sm:text-base font-medium text-gray-700">Bank Details</p>
                    <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <Ellipsis size={18} className="text-gray-600" />
                    </button>
                </div>
                
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 pb-2 mb-2'>
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        <img src={gtb} className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' alt="GTB Logo" />
                        <p className='font-semibold text-sm sm:text-lg lg:text-xl text-gray-900 truncate'>
                            Guaranty Trust Bank
                        </p>
                    </div>
                    <button className='border border-black rounded-full px-2 py-1 text-xs font-medium bg-white hover:bg-gray-50 transition-colors self-start sm:self-auto flex-shrink-0'>
                        Preferred
                    </button>
                </div>
                
                <div className="space-y-1">
                    <p className="text-sm sm:text-base text-gray-900 font-mono">2076523647367</p>
                    <p className="text-sm sm:text-base text-gray-700">Abiodun Abayomi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetPaid