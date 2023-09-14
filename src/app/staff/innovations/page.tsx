import Innovation from '@/components/Innovation/Innovation';
import React from 'react'

const AdminInnovation = () => {
        const innovations = [
                {
                        id: 1,
                        title: "Smart Home Automation System",
                        description: "A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.",
                        date: new Date("2023-08-15"),
                        image: "smart_home.jpg",
                        tags: ["IoT", "Home Automation", "Mobile App"]
                },
                {
                        id: 2,
                        title: "AI-Powered Medical Diagnosis",
                        description: "An innovative medical diagnostic tool that utilizes artificial intelligence to analyze medical images and provide accurate and rapid disease detection.",
                        date: new Date("2023-07-22"),
                        image: "medical_ai.jpg",
                        tags: ["AI", "Medical Imaging", "Disease Detection"]
                },
                {
                        id: 3,
                        title: "Sustainable Energy Solution",
                        description: "A renewable energy solution that harnesses solar and wind power to provide clean and affordable electricity to rural and underserved communities.",
                        date: new Date("2023-06-10"),
                        image: "sustainable_energy.jpg",
                        tags: ["Renewable Energy", "Solar Power", "Wind Power"]
                }
        ];


        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                                <h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2'>Innovations </h2>
                                <p className='text-[rgba(67,67,67,0.43)] my-2 capitalize'>All Innovations by students from RCA</p>
                        </div>
                        <div className="block sm:hidden">
                                <div className="flex justify-between my-1">
                                        <div></div>
                                        <button className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2'>Add Innovation</button>
                                </div>
                                <input type="text" className='bg-[rgba(67,67,67,0.09)] px-3 py-2 rounded-md border-[2px] border-[rgba(67,67,67,0.03)] w-full ' placeholder='Search Innovation By Tag' />
                        </div>
                        <div className="hidden sm:flex flex-row justify-between my-5">
                                <input type="text" className='bg-[rgba(67,67,67,0.09)] px-3 py-2 rounded-md border-[2px] border-[rgba(67,67,67,0.03)] w-[40vw] md:w-[30vw]' placeholder='Search Innovation By Tag' />
                                <button className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2'>Add Innovation</button>
                        </div>
                        <div >
                                {innovations.map((innovation, index) => {
                                        return (
                                                <Innovation key={index} image={innovation.image} title={innovation.title} date={innovation.date} content={innovation.description} tags={innovation.tags} id={innovation.id} />
                                        )
                                })}
                        </div>
                </div>
        )
}

export default AdminInnovation