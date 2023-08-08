import DownloadButton from '@/components/DownloadButton';
import PageTitle from '@/components/PageTitle';
import PersolnalInformation, { UserItem } from '@/components/PersolnalInformation';
import SectionMainTitle from '@/components/SectionMainTitle';
import SectionTitle from '@/components/SectionTitle';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import React from 'react';
import Image from "next/image";
import Carousel from '@/components/Carousel';
import ServiceCard from '@/components/ServiceCard';
import Head from 'next/head';
import { Metadata } from 'next';
import { headers } from "next/headers";

interface TechData {
    id: number;
    path: string;
    width: number;
    height: number;
}
interface AboutProps {
    data: UserItem[];
    tech: TechData[]
}


async function getData() {
    const host = headers().get("host");
    console.log(`${host}/api/about`, `api routteeee`)
    const res = await fetch(`http://${host}/api/about`, { method: 'GET' });

    // const res = await (await import(`../api/about/route`)).GET();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const metadata: Metadata = {
    title: 'About me',
}

const About = async () => {
    const { data, tech }: AboutProps = await getData();

    return (
        <>
            <Head><title>About Me</title></Head>
            <div className='max-w-screen-lg mx-auto'>
                <PageTitle text='about me.' Icon={<FiUser className='text-font-inherit' />} />
                <div className='container pt-10 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='mb-10'>
                            <SectionTitle title={`Frontend Developer`} />
                            <div className="font font-roboto">
                                <p className='pb-4 font-roboto text-dark-theme-text'>As an ambitious and dedicated Front-End Developer with a specialization in React.js, my goal is to leverage my technical expertise and creative mindset to design and develop captivating user experiences that push the boundaries of web applications. Driven by a passion for innovation, I strive to cont</p>
                                <p className='pb-4 font-roboto text-dark-theme-text'>As a Front-End Developer, my objective is to continuously refine my skills, embrace challenges, and deliver solutions that not only meet but exceed client expectations. Through constant learning and growth, I seek to make a significant impact
                                    on the digital landscape, while embracing teamwork and innovation to create meaningful and user-friendly digital experiences for global audiences.</p>
                            </div>
                        </div>
                        <div>
                            <SectionTitle title={'Personal Information'} />
                            <PersolnalInformation data={data} />
                            <DownloadButton text='DOWNLOAD RESUME' path='/cv/FranciesFernandes.pdf' />
                        </div>
                    </div>

                    <section>
                        <SectionMainTitle text='SERVICES' />
                        <div>
                            <div className='flex justify-between flex-col xl:flex-row'>
                                <ServiceCard title='Frontend Development' type='web' description='Front-end developers craft website and app interfaces using HTML, CSS, and JavaScript for a user-friendly and visually appealing experience.' />
                                <ServiceCard title='React Development' type='web' description='A React developer utilizes the React library to build dynamic and interactive user interfaces for web applications, enhancing user experiences.' />
                                <ServiceCard title='Full stack Development' type='web' description='A React developer utilizes the React library to build dynamic and interactive user interfaces for web applications, enhancing user experiences.' />
                            </div>
                        </div>
                    </section>

                    <section>
                        <SectionMainTitle text='TECHNOLOGIES' />
                        <div className='pb-10'>
                            <Carousel items={tech.map(tc => ({ id: tc.id, element: <Image draggable={false} src={tc.path} alt="error" className={`image-tech`} width={tc.width} height={tc.height} /> }))} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About