import PageTitle from '@/components/PageTitle'
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio',
}


function page() {
  return (
    <>
      <div>
        <PageTitle text='Portfolio.' Icon={<FiBriefcase className='text-font-inherit' />} />
      </div>
    </>
  )
}

export default page