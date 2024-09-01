'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
  <>
    {publicId && <CldImage src={publicId} width={270} height={180} alt="Imagen"/>}
    <CldUploadWidget 
        uploadPreset = 'p40qjftg' 
        options = {{
          sources: ['local', 'dropbox', 'google_drive'],
          styles: {
            palette: {
                window: "#CE6AFF",
                windowBorder: "#B482FF",
                tabIcon: "#FFFFFF",
                menuIcons: "#000000",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#D102E5",
                action: "#E76EFF",
                inactiveTabIcon: "#570074",
                error: "#FF0000",
                inProgress: "#F200FF",
                complete: "#0C00FF",
                sourceBg: "#3C0074"
            }
          }
        }}
        onSuccess = {(result, widget)=> {
          if (result.event !== 'success')
            return;

          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
        }}>

        {({open})=> <button 
            className='btn btn-primary' 
            onClick={()=> open()}>Upload
        </button> }

    </CldUploadWidget>
  </>
  )
}

export default UploadPage