import FirebaseImage from '@/components/FirebaseImage'
import PageTitle from '@/components/PageTitle'
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio',
}


async function getData() {
  const host = headers().get("host");
  // console.log(`http://${host}/api/portfolio`, 'asdasdas')
  const res = await fetch(`http://${host}/api/portfolio`, { method: 'GET', cache: 'force-cache' });

  // const res = await (await import(`../api/about/route`)).GET();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


async function page() {

  const portfolio: any = await getData();

  return (
    <>
      <div>
        <PageTitle text='Portfolio.' Icon={<FiBriefcase className='text-font-inherit' />} />
      </div>
      <FirebaseImage
        src='portfolio/trello.PNG'
        alt={'some image'}
        width={100}
        height={100}
      />
      <Link href={'portfolio/123'}>some new path</Link>
    </>
  )
}

export default page