import LoginForm from '@/components/Login/Form'
import Navbar from '@/components/NavBar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col gap-1 '>
      <Navbar logginPage />
      <div className='flex items-center justify-center '>
        <div className='rounded-[0.625rem] border border-gray-400 border-opacity-10 px-[2.75rem] py-[1.5rem] text-center w-full md:w-[70%] lg:w-[40%]'>
          <h2 className='text-[#00000082]  font-extrabold text-[1.3125rem] my-2'>School Account Login</h2>
          <p className='text-[#4343436E] font-medium text-sm my-2'>Log In to your account</p>
          <LoginForm />
          <p className='text-[#4343436D] font-medium text-sm text-left my-3'>Rwanda Coding Academy offers a comprehensive Student and School Management System for efficient attendance, grades, assignments, and communication, ensuring a seamless educational experience.
          </p>
          <Link href={""} className='float-left text-[#52387387] my-1.5'>Read more...</Link>
        </div>
      </div>
    </div>
  )
}
