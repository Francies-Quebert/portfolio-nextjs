import PageTitle from '@/components/PageTitle'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Me',
}

function page() {
  return (
    <>
      
      <div>
        <PageTitle text='Contact Me.' Icon={<FiMail className='text-font-inherit' />} />
      </div></>
  )
}

export default page