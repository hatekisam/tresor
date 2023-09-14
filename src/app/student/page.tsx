'use client'
import Announcement from '@/components/Announcement/Announcement'
import React from 'react'
import newOne from "../../assets/newOne.png"
import newTwo from "../../assets/newTwo.png"
import Link from 'next/link';
import StudentGraph from '@/components/Graphs/StudentGraph'


const AdminDashboard = () => {
        const projects = [
                {
                        id: 1,
                        name: "Project A",
                        comments: ["Great work!", "Needs improvement."],
                },
                {
                        id: 2,
                        name: "Project B",
                        comments: ["Impressive!", "Well done."],
                },
                {
                        id: 3,
                        name: "Project C",
                        comments: ["Keep up the good work.", "Very creative."],
                },
                {
                        id: 4,
                        name: "Project C",
                        comments: ["Keep up the good work.", "Very creative."],
                }]

        return (
                <div className='flex flex-row gap-5  text-sm h-full'>
                        <div className='w-full md:w-[70%] p-3 h-full overflow-y-auto'>
                                <p className='text-[15px] font-semibold my-2 text-slate-800'>Welcome Back <span className=' font-extrabold'>Mugisha Yves</span></p>
                                <p className='text-[rgba(67,67,67,0.43)] my-3'>Statistics of your performance and innovations published</p>
                                <div className="max-[450px]:flex-col flex flex-row gap-4 my-2">
                                        <div className="max-[450px]:w-full w-[40%] h-full flex flex-col gap-3">
                                                <div className='bg-[rgba(2,97,29,0.08)] border  border-[rgba(2,7,29,0.26)] rounded-md h-[50%] p-4'>
                                                        <div className="flex flex-row justify-between px-3 ">
                                                                <p className='text-[rgba(3,146,67,0.86)] font-extrabold text-[37px]'>89 %</p>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                                                        <path d="M35.2917 43.75C33.0484 43.75 30.897 42.8589 29.3107 41.2726C27.7245 39.6864 26.8333 37.535 26.8333 35.2917C26.8333 33.0484 27.7245 30.897 29.3107 29.3107C30.897 27.7245 33.0484 26.8333 35.2917 26.8333C37.535 26.8333 39.6864 27.7245 41.2726 29.3107C42.8589 30.897 43.75 33.0484 43.75 35.2917C43.75 37.535 42.8589 39.6864 41.2726 41.2726C39.6864 42.8589 37.535 43.75 35.2917 43.75ZM35.2917 38.9167C36.2531 38.9167 37.1751 38.5347 37.8549 37.8549C38.5347 37.1751 38.9167 36.2531 38.9167 35.2917C38.9167 34.3303 38.5347 33.4082 37.8549 32.7284C37.1751 32.0486 36.2531 31.6667 35.2917 31.6667C34.3303 31.6667 33.4082 32.0486 32.7284 32.7284C32.0486 33.4082 31.6667 34.3303 31.6667 35.2917C31.6667 36.2531 32.0486 37.1751 32.7284 37.8549C33.4082 38.5347 34.3303 38.9167 35.2917 38.9167ZM8.70833 17.1667C7.59757 17.1667 6.49768 16.9479 5.47147 16.5228C4.44526 16.0977 3.51282 15.4747 2.72739 14.6893C1.94196 13.9038 1.31892 12.9714 0.893852 11.9452C0.468781 10.919 0.25 9.8191 0.25 8.70833C0.25 7.59757 0.468781 6.49768 0.893852 5.47147C1.31892 4.44526 1.94196 3.51282 2.72739 2.72739C3.51282 1.94196 4.44526 1.31892 5.47147 0.893852C6.49768 0.468781 7.59757 0.25 8.70833 0.25C10.9516 0.25 13.103 1.14114 14.6893 2.72739C16.2755 4.31363 17.1667 6.46504 17.1667 8.70833C17.1667 10.9516 16.2755 13.103 14.6893 14.6893C13.103 16.2755 10.9516 17.1667 8.70833 17.1667ZM8.70833 12.3333C9.66974 12.3333 10.5918 11.9514 11.2716 11.2716C11.9514 10.5918 12.3333 9.66974 12.3333 8.70833C12.3333 7.74692 11.9514 6.82489 11.2716 6.14507C10.5918 5.46525 9.66974 5.08333 8.70833 5.08333C7.74692 5.08333 6.82489 5.46525 6.14507 6.14507C5.46525 6.82489 5.08333 7.74692 5.08333 8.70833C5.08333 9.66974 5.46525 10.5918 6.14507 11.2716C6.82489 11.9514 7.74692 12.3333 8.70833 12.3333ZM39.0882 1.49458L42.5054 4.91175L4.91417 42.5054L1.497 39.0882L39.0858 1.49458H39.0882Z" fill="#19BC64" fillOpacity="0.12" />
                                                                </svg>
                                                        </div>
                                                        <div className="flex flex-row justify-between px-3 ">
                                                                <p className='text-[rgba(3,146,67,0.86)] font-semibold text-xs'>Average Performance</p>
                                                        </div>
                                                </div>
                                                <div className='h-[50%] flex flex-row gap-3  '>
                                                        <div className='bg-[rgba(8,40,210,0.09)] border  border-[rgba(8,40,210,0.47)]  text-[rgba(8,40,210,0.47)] rounded-md  w-[100%] p-5 flex flex-col gap-3'>
                                                                <p className='font-extrabold text-[37px]'>34</p>
                                                                <p className='font-extrabold text-xs'>Number of  Innovations</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="max-[450px]:w-full w-[60%] h-full">
                                                <div className='max-[450px]:w-full bg-[rgba(2,97,29,0.08)] border-2  border-[rgba(2,7,29,0.26)] rounded-md h-full p-3'>
                                                        <p className='text-[rgba(0,0,0,0.47)]'>Performance Graph</p>
                                                        <StudentGraph />
                                                </div>
                                        </div>
                                </div>
                                <div className="flex flex-row justify-between items-center my-2">
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Information about your Innovations</p>
                                        <Link href={"/innovations"} className='text-[#3C64CA] font-semibold text-[12px]'>View more</Link>
                                </div>
                                <table className="w-full rounded-lg text-[rgba(67,67,67,0.71)] h-[40vh]">
                                        <tr className="bg-[rgba(237,238,243)] text-[rgba(48,7,98,0.8)] py-10 rounded-md">
                                                <th className="p-2">#</th>
                                                <th className="p-2">Project Name</th>
                                                <th className="p-2">Number of Comments</th>
                                                <th className="p-2">View</th>
                                                <th className="p-2">Remove</th>
                                        </tr>
                                        {projects.map((project, index) => (
                                                <tr
                                                        key={index}
                                                        // className="my-5 border-[2px] border-white rounded-lg text-center "
                                                        className={index % 2 === 0 ? 'bg-[rgba(67,67,67,0.03)] my-20 text-center' : 'bg-[rgba(67,67,67,0.06)] text-center'}
                                                >
                                                        <td className="p-2">{project.id}</td>
                                                        <td className="p-2">{project.name}</td>
                                                        <td className="p-2">{project.comments.length}</td>
                                                        <td className="p-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" className='cursor-pointer w-3 h-3 mx-auto fill-blue-500'>
                                                                        <path d="M10.5 0C15.733 0 20.0867 3.88 21 9C20.0877 14.12 15.733 18 10.5 18C5.26698 18 0.913254 14.12 0 9C0.912284 3.88 5.26698 0 10.5 0ZM10.5 16C12.4793 15.9996 14.3999 15.3068 15.9474 14.0352C17.4948 12.7635 18.5775 10.9883 19.0182 9C18.5759 7.0133 17.4925 5.24 15.9452 3.97003C14.3979 2.70005 12.4782 2.00853 10.5 2.00853C8.5218 2.00853 6.60211 2.70005 5.05481 3.97003C3.5075 5.24 2.42412 7.0133 1.98179 9C2.4225 10.9883 3.50518 12.7635 5.05264 14.0352C6.6001 15.3068 8.52067 15.9996 10.5 16ZM10.5 13.5C9.34172 13.5 8.23087 13.0259 7.41184 12.182C6.59281 11.3381 6.13268 10.1935 6.13268 9C6.13268 7.80653 6.59281 6.66193 7.41184 5.81802C8.23087 4.97411 9.34172 4.5 10.5 4.5C11.6583 4.5 12.7691 4.97411 13.5882 5.81802C14.4072 6.66193 14.8673 7.80653 14.8673 9C14.8673 10.1935 14.4072 11.3381 13.5882 12.182C12.7691 13.0259 11.6583 13.5 10.5 13.5ZM10.5 11.5C11.1435 11.5 11.7606 11.2366 12.2156 10.7678C12.6707 10.2989 12.9263 9.66304 12.9263 9C12.9263 8.33696 12.6707 7.70107 12.2156 7.23223C11.7606 6.76339 11.1435 6.5 10.5 6.5C9.85651 6.5 9.23937 6.76339 8.78436 7.23223C8.32934 7.70107 8.07371 8.33696 8.07371 9C8.07371 9.66304 8.32934 10.2989 8.78436 10.7678C9.23937 11.2366 9.85651 11.5 10.5 11.5Z" fill="black" />
                                                                </svg>
                                                        </td>
                                                        <td className="p-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='cursor-pointer w-3 h-3 mx-auto '>
                                                                        <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.891 6.523L6.523 14.891C5.97638 14.5015 5.49849 14.0236 5.109 13.477L13.477 5.109C14.0236 5.49849 14.5015 5.97638 14.891 6.523Z" fill="#C80048" />
                                                                </svg>
                                                        </td>
                                                </tr>
                                        ))}
                                </table>
                        </div>
                        <div className='hidden md:block w-[30%]  h-[100%] overflow-y-auto bg-[#D9D9D975] border-2 border-[#43434305] p-2 rounded-md'>
                                <div>
                                        <div className="flex flex-row justify-between">
                                                <p className='text-[rgba(67,67,67,0.47)] font-semibold my-2'>Announcements</p>
                                                <div className="h-7 w-7 rounded-full bg-[#687CE2] text-white flex justify-center items-center text-xs cursor-pointer">82</div>
                                        </div>
                                        <div>
                                                <Announcement image={newOne} date={new Date()} title={"Yourth Connekt Africa 2022"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet . . ."} />
                                                <Announcement image={newTwo} date={new Date()} title={"Yourth Connekt Africa 2022"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet . . ."} />
                                                <Announcement image={newTwo} date={new Date()} title={"Yourth Connekt Africa 2022"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet . . ."} />
                                                <Announcement image={newTwo} date={new Date()} title={"Yourth Connekt Africa 2022"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet . . ."} />
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default AdminDashboard