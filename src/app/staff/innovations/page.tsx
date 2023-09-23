"use client"
import Innovation from '@/components/Innovation/Innovation';
import AdminProject from '@/components/Project/AdminProject';
import { backend } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminInnovation = () => {
        const [projects, setProjects] = useState<any>([])
        useEffect(() => {
                const token = localStorage.getItem("token")
                axios.get(`${backend}/projects/all`, {
                        headers: {
                                Authorization: `Bearer ${token}`
                        }
                })
                        .then(res => {
                                console.log(res.data)
                                setProjects(res.data)
                        })
        }, [])

        return (
                <div className='w-full h-full'>
                        <header className='text-[#000000B2] font-semibold mx-1 my-3'>Published projects</header>

                        <div className='w-full h-[90%]  overflow-y-auto'>
                                {projects.length !== 0 ?
                                        projects.map((project: any, index: any) => {
                                                console.log(project)
                                                return (
                                                        <AdminProject
                                                                // displayImage={project.image}
                                                                titleHeader={project.name}
                                                                content={project.description}
                                                                time={project.createdAt}
                                                                appreciations={200}
                                                                FMessages={project.FMessages}
                                                                publisher={project.publisher}
                                                                id={index}
                                                                key={index}
                                                        />
                                                )
                                        }) : <h3 className='mx-auto mt-3 text-center'>No projects published yet.</h3>}
                        </div>
                </div>
        )
}

export default AdminInnovation