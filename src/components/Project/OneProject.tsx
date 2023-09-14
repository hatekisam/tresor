"use client"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const OneProject = () => {
        const params = useParams()
        const innovation = {
                id: 1,
                title: "Smart Home Automation System",
                description: "A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.A cutting-edge smart home system that allows users to control their lights, appliances, and security systems remotely through a mobile app.",
                date: new Date("2023-08-15"),
                image: "smart_home.jpg",
                tags: ["IoT", "Home Automation", "Mobile App"]
        }
        return (
                <div className='w-full overflow-y-auto p-2 text-sm'>
                        <div className='border border-[#ccc] py-2 px-1 rounded-lg   relative bg-[rgba(67,67,67,0.09)] '>
                                <div className='relative border border-[#ccc] py-2 px-1 h-[200px] rounded-lg  w-full  flex flex-row gap-2  bg-[rgba(67,67,67,0.09)] '>
                                        <div className="absolute right-0 bottom-0 p-1">
                                                <div className="p-1 flex flex-row gap-2 text-[#523873] bg-white rounded-full">
                                                        {innovation.tags.map((tag, i) => {
                                                                return (
                                                                        <p key={i} className='border border-black px-2  py-1 bg-[rgba(67,67,67,0.09)]  rounded-full'>{tag}</p>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                </div>
                                <div className='border-b-2 my-2 p-2'>
                                        <div className="flex justify-between items-center">
                                                <p className="text-lg font-bold my-2">{innovation.title}</p>
                                                <button className='p-1 rounded-full bg-white'>
                                                        <Image src="/svg/love.svg" alt='' width={30} height={30} />
                                                </button>
                                        </div>
                                        <p className="text-gray-700 ">{innovation.date.toLocaleDateString()}</p>
                                        <div className="flex flex-row justify-between  text-gray-700 mt-3">
                                                <p>1000 Appreciations</p>
                                                <p>100 Comments</p>
                                                <p>Published by Mugisha Yves</p>
                                        </div>
                                </div>
                                <div className='relative min-h-[165px] my-2 p-2 pr-56'>
                                        <p className="text-base font-bold my-2">More About This Innovation</p>
                                        <p className="text-gray-700 ">{innovation.description}</p>
                                        <div className="absolute right-0 bottom-0  ">
                                                <div className='flex flex-col gap-1 border border-[#ccc] p-2 rounded-lg'>
                                                        <div className="flex flex-row gap-2 items-center border-b-2 py-1 px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none" className='cursor-pointer w-4'>
                                                                        <path d="M10.5 0C15.733 0 20.0867 3.88 21 9C20.0877 14.12 15.733 18 10.5 18C5.26698 18 0.913254 14.12 0 9C0.912284 3.88 5.26698 0 10.5 0ZM10.5 16C12.4793 15.9996 14.3999 15.3068 15.9474 14.0352C17.4948 12.7635 18.5775 10.9883 19.0182 9C18.5759 7.0133 17.4925 5.24 15.9452 3.97003C14.3979 2.70005 12.4782 2.00853 10.5 2.00853C8.5218 2.00853 6.60211 2.70005 5.05481 3.97003C3.5075 5.24 2.42412 7.0133 1.98179 9C2.4225 10.9883 3.50518 12.7635 5.05264 14.0352C6.6001 15.3068 8.52067 15.9996 10.5 16ZM10.5 13.5C9.34172 13.5 8.23087 13.0259 7.41184 12.182C6.59281 11.3381 6.13268 10.1935 6.13268 9C6.13268 7.80653 6.59281 6.66193 7.41184 5.81802C8.23087 4.97411 9.34172 4.5 10.5 4.5C11.6583 4.5 12.7691 4.97411 13.5882 5.81802C14.4072 6.66193 14.8673 7.80653 14.8673 9C14.8673 10.1935 14.4072 11.3381 13.5882 12.182C12.7691 13.0259 11.6583 13.5 10.5 13.5ZM10.5 11.5C11.1435 11.5 11.7606 11.2366 12.2156 10.7678C12.6707 10.2989 12.9263 9.66304 12.9263 9C12.9263 8.33696 12.6707 7.70107 12.2156 7.23223C11.7606 6.76339 11.1435 6.5 10.5 6.5C9.85651 6.5 9.23937 6.76339 8.78436 7.23223C8.32934 7.70107 8.07371 8.33696 8.07371 9C8.07371 9.66304 8.32934 10.2989 8.78436 10.7678C9.23937 11.2366 9.85651 11.5 10.5 11.5Z" fill="black" />
                                                                </svg>
                                                                <p>Visit Website</p>
                                                        </div>
                                                        <div className="flex flex-row gap-2 items-center border-b-2 py-1 px-2">
                                                                <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" fill="none" className='cursor-pointer w-4'>
                                                                        <path d="M13.757 0.9L11.757 2.9H2V16.9H16V7.143L18 5.143V17.9C18 18.1652 17.8946 18.4196 17.7071 18.6071C17.5196 18.7946 17.2652 18.9 17 18.9H1C0.734784 18.9 0.48043 18.7946 0.292893 18.6071C0.105357 18.4196 0 18.1652 0 17.9V1.9C0 1.63478 0.105357 1.38043 0.292893 1.19289C0.48043 1.00536 0.734784 0.9 1 0.9H13.757ZM17.485 0L18.9 1.416L9.708 10.608L8.296 10.611L8.294 9.194L17.485 0Z" fill="#3C64CA" />
                                                                </svg>
                                                                <p className="text-blue-500">Edit Project</p>
                                                        </div>
                                                        <div className="flex flex-row gap-2 items-center py-1 px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className='cursor-pointer w-4'>
                                                                        <path d="M14.175 3.78H18.9V5.67H17.01V17.955C17.01 18.2056 16.9104 18.446 16.7332 18.6232C16.556 18.8004 16.3156 18.9 16.065 18.9H2.835C2.58437 18.9 2.34401 18.8004 2.16678 18.6232C1.98956 18.446 1.89 18.2056 1.89 17.955V5.67H0V3.78H4.725V0.945C4.725 0.69437 4.82456 0.454006 5.00178 0.276784C5.17901 0.0995622 5.41937 0 5.67 0H13.23C13.4806 0 13.721 0.0995622 13.8982 0.276784C14.0754 0.454006 14.175 0.69437 14.175 0.945V3.78ZM15.12 5.67H3.78V17.01H15.12V5.67ZM6.615 8.505H8.505V14.175H6.615V8.505ZM10.395 8.505H12.285V14.175H10.395V8.505ZM6.615 1.89V3.78H12.285V1.89H6.615Z" fill="#DD1A49" />
                                                                </svg>
                                                                <p className="text-red-500">Delete Project</p>
                                                        </div>
                                                </div>
                                                <button className="my-2 px-5 py-2 text-white rounded-lg bg-[#523873]">Read Feedback(90+)</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default OneProject