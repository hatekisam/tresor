"use client"


import FileDropZone from '@/components/FileDrop/FileDropZone';
import React from 'react'

const DropPart = () => {
        const handleFilesSelected = (filetype:string,files: File[]) => {
                console.log( filetype+':' + files);
        };
        return (
                <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected} title='Main Landing Page Barner Image' />
                        <FileDropZone fileType='aboutLarge' onFilesSelected={handleFilesSelected} title='Main Landing About Us Large Image' />
                        <FileDropZone fileType='aboutSmall' onFilesSelected={handleFilesSelected} title='Main Landing About Us Smaller Image' />
                        <FileDropZone fileType='innovations' onFilesSelected={handleFilesSelected} title='Innovations Images maximum 10 shots' />
                        <FileDropZone fileType='newsSmall' onFilesSelected={handleFilesSelected} title='News Letter small Card Image' />
                        <FileDropZone fileType='newsLarge' onFilesSelected={handleFilesSelected} title='News Letter large Card Image' />
                </div>
        )
}

export default DropPart