"use client"
import React, { useState } from 'react'
import DropPart from './DropPart';
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { backend } from '@/utils/constants';
const AdminCustomization: React.FC = () => {
        const navigate = useRouter()
        const [loading, setLoading] = useState(false)
        const schema = yup.object().shape({
                aboutUsText: yup.string().notRequired(),
                innovationText: yup.string().notRequired(),
                yearsFoundation: yup.number().nullable().notRequired(),
                stakePartener: yup.number().nullable().notRequired(),
                students: yup.number().nullable().notRequired(),
                startups: yup.number().nullable().notRequired(),
                email: yup.string().notRequired(),
                slackLink: yup.string().notRequired(),
                discordServer: yup.string().notRequired(),
                facebook: yup.string().notRequired(),
                instargram: yup.string().notRequired(),
                phone: yup.string().notRequired(),
                twitter: yup.string().notRequired(),
                linkedIn: yup.string().notRequired(),
                github: yup.string().notRequired(),
        })
        const { handleSubmit, register, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
        })
        const onSubmit = (data: any) => {
                const web = {
                        yearsOfFoundation: data.yearsFoundation,
                        studentsNumber: data.students,
                        startupsNumber: data.startups,
                        aboutUsText: data.aboutUsText,
                        innovationText: data.innovationText,
                        schoolEmail: data.email,
                        slackWorkspaceLink: data.slackLink,
                        DiscordServerLink: data.discordServer,
                        FacebookLink: data.facebook,
                        snapchatLink: '',
                        InstgramLink: data.instargram,
                        schoolPhoneNumber: data.phone,
                        TwitterLink: data.twitter,
                        LinkedInLink: data.linkedIn,
                        githubLink: data.github,
                }
                setLoading(true)
                const token = localStorage.getItem("token")
                console.log(token)
                axios.post(`${backend}/web-content/update`, web, {
                        headers: {
                                Authorization: `Bearer ${token}`
                        }
                }).then((res) => {
                        console.log(res)
                        toast.success("Update the Website Successfully")
                        setLoading(false)
                        navigate.push("/staff/customizations")
                }).catch((err) => {
                        console.log(err)
                        setLoading(false)
                        toast.error("Error Updating the Website")
                })
        }
        return (
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2'>Customization of the Website</h2>
                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Landing Page</p>
                        <DropPart />
                        <div className="my-10 flex flex-col md:flex-row gap-2 md:gap-5">
                                <div className='w-full md:w-[50%]'>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>About Us Text</p>
                                        <textarea  {...register("aboutUsText")} placeholder='Enter About Section Text appearing on the landing page' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Innovation Text</p>
                                        <textarea {...register("innovationText")} placeholder='Enter Innovation section Text appearing on the landing page' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                </div>
                        </div>
                        <div className='my-10'>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>School Numbers Section</p>
                                <div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2       ">
                                        <input {...register("yearsFoundation")} type="number" placeholder='Years of Foundation' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("stakePartener")} type="number" placeholder='Stakeholders and Partners' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("students")} type="number" placeholder='Students Number' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("startups")} type="number" placeholder='Number of Startups' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                </div>
                        </div>
                        <div className="my-10">
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Social Media Links and Contacts</p>
                                <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <input {...register("email")} type="text" placeholder='School Email ' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("slackLink")} type="text" placeholder='Slack Workspace Link' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("discordServer")} type="text" placeholder='Discord Server' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("facebook")} type="text" placeholder='Facebook Account' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("instargram")} type="text" placeholder='Instargram' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("phone")} type="text" placeholder='School Phone Number' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("twitter")} type="text" placeholder='Twitter Link' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("linkedIn")} type="text" placeholder='LinkedIn Link' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        <input {...register("github")} type="text" placeholder='Github Open RCA Link' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                                        {/* <input {...register("email")} type="text" placeholder='SnapChat Contact' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' /> */}
                                </div>
                        </div>
                        <div className="my-10 flex flex-row gap-10">
                                <button className='bg-[rgba(67,67,67,0.03)]  text-black rounded-md  border-[2px] border-[rgba(67,67,67,0.09)] px-5 py-2' >Cancel Changes</button>
                                <div >
                                        {!loading ? (
                                                <button type='submit' className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 cursor-pointer' >Save Changes</button>) : (
                                                <div className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 cursor-wait' >
                                                        <ClipLoader color="white" size={15} />
                                                </div>
                                        )}</div>
                        </div>
                </form>
        )
}

export default AdminCustomization