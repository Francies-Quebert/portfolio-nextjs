import React from 'react'

function DownloadButton({ path = '#', text= 'Download' }: { path?: string, text: string }) {
    return (
        <div className="border-2 border-primary w-max py-[10px]">
            <a className="btn-main mx-[20px] text-primary font-roboto text-[14px] " href={`${path}`} download={true}>{text}</a>
        </div>
    )
}

export default DownloadButton