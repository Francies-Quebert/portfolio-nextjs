import PageTitle from '@/components/PageTitle';
import { FiBook } from '@react-icons/all-files/fi/FiBook';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
}


async function page() {
  return (
    <>

      <div>
        <PageTitle text='Blog' Icon={<FiBook className='text-font-inherit' />} />
      </div></>
  )
}

export default page