import React from 'react'

function SectionMainTitle({ text }: { text: string }) {
    return (
        <div className="my-[50px] text-center">
            <h3 className='font-playfair font-bold text-2xl px-[10px] py-[5px] inline-block relative border-b-2 border-primary before:bg-primary before:left-0 before:bottom-0 before:absolute before:content-[""] before:w-[2px] before:h-[5px] after:bg-primary after:right-0 after:bottom-0 after:absolute after:content-[""] after:w-[2px] after:h-[5px]'>{text}</h3>
        </div>
    )
}

export default SectionMainTitle