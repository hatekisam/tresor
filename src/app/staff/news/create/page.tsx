"use client"
import React, { useState } from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ClipLoader, FadeLoader } from 'react-spinners';
import axios from 'axios';
import { backend } from '@/utils/constants';
import FileDropZone from '@/components/FileDrop/FileDropZone';
import { useRouter } from 'next/navigation';

const Page = () => {
        const router = useRouter()
        const [loading, setLoading] = useState(false)
        const [selectedFile, setSelectedFile] = useState<File | null>()
        const schema = yup.object().shape({
                headline: yup.string().required("Please provide the headline for the news"),
                description: yup.string().required("Please provide the description for the news"),
                content: yup.string().required("Please provide the content for the news")
        })
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
        })
        const handleFilesSelected = (filetype: string, files: File[]) => {
                setSelectedFile(files[0])
        };
        const onSubmit = async (data: any) => {
                setLoading(true)
                const token = await localStorage.getItem('token')
                try {
                        const formData = new FormData();
                        formData.append('title', data.headline);
                        formData.append('shortDescription', data.description);
                        formData.append('longDescription', data.content);
                        if (selectedFile) {
                                formData.append('image', selectedFile);
                        }
                        axios.post(`${backend}/news/create`, formData, {
                                headers: {
                                        Authorization: `Bearer ${token}`
                                }
                        }).then((res) => {
                                console.log(res)
                                toast.success("News created successfully")
                        }).catch((err) => {
                                console.log(err)
                                toast.error("Error creating news")
                        })
                        router.push("/staff/news/create")
                        setLoading(false)
                } catch (error: any) {
                        setLoading(false)
                        toast.error(error.response.data.message)
                }
        }
        return (
                <form className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm' onSubmit={handleSubmit(onSubmit)}>
                        < h2 className='text-[17px] font-medium  text-[rgba(0,0,0,0.7)] my-2' >Compose News</h2 >
                        <div className="my-10 grid md:grid-cols-2 gap-5">
                                <FileDropZone fileType='newsPhot' onFilesSelected={handleFilesSelected} title='Cover photo of the student' />
                                <div className="w-full">
                                        <input type="text" placeholder='News Headlines' className=' w-full  my-2 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' {...register("headline")} />
                                        <p className="text-red-500">{errors.headline?.message}</p>
                                        <textarea placeholder='Description this should be short . . . .' className="h-40  my-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2" {...register("description")} ></textarea>
                                        <p className="text-red-500">{errors.description?.message}</p>
                                </div>
                        </div>
                        <div className="my-10">
                                <textarea placeholder='Type all the new here . . . .' className="h-80  my-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2" {...register("content")} ></textarea>
                                <p className="text-red-500">{errors.content?.message}</p>
                        </div>
                        <div className="my-10 flex flex-row gap-10 items-center">
                                <button type='button' className='bg-[rgba(67,67,67,0.03)]  text-black rounded-md  border-[2px] border-[rgba(67,67,67,0.09)] px-5 py-2' >Cancel Changes</button>
                                <div >
                                        {!loading ? (
                                                <button type='submit' className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 cursor-pointer' >Publish project</button>) : (
                                                <div className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 cursor-wait' >
                                                        <ClipLoader color="white" size={15} />
                                                </div>
                                        )}</div>
                        </div>
                </form >
        )
}

export default Page