import React from 'react'

interface PageTitleProp {
    text: string
    className?: string
    Icon?: JSX.Element
}

function PageTitle({ className, text, Icon }: PageTitleProp) {
    return (
        <div className={`flex justify-between items-center capitalize border-b border-b-[#fff3] pb-4 text-4xl text-primary font-bold border-dashed ${className}`}>
            <span className='text-font-inherit font-playfair'>{text}</span>
            <span className='text-font-inherit hidden md:block'>{Icon}</span>
        </div>
    )
}

export default PageTitle