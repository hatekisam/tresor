"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
interface Props {
        date: Date,
        title: string,
        content: String
        image: StaticImageData
}
const Announcement = ({ date, title, content, image }: Props) => {
        const timeDifference = new Date().getTime() - date.getTime();
        const secondsInADay = 24 * 60 * 60 * 1000;
        const secondsInAMonth = 30 * 24 * 60 * 60 * 1000;
        const secondsInAYear = 365 * 24 * 60 * 60 * 1000;

        const timeAgo = ((timeDifference) => timeDifference < 24 * 60 * 60 * 1000
                ? new Date(timeDifference).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : timeDifference < 30 * 24 * 60 * 60 * 1000
                        ? new Date(timeDifference).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' }).replace(/\s/g, ', ')
                        : new Date(timeDifference).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' }).replace(/\s/g, ', ')
        )(new Date().getTime() - date.getTime());

        // const timeAgo =
        //         timeDifference < secondsInADay
        //                 ? Math.floor(timeDifference / (60 * 1000)) + ' minutes ago'
        //                 : timeDifference < secondsInAMonth
        //                         ? Math.floor(timeDifference / (60 * 60 * 1000)) + ' hours ago'
        //                         : timeDifference < secondsInAYear
        //                                 ? Math.floor(timeDifference / (24 * 60 * 60 * 1000)) + ' days ago'
        //                                 : Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000)) + ' years ago';
        return (
                <div className="w-full h-[110px] my-4 flex justify-between  border border-[#ccc] py-2 px-1 rounded-lg overflow-y-hidden cursor-pointer relative">
                        <div className="absolute bg-white flex flex-row gap-1 bottom-0.5 right-0.5 rounded-md p-1">
                                <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className='w-4 h-4'>
                                                <g clipPath="url(#clip0_1055_840)">
                                                        <path d="M17.4552 3.125L15.3719 5.20833H5.20833V19.7917H19.7917V9.62812L21.875 7.54479V20.8333C21.875 21.1096 21.7653 21.3745 21.5699 21.5699C21.3746 21.7653 21.1096 21.875 20.8333 21.875H4.16667C3.8904 21.875 3.62545 21.7653 3.4301 21.5699C3.23475 21.3745 3.125 21.1096 3.125 20.8333V4.16667C3.125 3.8904 3.23475 3.62545 3.4301 3.4301C3.62545 3.23475 3.8904 3.125 4.16667 3.125H17.4552ZM21.3385 2.1875L22.8125 3.6625L13.2375 13.2375L11.7667 13.2406L11.7646 11.7646L21.3385 2.1875Z" fill="#3C64CA" />
                                                </g>
                                                <defs>
                                                        <clipPath id="clip0_1055_840">
                                                                <rect width="25" height="25" fill="white" />
                                                        </clipPath>
                                                </defs>
                                        </svg>
                                </button>
                                <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className='w-4 h-4'>
                                                <g clipPath="url(#clip0_1055_836)">
                                                        <path d="M12.5 22.9163C6.74686 22.9163 2.08331 18.2528 2.08331 12.4997C2.08331 6.74655 6.74686 2.08301 12.5 2.08301C18.2531 2.08301 22.9167 6.74655 22.9167 12.4997C22.9167 18.2528 18.2531 22.9163 12.5 22.9163ZM12.5 20.833C14.7101 20.833 16.8297 19.955 18.3925 18.3922C19.9553 16.8294 20.8333 14.7098 20.8333 12.4997C20.8333 10.2895 19.9553 8.16992 18.3925 6.60712C16.8297 5.04432 14.7101 4.16634 12.5 4.16634C10.2898 4.16634 8.17023 5.04432 6.60742 6.60712C5.04462 8.16992 4.16665 10.2895 4.16665 12.4997C4.16665 14.7098 5.04462 16.8294 6.60742 18.3922C8.17023 19.955 10.2898 20.833 12.5 20.833ZM17.5948 8.8778L8.87811 17.5945C8.3087 17.1887 7.81091 16.691 7.40519 16.1216L16.1219 7.40488C16.6913 7.81061 17.1891 8.3084 17.5948 8.8778Z" fill="#C80048" />
                                                </g>
                                                <defs>
                                                        <clipPath id="clip0_1055_836">
                                                                <rect width="25" height="25" fill="white" />
                                                        </clipPath>
                                                </defs>
                                        </svg>
                                </button>
                        </div>
                        <div className="w-2/5 h-[90%] rounded-lg bg-slate-100">
                        </div>
                        <div className="w-3/5 flex flex-col mx-3">
                                <div className='text-[rgba(0,0,0,0.29)] flex flex-row justify-between text-[9px] font-medium'>
                                        <p>{date.getDate()}{date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? 'st' : date.getDate() === 2 || date.getDate() === 22 ? 'nd' : date.getDate() === 3 || date.getDate() === 23 ? 'rd' : 'th'}</p>
                                        <p>{timeAgo}</p>
                                </div>
                                <p className='text-[rgba(0,0,0,0.47)] text-xs font-semibold'>{title}</p>
                                <p className="text-[rgba(0,0,0,0.29)] font-medium text-[11px]">{content}</p>
                        </div>
                </div>
        )
}

export default Announcement