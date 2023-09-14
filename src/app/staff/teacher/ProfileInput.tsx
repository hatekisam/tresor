"use client"

import FileDropZone from '@/components/FileDrop/FileDropZone';
import React from 'react'

const ProfileInput = () => {
        const handleFilesSelected = (filetype: string, files: File[]) => {
                console.log(filetype + ':' + files);
        };
        return (
                <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected} title='Cover photo of the student' />
        )
}

export default ProfileInput