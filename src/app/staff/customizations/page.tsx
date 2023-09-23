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
import FileDropZone from '@/components/FileDrop/FileDropZone';
const AdminCustomization: React.FC = () => {
        const navigate = useRouter()
        const [loading, setLoading] = useState(false)
        const [images, setImages] = useState<{ name: string, image: File }[]>()
        const schema = yup.object().shape({
                aboutUsText: yup.string().optional(),
                innovationText: yup.string().optional(),
                yearsFoundation: yup.number().nullable().optional(),
                stakePartener: yup.number().nullable().optional(),
                students: yup.number().nullable().optional(),
                startups: yup.number().nullable().optional(),
                email: yup.string().optional(),
                slackLink: yup.string().optional(),
                discordServer: yup.string().optional(),
                facebook: yup.string().optional(),
                instargram: yup.string().optional(),
                phone: yup.string().optional(),
                twitter: yup.string().optional(),
                linkedIn: yup.string().optional(),
                github: yup.string().optional(),
        })
        const { handleSubmit, register, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
        })
        const onSubmit = (data: any) => {
                const web = {
                        yearsOfFoundation: data.yearsFoundation.toString(),
                        studentsNumber: data.students.toString(),
                        startupsNumber: data.startups.toString(),
                        aboutUsText: data.aboutUsText,
                        innovationText: data.innovationText,
                        schoolEmail: data.email,
                        slackWorkspaceLink: data.slackLink,
                        DiscordServerLink: data.discordServer,
                        FacebookLink: data.facebook,
                        snapchatLink: 'brabrabra',
                        InstgramLink: data.instargram,
                        schoolPhoneNumber: data.phone,
                        TwitterLink: data.twitter,
                        LinkedInLink: data.linkedIn,
                        githubLink: data.github,
                }
                const formData = new FormData();
                formData.append('yearsOfFoundation', data.yearsFoundation?.toString())
                formData.append('studentsNumber', data.studentsNumber?.toString())
                formData.append('startupsNumber', data.startupsNumber?.toString())
                formData.append('aboutUsText', data.aboutUsText?.toString())
                formData.append('innovationText', data.innovationText?.toString())
                formData.append('schoolEmail', data.email?.toString())
                formData.append('slackWorkspaceLink', data.slackLink?.toString())
                formData.append('DiscordServerLink', data.discordServer?.toString())
                formData.append('FacebookLink', data.facebook?.toString())
                formData.append('snapchatLink', 'fsdfasdfasdf'?.toString())
                formData.append('InstgramLink', data.instargram?.toString())
                formData.append('schoolPhoneNumber', data.phone?.toString())
                formData.append('TwitterLink', data.twitter?.toString())
                formData.append('LinkedInLink', data.linkedIn?.toString())
                formData.append('githubLink', data.github?.toString())
                images?.map((img) => {
                        formData.append(img.name, img.image)
                })
                setLoading(true)
                const token = localStorage.getItem("token")
                console.log(token)
                axios.post(`${backend}/web-content/create`, formData, {
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
        const handleFilesSelected = (filetype: string, files: File[]) => {
                const newImage = {
                        name: filetype,
                        image: files[0] // Use "image" instead of "files"
                };
                setImages((prevImages) => (prevImages ? [...prevImages, newImage] : [newImage])); // Wrap newImage in an array
        };

        return (
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2'>Customization of the Website</h2>
                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Landing Page</p>
                        <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
                                <FileDropZone fileType='landingBurnerImage' onFilesSelected={handleFilesSelected} title='Main Landing Page Barner Image' />
                                <FileDropZone fileType='abouUsImage' onFilesSelected={handleFilesSelected} title='Main Landing About Us Large Image' />
                                {/* <FileDropZone fileType='aboutSmall' onFilesSelected={handleFilesSelected} title='Main Landing About Us Smaller Image' /> */}
                                <FileDropZone fileType='innovationMainImage' onFilesSelected={handleFilesSelected} title='Innovations Images maximum 10 shots' />
                                <FileDropZone fileType='newsLetterCardImage' onFilesSelected={handleFilesSelected} title='News Letter small Card Image' />
                                <FileDropZone fileType='newsLetterLargeImage' onFilesSelected={handleFilesSelected} title='News Letter large Card Image' />
                        </div>
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