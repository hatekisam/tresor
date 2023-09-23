"use client";
import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader, FadeLoader } from "react-spinners";
import axios from "axios";
import { backend } from "@/utils/constants";

const LoginForm = () => {
        const [loading, setLoading] = useState(false)
        const [showingPw, setShowingPw] = useState(true)
        const schema = yup.object().shape({
                email: yup.string().email("Please provide a valid email address").required("Please provide an email address"),
                password: yup.string().required("Please enter password"),
        })
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
        })
        const router = useRouter()
        const onSubmit = async (data: any) => {
                setLoading(true);
                console.log(data)
                axios.post(`${backend}/auth/login`, data).then((res) => {
                        console.log(res)
                        localStorage.setItem('token', res.data.data.refresh_token)
                        if (res.data.data.user.roles[0].role_name === 'ADMIN') {
                                router.push("/staff")
                        } else if (res.data.data.user.roles[0].role_name === "STUDENT") {
                                router.push("/student")
                        }
                        toast.success(res.data.message)
                }).catch((err) => {
                        console.log(err)
                        if (err.response.data.message === 'Invalid email or password') {
                                toast.error("Invalid email or password")
                        } else {
                                toast.error("Error logging in")
                        }
                }).finally(() => {
                        setLoading(false)
                })
        }
        return (
                <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="text" className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem] outline-none focus:outline-none my-2.5 placeholder:text-black' placeholder='Email'  {...register("email")} />
                        <p className="text-red-500">{errors.email?.message}</p>
                        <div className='relative'>
                                <input type={!showingPw ? "text" : "password"} className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem]  outline-none focus:outline-none my-2.5  placeholder:text-black' placeholder='Password' {...register("password")} />
                                <button type='button' className="absolute top-[38%] right-2" onClick={() => setShowingPw(!showingPw)}>
                                        {showingPw ? <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> :
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                                </button>
                        </div>
                        <p className="text-red-500">{errors.password?.message}</p>
                        <div className="my-2.5 flex flex-row justify-between">
                                <div className="flex flex-row gap-5">
                                        <input type="checkbox" name="remember" id="remember" className='w-[1.56rem] h-[1.56rem] rounded-[0.5rem] border-[#D9D9D9]' />
                                        <p className='text-[#4343436D] text-sm font-medium'>Remember Me</p>
                                </div>
                                <Link href={"/forgot-password"} className='font-medium text-[#523873] text-sm'>Forgot my password</Link>
                        </div>
                        {!loading ? <input type="submit" value="Login" className='cursor-pointer rounded-full border border-[#2955C56E] border-opacity-43 bg-[#523873] text-white px-[3.5rem]  py-3 my-2.5 text-[1rem] w-[60%]' /> : <button className='cursor-pointer rounded-full border border-[#2955C56E] border-opacity-43 bg-[#523873] text-white px-[3.5rem]  py-3 my-2.5 text-[1rem] w-[60%]'><ClipLoader color='white' size={10} /></button>}
                </form>
        )
}

export default LoginForm;
