import React from 'react'

interface Props {
    title: string,
    titleDesc: string,
    desc: string,
    from: string | number,
    to: string | number
}
function ResumeInformation({ title, titleDesc, desc, from, to }: Props) {
    return (
        <ul className="information-card">
            <li className='relative ml-[10px] p-5 transition-all'>
                <span className="line-left"></span>
                <div className="content">
                    <h4 className='font-playfair text-lg uppercase font-bold'>{title}</h4>
                    <h5 className='text-primary my-1 text-xs font-semibold uppercase'>{titleDesc}</h5>
                    <p className="info">
                        {desc}
                    </p>
                </div>
                <span className="inline-block absolute h-full top-0 -left-[10px]">
                    <span className="-top-[18px] absolute -translate-x-[120%]">{to}</span>
                    <span className="-bottom-[18px] absolute -translate-x-[120%]">{from}</span>
                </span>
            </li>
        </ul>
    )
}

export default ResumeInformation