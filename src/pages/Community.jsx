import React, { useState } from 'react'
import axios from 'axios';
import { URL } from '../url';

const Community = () => {
  const [activeButton, setActiveButton] = useState('players'); // 'transaction history' or 'payout history' or 'non pitch'

  const communities = [
    {
      id: 'BK001',
      creator: 'John Smith',
      name: 'NYC Football Club',
      description: 'The largest football community...',
      members: '200+',
      date: '2025-06-08',
    },
    {
      id: 'BK002',
      creator: 'John Smith',
      name: 'NYC Football Club',
      description: 'The largest football community...',
      members: '200+',
      date: '2025-06-08',
    },
    {
      id: 'BK003',
      creator: 'John Smith',
      name: 'NYC Football Club',
      description: 'The largest football community...',
      members: '200+',
      date: '2025-06-08',
    },
    {
      id: 'BK004',
      creator: 'John Smith',
      name: 'NYC Football Club',
      description: 'The largest football community...',
      members: '200+',
      date: '2025-06-08',
    },
    {
      id: 'BK005',
      creator: 'John Smith',
      name: 'NYC Football Club',
      description: 'The largest football community...',
      members: '200+',
      date: '2025-06-08',
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




<div className="overflow-x-auto bg-white rounded-xl shadow-md border border-black border-r-[6px] border-b-[4px]">
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Community Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Members
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Creator
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Description
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Date Created
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 tracking-wider">
          Action
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {communities.map((booking) => (
        <tr key={booking.id} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {booking.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {booking.members}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {booking.creator}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {booking.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {new Date(booking.date).toLocaleDateString()}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#946BEF] cursor-pointer hover:underline">
            View Community
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Community