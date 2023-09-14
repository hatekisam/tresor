import Image from 'next/image'
import React from 'react'
import reportImage from "../../../assets/reportImage.png"

const ReportCards = () => {

        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
                        <header className='text-[#000000B2] font-semibold mx-1 my-3'>Report Card for Academic Year 21’ - 22’ Term II</header>
                        <Image src={reportImage} alt='' className='w-[100%] h-[70%]'/>
                </div>
        )
}

export default ReportCards