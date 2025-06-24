import React, {useState} from 'react'
import profilepic from "../assets/profilepic.jpg"

const Profile = () => {
  const [availability, setAvailability] = useState({
        Monday: { enabled: true, startTime: '09:00', endTime: '17:00' },
        Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
    })

    const toggleDay = (day) => {
        setAvailability(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                enabled: !prev[day].enabled
            }
        }))
    }

    const updateTime = (day, timeType, value) => {
        setAvailability(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [timeType]: value
            }
        }))
    }

    const generateTimeOptions = () => {
        const times = []
        for (let hour = 0; hour < 24; hour++) {
            const hourStr = hour.toString().padStart(2, '0')
            times.push(`${hourStr}:00`)
            times.push(`${hourStr}:30`)
        }
        return times
    }

    const timeOptions = generateTimeOptions()




  return (
    <div className='px-6'>
      <div className='flex gap-3 items-center'>
        <img src={profilepic} className='rounded-full w-24 h-24 object-cover' />
        <div>
          <p className='font-semibold'>Abiodun Ayobami</p>
          <p className='font-thin'>Role: Coach</p>
        </div>
      </div>

      <div className='border-b pt-9'></div>

      <div className='flex gap-32 py-9'>


        <div>
          <p className='font-semibold text-lg'>Name</p>
          <p className='font-normal max-w-[250px]'>Make changes to your name</p>
        </div>

        <div>
          <div>
            <p className='py-1'>First Name</p>
            <input placeholder='Austin' className='px-2 rounded-2xl py-2 border border-gray-500 w-[320px]' />
          </div>
          <div>
            <p className='py-1 pt-3'>Last Name</p>
            <input placeholder='David' className='px-2 rounded-2xl py-2 border border-gray-500 w-[320px]' />
          </div>
        </div>



      </div>


      <div className='border-b '></div>


      <div className='flex gap-32 py-9'>
        <div>
          <p className='font-semibold text-lg'>Email Address</p>
          <p className='font-normal max-w-[250px]'>Make changes to your email</p>
        </div>

        <div>
          <div>
            <p className='py-1'>Email</p>
            <input placeholder='abiodunobami@gmail.com' className='px-2 rounded-2xl py-2 border border-gray-500 w-[320px]' />
          </div>

        </div>

      </div>


  <div className='border-b '></div>


<div className='flex gap-24 py-9'>
        <div>
          <p className='font-semibold text-lg'>Password</p>
          <p className='font-normal max-w-[250px]'>Make changes to your password</p>
        </div>

        <div>
          <div>
            <p className='py-1'>Password</p>
            <input placeholder='*********' className='px-2 rounded-2xl py-2 border border-gray-500 w-[320px]' />
          </div>
         
        </div>


</div>

<div className='flex gap-24 py-9'>
        <div>
          <p className='font-semibold text-lg'>Sport Specialty</p>
          <p className='font-normal max-w-[250px]'>Make changes to your sport specialty</p>
        </div>

        <div>
          <div>
            <p className='py-1'>Sport Specialty</p>
            <input placeholder='Football' className='px-2 rounded-2xl py-2 border border-gray-500 w-[320px]' />
          </div>
         
        </div>

</div>

<div className='flex gap-24 py-9'>
        <div>
          <p className='font-semibold text-lg'>Availability</p>
          <p className='font-normal max-w-[250px]'>Make changes to your availability</p>
        </div>

        <div className="max-w-4xl bg-white">
      <div className="space-y-4">
                {Object.entries(availability).map(([day, settings]) => (
                    <div key={day} className="flex items-center justify-between p-3 gap-x-6 border border-gray-200 rounded-lg hover:bg-gray-50">
                        {/* Left Column - Day and Toggle */}
                        <div className="flex items-center space-x-4 w-1/3">
                            <span className="font-medium text-gray-700 w-20">{day}</span>
                            
                            {/* Toggle Switch */}
                            <button
                                onClick={() => toggleDay(day)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                    settings.enabled ? 'bg-[#946BEF]' : 'bg-gray-300'
                                }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                        settings.enabled ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Right Column - Time Selection */}
                        <div className="flex items-center space-x-4 w-2/3">
                            {settings.enabled ? (
                                <>
                                    <div className="flex items-center space-x-2">
                                        <label className="text-sm text-gray-600">From:</label>
                                        <select
                                            value={settings.startTime}
                                            onChange={(e) => updateTime(day, 'startTime', e.target.value)}
                                            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {timeOptions.map(time => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <label className="text-sm text-gray-600">To:</label>
                                        <select
                                            value={settings.endTime}
                                            onChange={(e) => updateTime(day, 'endTime', e.target.value)}
                                            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {timeOptions.map(time => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <span className="text-gray-400 italic">Not available</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Save Availability
                </button>
            </div>

            {/* Preview of Current Settings */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">Current Availability:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                    {Object.entries(availability).map(([day, settings]) => (
                        <div key={day}>
                            <strong>{day}:</strong> {
                                settings.enabled 
                                    ? `${settings.startTime} - ${settings.endTime}`
                                    : 'Not available'
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>


</div>




<div className='flex gap-x-6'>
  <button className='border-2 border-[#946BEF] text-[#946BEF] px-12 py-2 rounded-lg'>Edit</button>
    <button className='bg-[#946BEF] text-white px-12 py-2 rounded-lg'>Save</button>

</div>

    </div>
  )
}

export default Profile