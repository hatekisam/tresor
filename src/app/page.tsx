import LoginForm from '@/components/Login/Form'
import Navbar from '@/components/NavBar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-1'>
      <Navbar logginPage />
      <div className='flex items-center justify-center '>
        <div className='rounded-[0.625rem] border border-gray-400 border-opacity-10 px-[2.75rem] py-[1.5rem] text-center w-full md:w-[70%] lg:w-[40%]'>
          <h2 className='text-[#00000082]  font-extrabold text-[1.3125rem]'>School Account Login</h2>
          <p className='text-[#4343436E] font-medium text-sm'>Log In to your account</p>
          <LoginForm />
          <p className='text-[#4343436D] font-medium text-sm text-left'>Rwanda Coding Academy presents a streamlined Student and School Management System for students, parents, and staff. Easily access and oversee attendance, grades, assignments, and communication through our secure login. Real-time updates and notifications keep you informed, making your educational journey at Rwanda Coding Academy efficient and seamless.
          </p>
          <button className='float-left text-[#52387387] my-1.5'>Read more...</button>
        </div>
      </div>
    </div>
  )
}
