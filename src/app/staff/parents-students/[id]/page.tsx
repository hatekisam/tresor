import React from 'react'
import ProfileInput from '../ProfileInput'

const page = () => {
        const student = {
                id: 1,
                name: 'Muhire Ighor',
                email: "muhireighoor@gmail.com",
                class: "Y2A",
                promotionInTake: "2021",
                description: "Funny Guy hahaha this is all a placeholder",
                province: "Kigali",
                district: "Nyabihu",
                father: "Papa Ighor",
                fatherEmail: "papaighor@gmail.com",
                fatherPhone: "123456789",
                mother: "MaMa Ighor",
                motherEmail: "mamaighor@gmail.com",
                motherPhone: "123456789",
        }
        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <div className="my-5 grid grid-cols-2 gap-5">
                                <ProfileInput />
                                <div className="w-[50%] md:w-full">
                                        <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.name}</p>
                                        <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.email}</p>
                                        <div className="grid grid-cols-2 my-2 gap-2">
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.class}</p>
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.promotionInTake}</p>
                                        </div>
                                        <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.description}</p>
                                </div>
                                <div className="w-[50%] md:w-full">
                                        <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.province}</p>
                                </div>
                                <div className="w-[50%] md:w-full">
                                        <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.district}</p>
                                </div>
                        </div>
                        <div className="my-10">
                                <p>Parent Details</p>
                                <div className="grid grid-cols-2 gap-x-5">
                                        <div className="flex flex-col ">
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.father}</p>
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.fatherEmail}</p>
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.fatherPhone}</p>
                                        </div>
                                        <div className="flex flex-col ">
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.mother}</p>
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.motherEmail}</p>
                                                <p className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]'>{student.motherPhone}</p>
                                        </div>
                                </div>
                        </div>
                        <div className="flex justify-between items-center">
                                <div></div>
                                <div className="my-10 flex flex-row gap-2">
                                        <button className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 cursor-pointer' >Edit</button>
                                        <button className='bg-[#DD1A49] rounded-md text-white px-5 py-2 cursor-pointer' >Delete</button>
                                </div>
                        </div>
                </div >
        )
}

export default page