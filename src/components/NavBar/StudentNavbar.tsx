"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../assets/rcalogo.png"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface Props {
        logginPage?: boolean
}

const StudentNavbar: React.FC<Props> = ({ logginPage }) => {
        const [mobileNav, setMobileNav] = useState(false)
        const path = usePathname();

        const isActiveLink = (linkPath: string) => {
                return path === linkPath;
        };
        return (
                <div className='flex flex-row justify-between items-center mx-3 my-1.5 bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md  '>
                        {!logginPage && (<button onClick={() => { setMobileNav(true) }} className="block md:hidden transition-all duration-200 text-black">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="#1C274C"></path> </g></svg>
                        </button>)}
                        <div className={`absolute top-0 left-0  ${mobileNav ? "block" : "hidden"} transition-all duration-300  md:hidden pl-3 py-2 h-screen bg-white z-50 `}>
                                <div className='bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md h-full  w-[70vw] sm:w-[50vw]  text-[#00000075] text-sm'>
                                        <div className="flex justify-between">
                                                <p className='font-semibold my-2 mx-3 '>Menu</p>
                                                <button onClick={() => setMobileNav(false)}>
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z" fill="#1C274C"></path> </g></svg>
                                                </button>
                                        </div>
                                        <div className='font-medium'>
                                                <Link href={"/"}
                                                        className={isActiveLink("/") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2'}>
                                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.901 7C18.296 7.68556 18.946 8.18723 19.7093 8.3957C20.4726 8.60417 21.2873 8.50256 21.976 8.113C22.057 8.83665 21.9102 9.56754 21.5562 10.2039C21.2022 10.8402 20.6586 11.3502 20.001 11.663L20 18H13V16C13.0001 15.4954 12.8096 15.0094 12.4665 14.6395C12.1234 14.2695 11.6531 14.0428 11.15 14.005L11 14C10.4954 13.9998 10.0094 14.1904 9.63943 14.5335C9.26945 14.8766 9.04282 15.3468 9.00498 15.85L8.99998 16V18H1.99998V11.664C1.34113 11.3517 0.796262 10.8414 0.441468 10.2044C0.0866735 9.56746 -0.0603314 8.83558 0.0209821 8.111C0.709618 8.50136 1.52466 8.60362 2.28839 8.3955C3.05212 8.18738 3.70259 7.68576 4.09798 7H17.901ZM16.93 9H5.06898L4.99298 9.079C4.56198 9.499 4.05798 9.839 3.50698 10.081L3.41098 10.12L3.99998 10.4L3.99898 16L7.00098 15.999V15.927L7.01098 15.704C7.15998 13.688 8.79098 12.105 10.865 12.006L11.073 12.001L11.296 12.011C12.2681 12.0831 13.1804 12.5077 13.8616 13.2051C14.5427 13.9024 14.9457 14.8245 14.995 15.798L14.999 15.999L18 16L18.001 10.4L18.588 10.12L18.493 10.08C17.9414 9.83849 17.438 9.49938 17.007 9.079L16.93 9ZM16.036 0C16.1075 0.4961 16.2848 0.971049 16.5557 1.39272C16.8267 1.81438 17.1851 2.17293 17.6066 2.4441C18.0282 2.71527 18.5031 2.89273 18.9991 2.96448C19.4952 3.03624 20.0009 3.00061 20.482 2.86C20.3964 3.68858 20.018 4.45945 19.415 5.03408C18.8119 5.60872 18.0237 5.94943 17.192 5.995L17 6H4.99998C4.13396 6.00014 3.29863 5.6792 2.65549 5.09923C2.01234 4.51925 1.60706 3.72143 1.51798 2.86C1.99909 3.00061 2.50478 3.03624 3.00085 2.96448C3.49691 2.89273 3.97178 2.71527 4.39332 2.4441C4.81487 2.17293 5.17325 1.81438 5.44423 1.39272C5.71521 0.971049 5.89245 0.4961 5.96398 0H16.036ZM14.6 2H7.39898C7.0387 2.70545 6.53047 3.32487 5.90898 3.816L5.66098 4H16.338L16.326 3.992C15.6828 3.53728 15.1444 2.95012 14.747 2.27L14.6 2Z" />
                                                        </svg>
                                                        <p className=''>{"Dashboard"}</p>
                                                </Link>
                                                <Link href={"/report-cards"}
                                                        className={isActiveLink("/report-cards") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2'}>
                                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.087 6H18.913C19.0514 5.99994 19.1882 6.02859 19.3149 6.08413C19.4416 6.13968 19.5555 6.22092 19.6492 6.32271C19.7429 6.4245 19.8144 6.54463 19.8593 6.67549C19.9042 6.80636 19.9215 6.94512 19.91 7.083L19.076 17.083C19.0552 17.3329 18.9413 17.5658 18.7568 17.7357C18.5723 17.9055 18.3308 17.9999 18.08 18H1.92C1.66925 17.9999 1.42769 17.9055 1.24322 17.7357C1.05874 17.5658 0.944811 17.3329 0.923999 17.083L0.0899984 7.083C0.0785149 6.94512 0.0957673 6.80636 0.140664 6.67549C0.185562 6.54463 0.257127 6.4245 0.350834 6.32271C0.44454 6.22092 0.55835 6.13968 0.685065 6.08413C0.81178 6.02859 0.948643 5.99994 1.087 6ZM2.84 16H17.16L17.826 8H2.174L2.84 16ZM11.414 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V4H0.999999V1C0.999999 0.734784 1.10536 0.48043 1.29289 0.292893C1.48043 0.105357 1.73478 0 2 0H9.414L11.414 2Z" />
                                                        </svg>
                                                        <p className=''>{"Report-Cards"}</p>
                                                </Link>
                                                <Link href={"/innovations"}
                                                        className={isActiveLink("/innovations") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2'}>
                                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 0C6.69 0 9.024 1.517 10.197 3.741C11.374 2.083 13.31 1 15.5 1H19V3.5C19 7.09 16.09 10 12.5 10H11V11H16V18C16 19.105 15.105 20 14 20H6C4.895 20 4 19.105 4 18V11H9V9H7C3.134 9 0 5.866 0 2V0H4ZM14 13H6V18H14V13ZM17 3H15.5C13.015 3 11 5.015 11 7.5V8H12.5C14.985 8 17 5.985 17 3.5V3ZM4 2H2C2 4.761 4.239 7 7 7H9C9 4.239 6.761 2 4 2Z" />
                                                        </svg>
                                                        <p className=''>{"Innovations"}</p>
                                                </Link>
                                                <Link href={"/parents-students"}
                                                        className={isActiveLink("/parents-students") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2'}>
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                        d="M15 11L14.999 14H18V16H14.999L15 19H13L12.999 16H10V14H12.999L13 11H15ZM8 14V16H0V14H8ZM18 7V9H0V7H18ZM18 0V2H0V0H18Z"
                                                                />
                                                        </svg>
                                                        <p className=''>{"Parents | Students"}</p>
                                                </Link>
                                                <Link href={"/customizations"}
                                                        className={isActiveLink("/customizations") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2'}>
                                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.64597 14.2603L11.038 16.4223L14.43 14.2613L16.29 15.4463L11.038 18.7923L5.78597 15.4463L7.64597 14.2613V14.2603ZM6.76897 5.98033L9.16197 4.42733L6.73697 2.85333L4.27997 4.37033L6.76997 5.98033H6.76897ZM8.60897 7.17033L11 8.71933L13.39 7.17233L11 5.61933L8.60897 7.17133V7.17033ZM12.84 9.91033L15.264 11.4783L17.714 9.97633L15.229 8.36433L12.84 9.90933V9.91033ZM11 3.23433L15.237 0.486328L21.46 4.33033L17.068 7.17333L21.461 10.0233L15.235 13.8423L11 11.1003L6.76497 13.8403L0.534973 10.0233L4.93097 7.17233L0.538973 4.33033L6.76297 0.487328L11 3.23533V3.23433ZM12.837 4.42633L15.23 5.98033L17.719 4.37033L15.263 2.85333L12.837 4.42733V4.42633ZM9.15997 9.91033L6.76997 8.36433L4.28397 9.97733L6.73497 11.4793L9.15997 9.91033Z" />
                                                        </svg>
                                                        <p className=''>{"Customizations"}</p>
                                                </Link>
                                                <Link href={"/profile"}
                                                        className={isActiveLink("/profile") ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2' : 'flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-2 hover:fill-[]'}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                                <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5.013 16.256C6.42855 17.3877 8.18768 18.0029 10 18C11.97 18 13.773 17.288 15.167 16.108C14.5157 15.4397 13.7371 14.9089 12.877 14.5468C12.017 14.1847 11.0931 13.9988 10.16 14C9.19259 13.9989 8.2355 14.1989 7.34947 14.5872C6.46343 14.9756 5.66778 15.5439 5.013 16.256ZM3.616 14.82C4.45645 13.9281 5.47067 13.2177 6.59614 12.7327C7.72161 12.2477 8.93448 11.9984 10.16 12C11.3417 11.9985 12.512 12.2304 13.6037 12.6824C14.6955 13.1344 15.6873 13.7976 16.522 14.634C17.3781 13.4291 17.8836 12.0106 17.9826 10.5359C18.0815 9.06119 17.77 7.58789 17.0825 6.27946C16.395 4.97102 15.3585 3.87862 14.088 3.12345C12.8174 2.36827 11.3625 1.97984 9.8846 2.00125C8.40672 2.02267 6.96366 2.45308 5.71552 3.24476C4.46738 4.03643 3.46296 5.1584 2.81369 6.4862C2.16442 7.814 1.89569 9.29571 2.03732 10.7669C2.17894 12.2382 2.72537 13.6414 3.616 14.821V14.82ZM10 11C8.93913 11 7.92172 10.5786 7.17157 9.82843C6.42143 9.07828 6 8.06087 6 7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C14 8.06087 13.5786 9.07828 12.8284 9.82843C12.0783 10.5786 11.0609 11 10 11ZM10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9Z" />
                                                        </svg>
                                                        <p className=''>{"Profile"}</p>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                        <Image alt='Logo' src={logo} width={100} height={25} />
                        {!logginPage && (
                                <div className="hidden md:block bg-[white]   relative w-[40%]  rounded-md" >
                                        <input type="text" placeholder='Search of pages here  .  .  .' className='h-full w-full px-5 pr-10 py-2  border-2   border-[#2A0A52] rounded-md outline-none' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className='absolute right-2 cursor-pointer top-[30%]'>
                                                <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="#434343" fillOpacity="0.71" />
                                        </svg>
                                </div>
                        )}
                        <div className='h-11 w-11 bg-[#0828D230] p-2 rounded-full'>
                                <div className="h-7 w-7 rounded-full bg-[#0828D296]"></div>
                        </div>
                </div>
        )
}

export default StudentNavbar