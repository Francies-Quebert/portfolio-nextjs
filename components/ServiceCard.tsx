import React, { ReactNode } from 'react'
import SectionTitle from './SectionTitle'
import { BsLaptop } from '@react-icons/all-files/bs/BsLaptop'

interface Prop {
    title: string,
    description: string,
    type: string
}
function ServiceCard({ type,description,title }: Prop) {
    function Icon(props: any) {
        if (type == 'web') {
            return <BsLaptop {...props} />
        } else if (type == 'web') {
            return <BsLaptop {...props} />
        } else {
            return <></>
        }

    }

    return (
        <div className='flex flex-col  items-center justify-center pb-10'>
            <Icon size={80} className='text-primary pb-6 ' />
            <SectionTitle title={title} fontSize='text-lg' />
            <div className='w-60 text-center text-dark-theme-text'>{description}
            </div>
        </div>
    )
}

export default ServiceCard