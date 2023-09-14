'use client'

import FileDropZone from "@/components/FileDrop/FileDropZone";


const AddInnovations = () => {
    const handleFilesSelected = (filetype: string, files: File[]) => {
        console.log(filetype + ':' + files);
    };
    return (
        <div className="w-full">
            <header className="text-[#000000B2] font-semibold mx-1 my-2">Publish project</header>

            <p className="text-[rgba(67,67,67,0.43)] my-3 text-[12px] mx-1">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, </p>

            <form className="w-full flex flex-col px-1">
                <div className="max-[500px]:flex-col w-[99%] flex justify-between">
                    <div className="max-[500px]:w-full max-[500px]:mb-2 w-[50%]">
                        <FileDropZone onFilesSelected={handleFilesSelected} title="Cover photo of the project" fileType="projectPhot" />
                    </div>

                    <div className="max-[500px]:w-full w-[47%]">
                        <input type="text" placeholder='Project Name' className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <input type="text" placeholder='Project Website Link' className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <input type="text" placeholder='Project Github Link' className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <div>
                            <p>Project Problem Fields: </p>
                            <div className="w-full flex px-3 items-center my-3 h-16 text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]">
                                <button type="button" className="text-[12px] w-[150px] h-[90%] rounded-2xl border-2 border-[rgba(8, 40, 210, 0.37)] bg-[rgba(60, 100, 202, 0.22)]">
                                    Cyber Security
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <textarea name="projectInfo" cols={20} rows={20} className="w-full max-[500px]:h-[20vh] h-[35vh] p-2 resize-none rounded-lg border-2 border-[#43434317] bg-[rgba(67,67,67,0.03)]">

                </textarea>

                <div className="w-full h-16 flex items-end gap-4">
                    <button type="button" className="w-3/6 md:w-1/5 h-4/5 rounded-lg font-semibold text-[12px]  text-[#000000B2] bg-[#43434317]">Cancel change</button>
                    <button type="submit" className="w-3/6 md:w-1/5 h-4/5 rounded-lg font-semibold text-[12px] text-white bg-[#523873]">Publish Project</button>
                </div>
            </form>
        </div>
    )
}

export default AddInnovations