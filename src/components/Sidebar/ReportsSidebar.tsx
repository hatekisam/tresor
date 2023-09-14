'use client'
import DropDown from "../Dropdown/Dropdown"
import menu from "../../assets/menu.png"
import arrow from "../../assets/arrow.png"
import Image from "next/image"
import { useState } from "react"

interface Drop {
        dropHeader: string,
        dropItems: object[],
        id: number
}
const ReportSidebar = () => {
        const Dropdowns = [
                {
                        dropHeader: "Academic Year 21’ - 22’ (Yr 1)",
                        id: 1,
                        dropItems: [
                                {
                                        to: "/report-cards/1?term=1",
                                        name: "Year One - Term I"
                                },
                                {
                                        to: "/report-cards/1?term=2",
                                        name: "Year One - Term II"
                                },
                                {
                                        to: "/report-cards/1?term=3",
                                        name: "Year One - Term III"
                                },
                        ]
                },

                {
                        dropHeader: "Academic Year 22’ - 23’ (Yr 2)",
                        id: 2,
                        dropItems: [
                                {
                                        to: "/report-cards/2?term=1",
                                        name: "Year Two - Term I"
                                },
                                {
                                        to: "/report-cards/2?term=2",
                                        name: "Year Two - Term II"
                                },
                                {
                                        to: "/report-cards/2?term=3",
                                        name: "Year Two - Term III"
                                },
                        ]
                },

                {
                        dropHeader: "Academic Year 23’ - 24’ (Yr 3)",
                        id: 3,
                        dropItems: [
                                {
                                        to: "/report-cards/3?term=1",
                                        name: "Year Three - Term I"
                                },
                                {
                                        to: "/report-cards/3?term=2",
                                        name: "Year Three - Term II"
                                },
                                {
                                        to: "/report-cards/2?term=3",
                                        name: "Year Three - Term III"
                                },
                        ]
                },
        ]
        const [openMenu, setOpenMenu] = useState(false)

        return (
                <div className="relative">
                        <Image src={openMenu ? arrow : menu} alt="menu icon" onClick={() => setOpenMenu(!openMenu)} className="w-[30px] h-[30px] cursor-pointer" />

                        {openMenu && (
                                <div className="w-[300px] h-[93vh] flex flex-col items-center border-2 border-[#43434305] rounded-lg bg-[#EEEEEE] absolute top-9 z-50">
                                        <header className="text-[#000000B2] font-semibold mx-1 my-3">Report Card to class</header>

                                        <div className="w-[95%] flex flex-col items-center justify-center">
                                                {Dropdowns.map((dropdown: Drop) => {
                                                        return (
                                                                <DropDown dropHeader={dropdown.dropHeader} dDownItems={dropdown.dropItems} key={dropdown.id} />
                                                        )
                                                })}
                                        </div>
                                </div>
                        )}
                </div>
        )
}


export default ReportSidebar