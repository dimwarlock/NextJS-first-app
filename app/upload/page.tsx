'use client';
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
  return (
    <CldUploadWidget 
        uploadPreset = 'p40qjftg' 
        onSuccess = {(result, widget)=> {console.log(result)}}
    >
        {({open})=> <button 
            className='btn btn-primary' 
            onClick={()=> open()}>Upload
        </button> }
    </CldUploadWidget>
  )
}

export default UploadPage