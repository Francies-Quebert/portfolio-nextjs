import Image from 'next/image'
import homeBG from '@/assets/london-eye.jpg'
import TypeWriter from '@/components/TypeWriter'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Francies Quebert Fernandes',
}

export default function Home() {
  return (
    <>
      <Head><title>Francies Quebert Fernandes - Front End Developer</title></Head>
      <main className='h-full w-full blur-bg'>
        <Image src={homeBG} alt={'home page Background'} className='object-cover absolute top-0 right-0' fill={true} priority />
        <div className='relative flex justify-center items-center flex-col h-full z-[2] text-white'>
          <div className='text-3xl text-center font-bold pb-4'><span className='text-primary text-3xl font-playfair'>Francies Quebert</span> Fernandes</div>
          <div className='text-center text-xl'>I am a <TypeWriter text={'Front-End Developer.'} delay={300} key='1' className='underline underline-offset-8 decoration-primary text-center text-xl ' /></div>
        </div>
      </main>
    </>
  )
}
