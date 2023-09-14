"use client"
import { FC, ReactNode, useState } from "react";
import { useDropzone } from "react-dropzone"

const FileDropZone: FC<{ fileType: string; onFilesSelected: (filetype: string, files: File[]) => void, title: string; }> = ({
        fileType,
        onFilesSelected,
        title
}) => {
        const [selectedImage, setSelectedImage] = useState<string | null>(null)
        const onDrop = (acceptedFiles: File[]) => {
                onFilesSelected(fileType, acceptedFiles);
                const file = acceptedFiles[0];
                if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                                setSelectedImage(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                }
        };

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
                onDrop,
                accept: {
                        'image/png': ['.png'],
                }
        });

        return (
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active bg-[rgba(42,10,82,0.1)]' : ''}`}>
                        <input {...getInputProps()} />
                        {selectedImage !== null ?
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center p-2'>
                                        <img src={selectedImage as string} alt="Selected" className="w-[90%] h-[90%]" />
                                </div>
                                : (
                                        <div>
                                                {isDragActive ? (
                                                        <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center p-2 '>
                                                                <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drop the file here</p>
                                                        </div>
                                                ) : (
                                                        <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center  items-center p-2'>
                                                                <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                                                <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>{title}</p>
                                                        </div>
                                                )}
                                        </div>
                                )}
                </div>
        );
};

export default FileDropZone