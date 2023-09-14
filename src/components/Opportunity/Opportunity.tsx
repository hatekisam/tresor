'use client'

import { StaticImageData } from "next/image"
import Image from "next/image"

interface Props {
    displayImage: StaticImageData,
    titleHeader: String,
    time: String,
    content: String

}
const Opportunity = ({displayImage, titleHeader, time, content}: Props)=>{
    return(
        // min-h-[300px]
        <div className="min-h-[320px] flex flex-col items-center justify-center bg-[#43434317] rounded-lg">
            <div className="w-[97%] h-[45%] bg-[#43434317] rounded-lg">
                {/* <Image src={displayImage} alt="header image"></Image> */}
            </div>

            <header className="w-[97%] text-[14px] font-bold text-[#000000B2] my-3">
                {titleHeader}
            </header>
            <p className="w-[97%] text-[10px] mb-2"> {time}</p>

            <p className="w-[97%] text-[11px] mb-2">{content}</p>

            <button className="w-[97%] h-[3rem] bg-[#523873] rounded-lg text-white cursor-pointer text-[80%]">Read and use Opportunity</button>
        </div>
    )
}


export default Opportunity