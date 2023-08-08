import React from 'react'

const SectionTitle = ({ title, fontSize }: { title: string | JSX.Element, fontSize?: string }) => {
    return (
        <h3 className={`pb-6 font-playfair ${fontSize ? fontSize : 'text-2xl'} font-semibold`}>{title}</h3>
    )
}

export default SectionTitle