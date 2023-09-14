import reportImage from "../../../../assets/reportImage.png"
import Image from "next/image";

function RandomIdPage() {
  // const router = useRouter();
  const  id  = 3;

  const downloadReport = ()=>{
    
  }
  
  return (
    <div className="w-full h-full">
        <div className='w-full h-full overflow-y-auto overflow-x-hidden p-2 text-sm'>
          <header className='text-[#000000B2] font-semibold mx-1 my-3'>Report Card for Academic Year 21’ - 22’ Term II</header>
            <div className="w-full h-full flex flex-col-reverse md:flex-row items-start">
              <Image src={reportImage} alt='' className='w-[70%] h-[40%]' style={{width: "70%", height: "70%"}}/>
              <button className="border-[1px] border-[#ccc] px-4 py-3 rounded-lg">Download report</button>
            </div>
        </div>
    </div>
  );
}

export default RandomIdPage;
