import React, {useState} from 'react'
import {
  TrendingUp,
  MessageSquareMore,
  Meh,
  Ellipsis
} from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import coach from '../assets/coachicon.png'

const Dashboard = () => {
      const [activeButton, setActiveButton] = useState('players'); // 'transaction history' or 'payout history' or 'non pitch'

    const bookings = [
    {
      id: 'BK001',
      user: 'John Smith',
      reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-08',
      payment: 'N50000.00',
      status: 'Active'
    },
    {
      id: 'BK002',
      user: 'Sarah Johnson',
        reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-08',
      payment: 'N35000.00',
      status: 'Inactive'
    },
    {
      id: 'BK003',
      user: 'Mike Wilson',
   
     reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-09',
      payment: 'N25000.00',
      status: 'Active'
    },
    {
      id: 'BK004',
      user: 'Emily Davis',
   reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-09',
      payment: 'N80000.00',
      status: 'Deactivated'
    },
    {
      id: 'BK005',
      user: 'David Brown',
 
   reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-10',
      payment: 'N20000.00',
      status: 'Active'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-yellow-100 text-yellow-800';
      case 'Deactivated':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className='px-6 py-6'>


       <div className='flex gap-x-6 pb-6'>
      
                <div className='border border-black border-r-[6px] border-b-[4px] rounded-2xl py-2 px-2'>
      
                  <div className='flex gap-x-6 items-center'>
                    <div>
                      <p className='text-sm'>Total Revenue</p>
                      <p className='font-semibold text-3xl'>N500,00</p>
                    </div>
      
                    <div>
                      <p className='text-green-500'><TrendingUp size={16} /></p>
                      <p className='text-green-500'>50.6%</p>
                    </div>
      
                  </div>
                </div>
      
        <div className='border border-black border-r-[6px] border-b-[4px] rounded-2xl py-2 px-2'>
      
                  <div className='flex gap-x-6 items-center'>
                    <div>
                      <p className='text-sm'>Total Sessions</p>
                      <p className='font-semibold text-3xl'>25</p>
                    </div>
      
                    <div>
                      <p className='text-green-500'><TrendingUp size={16} /></p>
                      <p className='text-green-500'>50.6%</p>
                    </div>
      
                  </div>
                </div>
      
                  <div className='border border-black border-r-[6px] border-b-[4px] rounded-2xl py-2 px-2'>
      
                  <div className='flex gap-x-6 items-center'>
                    <div>
                      <p className='text-sm'>Ongoing Sessions</p>
                      <p className='font-semibold text-3xl'>15</p>
                    </div>
      
                    <div>
                      <p className='text-green-500'><TrendingUp size={16} /></p>
                      <p className='text-green-500'>50.6%</p>
                    </div>
      
                  </div>
                </div>
      
      
      
      
              </div>
      


          <div className='bg-gray-100 w-[310px] px-2 py-2 rounded-lg mb-6'>
        <div className='flex'>
          <button
            className={`px-3 py-1 rounded-lg transition-colors ${activeButton === 'players'
              ? 'bg-white text-black'
              : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('players')}
          >
            Recent Booking
          </button>
          <button
            className={`px-3 py-1 rounded-lg transition-colors ${activeButton === 'facility-owner'
              ? 'bg-white text-black'
              : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('facility-owner')}
          >
            Today Schedule
          </button>
          


        </div>

        {/* Optional: Show which is selected */}
        {/* <div className="mt-4 text-sm text-gray-600">
        Currently showing: {activeButton === 'recent' ? 'Recent Bookings' : "Today's Bookings"}
      </div> */}

      </div>
        <div className='flex'>
        <div className='grid grid-cols-4 gap-4'>

            <div className='border border-black rounded-md bg-orange-500'>
              <div className='px-2'>
               <div className='border border-black bg-yellow-500 rounded-md text-[10px] px-1 w-[50px] font-medium ml-auto mt-2 pl-2  '>Booked</div>
               </div>
                <div className='flex justify-center items-center py-5 bg-orange-500 rounded-t-md'>
                 
           <Meh size={50} color='#C2410c'/>
                 </div>
                 <div className='p-2 bg-white rounded-b-md'>
                  <div className='flex gap-x-4'>
                    <p className='font-semibold text-md'>Booking Details</p>
                    <Ellipsis size={20}/>
                    </div>
                    <p className='text-sm'>27th Apr 2025</p>
                    <p className='text-sm'>Darkan Pitch</p>
                    <p className='text-sm'>James Patrick</p>
                    
                 </div>
            </div>


          <div className='border border-black rounded-md bg-green-400'>
                          <div className='px-2'>
               <div className='border border-black bg-yellow-500 rounded-md text-[10px] px-1 w-[50px] font-medium ml-auto mt-2 pl-2  '>Booked</div>
               </div>
                <div className='flex justify-center items-center py-5 bg-green-400 rounded-t-md'>
                 <Meh size={50} className='text-green-700'/>
                 </div>
                 <div className='p-2 bg-white rounded-b-md'>
                    <div className='flex gap-x-4'>
                    <p className='font-semibold text-md'>Booking Details</p>
                    <Ellipsis size={20}/>
                    </div>
                    <p className='text-sm'>27th Apr 2025</p>
                    <p className='text-sm'>Darkan Pitch</p>
                    <p className='text-sm'>James Patrick</p>
                    
                 </div>
            </div>


          <div className='border border-black rounded-md bg-red-300'>
                          <div className='px-2'>
               <div className='border border-black bg-yellow-500 rounded-md text-[10px] px-1 w-[50px] font-medium ml-auto mt-2 pl-2  '>Booked</div>
               </div>
                <div className='flex justify-center items-center py-5 bg-red-300 rounded-t-md'>
                 <Meh size={50} className='text-red-600' />
                 </div>
                 <div className='p-2 bg-white rounded-b-md'>
                    <div className='flex gap-x-4'>
                    <p className='font-semibold text-md'>Booking Details</p>
                    <Ellipsis size={20}/>
                    </div>
                    <p className='text-sm'>27th Apr 2025</p>
                    <p className='text-sm'>Darkan Pitch</p>
                    <p className='text-sm'>James Patrick</p>
                    
                 </div>
            </div>


          <div className='border border-black rounded-md bg-blue-300'>
                          <div className='px-2'>
               <div className='border border-black bg-yellow-500 rounded-md text-[10px] px-1 w-[50px] font-medium ml-auto mt-2 pl-2  '>Booked</div>
               </div>
                <div className='flex justify-center items-center py-5 bg-blue-300 rounded-t-md'>
                 <Meh size={50} className='text-blue-600' />
                 </div>
                 <div className='p-2 bg-white rounded-b-md'>
                    <div className='flex gap-x-4'>
                    <p className='font-semibold text-md'>Booking Details</p>
                    <Ellipsis size={20}/>
                    </div>
                    <p className='text-sm'>27th Apr 2025</p>
                    <p className='text-sm'>Darkan Pitch</p>
                    <p className='text-sm'>James Patrick</p>
                    
                 </div>
            </div>



        </div>
      </div>
      
      

      <div className='flex justify-between py-2 mt-4'>
      <p className='font-semibold text-xl'>Upcoming Schedule</p>
      <p className='text-[#946BEF]'>View all</p>
      </div>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-black border-r-[6px] border-b-[4px]">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
               Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Payment Method
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Status
                </th>
  
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                     {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.payment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.reference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      className="text-blue-600 hover:text-blue-900 font-medium hover:underline"
                      onClick={() => alert(`Viewing details for booking ${booking.id}`)}
                    >
                      View Details
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Dashboard