import { useState, useEffect } from 'react';
import {
  TrendingUp
} from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import stadium1 from '../assets/stadium1.png'
import stadium2 from '../assets/stadium2.png'
import stadium3 from '../assets/stadium3.png'



const Bookings = () => {
  // const { user, login } = useAuth();
  const [activeButton, setActiveButton] = useState('today'); // 'transaction history' or 'payout history' or 'non pitch'

  const bookings = [
    {
      id: 'BK001',
      user: 'John Smith',
      reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-08',
      payment: 'N50000.00',
      status: 'Confirmed'
    },
    {
      id: 'BK002',
      user: 'Sarah Johnson',
        reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-08',
      payment: 'N35000.00',
      status: 'Pending'
    },
    {
      id: 'BK003',
      user: 'Mike Wilson',
   
     reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-09',
      payment: 'N25000.00',
      status: 'Confirmed'
    },
    {
      id: 'BK004',
      user: 'Emily Davis',
   reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-09',
      payment: 'N80000.00',
      status: 'Cancelled'
    },
    {
      id: 'BK005',
      user: 'David Brown',
 
   reference:'29894784323242',
      description:'uyereyeurywueyiu',
      paymentMethod: 'Debit Card',
      date: '2025-06-10',
      payment: 'N20000.00',
      status: 'Confirmed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };




  return (
    <div className="container mx-auto px-4">

     

      <div className="max-w-[1125px]">


        <div className='flex gap-x-6 pb-6'>

          <div className='border border-black border-r-[6px] border-b-[4px] rounded-2xl py-2 px-2'>

            <div className='flex gap-x-6 items-center'>
              <div>
                <p className='text-sm'>Total Bookings</p>
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
                <p className='text-sm'>Facility Booking</p>
                <p className='font-semibold text-3xl'>5</p>
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
                <p className='text-sm'>Coach Booking</p>
                <p className='font-semibold text-3xl'>1</p>
              </div>

              <div>
                <p className='text-green-500'><TrendingUp size={16} /></p>
                <p className='text-green-500'>50.6%</p>
              </div>

            </div>
          </div>




        </div>



         <div className='bg-gray-100 w-[350px] px-2 py-2 rounded-lg mb-6'>
        <div className='flex'>
          <button
            className={`px-3 py-1 rounded-lg transition-colors ${activeButton === 'today'
              ? 'bg-white text-black'
              : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('today')}
          >
            Today's Schedule
          </button>
          <button
            className={`px-3 py-1 rounded-lg transition-colors ${activeButton === 'upcoming'
              ? 'bg-white text-black'
              : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            onClick={() => setActiveButton('upcoming')}
          >
            Upcoming Schedule
          </button>

        </div>

        {/* Optional: Show which is selected */}
        {/* <div className="mt-4 text-sm text-gray-600">
        Currently showing: {activeButton === 'recent' ? 'Recent Bookings' : "Today's Bookings"}
      </div> */}

      </div>



        {/* <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-black border-r-[6px] border-b-[4px]">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Amount Earned
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Commission Deducted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Net Received
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Date
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.facility?.slice(0, 12)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.sport}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      className="text-blue-600 hover:text-blue-900 font-medium hover:underline"
                      onClick={() => alert(`Viewing details for booking ${booking.id}`)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

          <div>

      <div className='flex gap-x-6 max-w-[1100px]'>

        <div className='border border-black rounded-xl '>
          <img src={stadium1} className='w-auto' />
          {/* text part */}
          <div className='px-2 py-4'>
            <p className='font-semibold py-2'>Don Man Stadium</p>
            <p className='max-w-[250px] text-gray-500 text-sm'>A vibrant stadium buzzing with energy, filled to the brim with passionate fans cheering for their favorite teams.</p>
            <p className='py-2 flex justify-between'>
              <p>Mon-Tue</p>
              <p>8am-6pm</p>
            </p>
            <p>Lekki Phase1</p>
          </div>
        </div>

 <div className='border border-black rounded-xl '>
          <img src={stadium2} className='w-auto' />
          {/* text part */}
          <div className='px-2 py-4'>
            <p className='font-semibold py-2'>Don Man Stadium</p>
            <p className='max-w-[250px] text-gray-500 text-sm'>A vibrant stadium buzzing with energy, filled to the brim with passionate fans cheering for their favorite teams.</p>
            <p className='py-2 flex justify-between'>
              <p>Mon-Tue</p>
              <p>8am-6pm</p>
            </p>
            <p>Lekki Phase1</p>
          </div>
        </div>



         <div className='border border-black rounded-xl '>
          <img src={stadium3} className='w-auto' />
          {/* text part */}
          <div className='px-2 py-4'>
            <p className='font-semibold py-2'>Don Man Stadium</p>
            <p className='max-w-[250px] text-gray-500 text-sm'>A vibrant stadium buzzing with energy, filled to the brim with passionate fans cheering for their favorite teams.</p>
            <p className='py-2 flex justify-between'>
              <p>Mon-Tue</p>
              <p>8am-6pm</p>
            </p>
            <p>Lekki Phase1</p>
          </div>
        </div>




      </div>
      
      
      </div>
      </div>

    </div>
  );
};

export default Bookings;