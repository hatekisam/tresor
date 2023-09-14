

import { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import { useRouter } from 'next/navigation'
import Navbar from '@/components/NavBar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import StudentSidebar from '@/components/Sidebar/StudentSidebar'
import StudentNavbar from '@/components/NavBar/StudentNavbar'


export const metadata: Metadata = {
        title: 'Students Portal',
        description: 'This is the student portal for the RCA Web',
        icons: "/favicon.png"
}

export default function RootLayout({
        children,
}: {
        children: React.ReactNode
}) {

        // const router = useRouter()
        // useEffect(() => {
        //         if (!localStorage.getItem("token")) {
        //                 router.push("/login")
        //         }
        // }, [])
        return (
                <div className='h-screen flex flex-col overflow-hidden w-full'>
                        <StudentNavbar />
                        <div className="flex flex-row h-[80%]  my-1 px-3 gap-3">
                                <StudentSidebar />
                                <div className="w-full md:w-[75vw] lg:w-[80vw]">
                                        {children}
                                </div>
                        </div>
                        <Footer />
                </div>
        )
}