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
                            <SectionTitle title={`UI/UX Designer & Developer`} />
                            <div className="font font-roboto">
                                <p className='pb-4 font-roboto text-dark-theme-text'>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                                <p className='pb-4 font-roboto text-dark-theme-text'>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
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
                            <div className='flex justify-between flex-col lg:flex-row'>
                                <ServiceCard title='Web Development' type='web' description=' Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.' />
                                <ServiceCard title='Web Development' type='web' description=' Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.' />
                                <ServiceCard title='Web Development' type='web' description=' Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.' />
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