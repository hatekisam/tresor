'use client'

import { StaticImageData } from "next/image"
import Image from "next/image"
import eyeIcon from "../../assets/eyeIcon.png"
import editIcon from "../../assets/editIcon.png"
import deleteIcon from "../../assets/deleteIcon.png"
import newOne from "../../assets/newFour.png"
import Link from "next/link"


interface Props {
        // displayImage: StaticImageData,
        titleHeader: String,
        time: String,
        content: String,
        appreciations: Number,
        FMessages: Number,
        publisher: String,
        id: number

}
const StudentProject = ({ titleHeader, time, content, appreciations, FMessages, publisher, id }: Props) => {
        const date = time.split("T")[0]
        return (
                // min-h-[300px]
                <div className="max-[700px]:h-[240px] h-[180px] w-full flex items-center justify-center bg-[#43434317] rounded-lg my-2">
                        <div className="h-[95%] w-[25%] bg-[#43434317] rounded-lg">
                                <Image src={newOne} alt="header image" className="w-full h-full"></Image>
                        </div>

                        <div className="w-[63%] mx-4">
                                <header className="flex justify-between text-[14px] font-bold text-[#000000B2] my-3">
                                        {titleHeader}
                                        <p className="text-[9px] text-[#2955C5A6]">{`${date}` || "0 days ago"}</p>
                                </header>
                                <p className=" text-[10px]  md:mb-7"> {date}</p>

                                <p className="w-[90%] text-[11px] md:mb-6">{content}</p>

                                <div className="flex justify-between items-center text-[9px]">
                                        <h3>{`${appreciations}`} appreciations</h3>
                                        <h3>{`${5}`} Feedback messages</h3>
                                        <h3>Published by: {publisher}</h3>

                                </div>
                        </div>

                        <div className="w-16 h-[90%] flex flex-col items-center justify-evenly bg-[#43434317] mx-2 rounded-lg">
                                <Link href={`/innovations/${id}`}><Image src={eyeIcon} alt="" ></Image></Link>
                                <Image src={editIcon} alt=""></Image>
                                <Image src={deleteIcon} alt=""></Image>
                        </div>
                </div>
        )
}


export default StudentProject