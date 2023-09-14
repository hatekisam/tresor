"use client"
import { backend } from '@/utils/constants';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const ProjectsTable = () => {
        const [projects, setProjects] = useState<any>();
        const [loading, setLoading] = useState(true)
        useEffect(() => {
                const fetchProjects = async () => {
                        const token = localStorage.getItem("token")
                        try {
                                axios.get(`${backend}/projects/all/`, {
                                        headers: {
                                                Authorization: `Bearer ${token}`
                                        }
                                }).then((res) => {
                                        console.log(res)
                                }).catch((err) => {
                                        console.log(err)
                                })
                                setLoading(false)
                        } catch (error) {
                                setLoading(false)
                                toast.error('Error Getting All Projects');
                        }
                };
                fetchProjects();
        }, []);
        return (
                <div>
                        {loading ? (
                                <div>
                                        <p>Loding</p>
                                </div>
                        ) : (
                                <div>
                                        {projects?.length === 0 ? (
                                                <div>
                                                        No Projects So Far
                                                </div>
                                        ) : (
                                                <div>
                                                        <div className="flex flex-row justify-between my-2 items-center">
                                                                <p className='text-[rgba(67,67,67,0.43)]'>Information about Projects & Innovations</p>
                                                                <Link href={"/projects"} className='text-[#3C64CA] font-semibold text-[14px]'>View more</Link>
                                                        </div>
                                                        <table className="w-full rounded-lg text-[rgba(67,67,67,0.71)]">
                                                                <tr className="bg-[rgba(237,238,243)] text-[rgba(48,7,98,0.8)] py-10 rounded-md ">
                                                                        <th className="p-2 rounded-l-xl  border-white border-y-[5px]">#</th>
                                                                        <th className="p-2 border-white border-y-[5px]">Project Name</th>
                                                                        <th className="p-2 border-white border-y-[5px]">Number of Comments</th>
                                                                        <th className="p-2 border-white border-y-[5px]">View</th>
                                                                        <th className="p-2 rounded-r-xl border-white border-y-[5px]">Remove</th>
                                                                </tr>
                                                                {projects?.map((project: any, index: any) => (
                                                                        <tr
                                                                                key={index}
                                                                                // className="my-5 border-[2px] border-white rounded-lg text-center "
                                                                                className={index % 2 === 0 ? 'bg-[rgba(67,67,67,0.03)] my-20 text-center' : 'bg-[rgba(67,67,67,0.06)] text-center'}
                                                                        >
                                                                                <td className="p-2 border-white border-y-[5px] rounded-l-xl">{project.id}</td>
                                                                                <td className="p-2 border-white border-y-[5px]">{project.name}</td>
                                                                                <td className="p-2 border-white border-y-[5px]">{project.comments.length}</td>
                                                                                <td className="p-2 border-white border-y-[5px]">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" className='cursor-pointer w-3 h-3 mx-auto fill-blue-500'>
                                                                                                <path d="M10.5 0C15.733 0 20.0867 3.88 21 9C20.0877 14.12 15.733 18 10.5 18C5.26698 18 0.913254 14.12 0 9C0.912284 3.88 5.26698 0 10.5 0ZM10.5 16C12.4793 15.9996 14.3999 15.3068 15.9474 14.0352C17.4948 12.7635 18.5775 10.9883 19.0182 9C18.5759 7.0133 17.4925 5.24 15.9452 3.97003C14.3979 2.70005 12.4782 2.00853 10.5 2.00853C8.5218 2.00853 6.60211 2.70005 5.05481 3.97003C3.5075 5.24 2.42412 7.0133 1.98179 9C2.4225 10.9883 3.50518 12.7635 5.05264 14.0352C6.6001 15.3068 8.52067 15.9996 10.5 16ZM10.5 13.5C9.34172 13.5 8.23087 13.0259 7.41184 12.182C6.59281 11.3381 6.13268 10.1935 6.13268 9C6.13268 7.80653 6.59281 6.66193 7.41184 5.81802C8.23087 4.97411 9.34172 4.5 10.5 4.5C11.6583 4.5 12.7691 4.97411 13.5882 5.81802C14.4072 6.66193 14.8673 7.80653 14.8673 9C14.8673 10.1935 14.4072 11.3381 13.5882 12.182C12.7691 13.0259 11.6583 13.5 10.5 13.5ZM10.5 11.5C11.1435 11.5 11.7606 11.2366 12.2156 10.7678C12.6707 10.2989 12.9263 9.66304 12.9263 9C12.9263 8.33696 12.6707 7.70107 12.2156 7.23223C11.7606 6.76339 11.1435 6.5 10.5 6.5C9.85651 6.5 9.23937 6.76339 8.78436 7.23223C8.32934 7.70107 8.07371 8.33696 8.07371 9C8.07371 9.66304 8.32934 10.2989 8.78436 10.7678C9.23937 11.2366 9.85651 11.5 10.5 11.5Z" fill="black" />
                                                                                        </svg>
                                                                                </td>
                                                                                <td className="p-2 border-white border-y-[5px] rounded-r-xl">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='cursor-pointer w-3 h-3 mx-auto '>
                                                                                                <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.891 6.523L6.523 14.891C5.97638 14.5015 5.49849 14.0236 5.109 13.477L13.477 5.109C14.0236 5.49849 14.5015 5.97638 14.891 6.523Z" fill="#C80048" />
                                                                                        </svg>
                                                                                </td>
                                                                        </tr>
                                                                ))}
                                                        </table>
                                                </div>
                                        )}
                                </div>
                        )}
                </div>
        )
}

export default ProjectsTable