import ReportSidebar from "@/components/Sidebar/ReportsSidebar"


const ReportLayout = ({children}: {children: React.ReactNode}) =>{
    return(
        <div className="w-full flex">
            <ReportSidebar/>
            {children}
        </div>
    )
}

export default ReportLayout