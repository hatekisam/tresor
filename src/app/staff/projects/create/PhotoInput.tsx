"use client"
import FileDropZone from '@/components/FileDrop/FileDropZone';
import React from 'react'

const PhotoInput = () => {
        const handleFilesSelected = (filetype: string, files: File[]) => {
                console.log(filetype + ':' + files);
        };
        return (
                <FileDropZone fileType='cover-photo-project' onFilesSelected={handleFilesSelected} title='Cover Photo of the project' />
        )
}

export default PhotoInput