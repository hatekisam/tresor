import React from 'react'
import newOne from "../../assets/newOne.jpg"
import newTwo from "../../assets/newTwo.jpg"
import AdminGraph from '@/components/Graphs/AdminGraph'
import Announcement from '@/components/Announcement/Announcement'
import ProjectsTable from '@/components/HomePage/ProjectsTable'

const AdminDashboard = () => {
        return (
                <div className='relative h-full text-sm'>
                        <div className='lg:pr-[24vw] w-[100%] p-3 h-full overflow-y-auto'>
                                <p className='text-[19px] font-semibold my-2'>Welcome Back <span className='font-extrabold'>Buringiro Saad</span></p>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Statistics of  Rwanda Coding Academy</p>
                                <div className="flex flex-col sm:flex-row gap-4  my-2">
                                        <div className="w-full sm:w-[40%] h-full flex flex-row sm:flex-col gap-3">
                                                <div className='bg-[rgba(2,97,29,0.08)] border  border-[rgba(2,7,29,0.26)] rounded-md sm:h-[50%] p-5 flex flex-col gap-5 w-[70%] sm:w-full'>
                                                        <div className="flex flex-row justify-between px-3 ">
                                                                <p className='text-[rgba(3,146,67,0.86)] font-extrabold text-[37px]'>89 %</p>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                                                        <path d="M35.2917 43.75C33.0484 43.75 30.897 42.8589 29.3107 41.2726C27.7245 39.6864 26.8333 37.535 26.8333 35.2917C26.8333 33.0484 27.7245 30.897 29.3107 29.3107C30.897 27.7245 33.0484 26.8333 35.2917 26.8333C37.535 26.8333 39.6864 27.7245 41.2726 29.3107C42.8589 30.897 43.75 33.0484 43.75 35.2917C43.75 37.535 42.8589 39.6864 41.2726 41.2726C39.6864 42.8589 37.535 43.75 35.2917 43.75ZM35.2917 38.9167C36.2531 38.9167 37.1751 38.5347 37.8549 37.8549C38.5347 37.1751 38.9167 36.2531 38.9167 35.2917C38.9167 34.3303 38.5347 33.4082 37.8549 32.7284C37.1751 32.0486 36.2531 31.6667 35.2917 31.6667C34.3303 31.6667 33.4082 32.0486 32.7284 32.7284C32.0486 33.4082 31.6667 34.3303 31.6667 35.2917C31.6667 36.2531 32.0486 37.1751 32.7284 37.8549C33.4082 38.5347 34.3303 38.9167 35.2917 38.9167ZM8.70833 17.1667C7.59757 17.1667 6.49768 16.9479 5.47147 16.5228C4.44526 16.0977 3.51282 15.4747 2.72739 14.6893C1.94196 13.9038 1.31892 12.9714 0.893852 11.9452C0.468781 10.919 0.25 9.8191 0.25 8.70833C0.25 7.59757 0.468781 6.49768 0.893852 5.47147C1.31892 4.44526 1.94196 3.51282 2.72739 2.72739C3.51282 1.94196 4.44526 1.31892 5.47147 0.893852C6.49768 0.468781 7.59757 0.25 8.70833 0.25C10.9516 0.25 13.103 1.14114 14.6893 2.72739C16.2755 4.31363 17.1667 6.46504 17.1667 8.70833C17.1667 10.9516 16.2755 13.103 14.6893 14.6893C13.103 16.2755 10.9516 17.1667 8.70833 17.1667ZM8.70833 12.3333C9.66974 12.3333 10.5918 11.9514 11.2716 11.2716C11.9514 10.5918 12.3333 9.66974 12.3333 8.70833C12.3333 7.74692 11.9514 6.82489 11.2716 6.14507C10.5918 5.46525 9.66974 5.08333 8.70833 5.08333C7.74692 5.08333 6.82489 5.46525 6.14507 6.14507C5.46525 6.82489 5.08333 7.74692 5.08333 8.70833C5.08333 9.66974 5.46525 10.5918 6.14507 11.2716C6.82489 11.9514 7.74692 12.3333 8.70833 12.3333ZM39.0882 1.49458L42.5054 4.91175L4.91417 42.5054L1.497 39.0882L39.0858 1.49458H39.0882Z" fill="#19BC64" fillOpacity="0.12" />
                                                                </svg>
                                                        </div>
                                                        <div className="flex flex-row justify-between px-3 ">
                                                                <p className='text-[rgba(3,146,67,0.86)] font-semibold text-xs'>Average Performance</p>
                                                                <div className="flex flex-row gap-1 text-[#C80048]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                                                                <path d="M7.14882 10.0405L0.109888 0.271173L13.9531 0.106283L7.14882 10.0405Z" fill="#C80048" />
                                                                        </svg>
                                                                        <p>23.6%</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='sm:h-[50%] w-[40%] sm:w-full flex flex-col  sm:flex-row gap-3  '>
                                                        <div className='bg-[rgba(8,40,210,0.09)] border  border-[rgba(8,40,210,0.47)]  text-[rgba(8,40,210,0.47)] rounded-md  w-full  sm:w-[50%] p-5 flex flex-col gap-3'>
                                                                <p className='font-extrabold text-[37px]'>234</p>
                                                                <p className='font-extrabold text-xs'>Parents</p>
                                                        </div>
                                                        <div className='bg-[rgba(82,56,115,0.17)] border  border-[rgba(82,56,115,0.55)] text-[rgba(82,56,115,0.55)] rounded-md  w-full  sm:w-[50%] p-5 flex flex-col gap-3'>
                                                                <p className='font-extrabold text-[37px]'>225</p>
                                                                <p className='font-extrabold text-xs'>Students</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-full sm:w-[60%] ">
                                                <div className='bg-[rgba(2,97,29,0.08)] border-2  border-[rgba(2,7,29,0.26)] rounded-md h-full p-3'>
                                                        <p className='text-[rgba(0,0,0,0.47)]'>Performance Graph</p>
                                                        <AdminGraph />
                                                </div>
                                        </div>
                                </div>
                                <ProjectsTable />
                        </div >
                        <div className='hidden lg:block absolute w-[23vw] top-0 right-0  h-[100%] overflow-y-auto bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md'>
                                <div>
                                        <div className="flex flex-row justify-between items-center  my-1 ">
                                                <p className='text-[rgba(67,67,67,0.47)] font-semibold '>Announcements</p>
                                                <div className="h-5 w-5 rounded-full bg-[#687CE2] text-white flex justify-center items-center text-xs">82</div>
                                        </div>
                                        <div className=''>
                                                <Announcement image={newOne} date={new Date()} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                                                <Announcement image={newTwo} date={new Date()} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                                        </div>
                                </div>
                                <div>
                                        <p className='text-[rgba(0,0,0,0.7)] my-2 text-[17px] font-medium'>Publish School Anouncements</p>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>These are only visible to the students who use the school platform</p>
                                        <form>
                                                <input type="text" placeholder='Anouncement Heading' className=' px-3 py-2 text-[rgba(0,0,0,0.8)] placeholder:text-[rgba(75,75,75,0.69)] bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full my-1' />
                                                <textarea placeholder='Anouncement Body' className="text-[rgba(0,0,0,0.8)] placeholder:text-[rgba(75,75,75,0.69)] bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2 my-1"></textarea>
                                                <input type="submit" value="Publish Anouncement" className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 w-full my-1 text-base font-medium' />
                                        </form>
                                </div>
                        </div>

                </div >
        )
}

export default AdminDashboard