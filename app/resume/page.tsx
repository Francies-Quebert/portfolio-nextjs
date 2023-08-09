import PageTitle from '@/components/PageTitle'
import ResumeInformation from '@/components/ResumeInformation'
import SectionMainTitle from '@/components/SectionMainTitle'
import SkillBlock from '@/components/SkillBlock'
import { FiFileText } from '@react-icons/all-files/fi/FiFileText'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Resume',
}

const resume = () => {

  const skills = ['React.js', 'Typescript', 'JavaScript', 'CSS', 'SCSS', 'TailwindCSS', 'HTML/HTML5', 'Cross Browser Compatibility'
    , 'Interface Design and Implementation', 'Scrum', 'Next.JS', 'Node.JS', 'MySQL', 'MongoDB', 'GitHub', 'Jest ', 'React testing library', 
    'Cypress', 'Express.JS','AWS cloud']
  return (
    <>
      <div>
        <PageTitle text='My Resume.' Icon={<FiFileText className='text-font-inherit' />} />
        <div className='grid lg:grid-cols-2 gap-2'>
          <section>
            <SectionMainTitle text='EXPERIENCE' />
            <div>
              <ResumeInformation
                title={'Frontend developer'}
                titleDesc={'Hamilton capital holding limited'}
                desc={'Developed and maintained the Front end components of the Himalaya Exchange platform, ensuring a seamless and visually appealing user experience.'}
                from={'2022'}
                to={'2023'} />
              <ResumeInformation
                title={'Web developer'}
                titleDesc={'Skyelint Technologies'}
                desc={'Demonstrated versatility and adaptability by concurrently working on multiple projects, effectively managing time and priorities to meet tight deadlines and deliver high-quality results.'}
                from={'2019'}
                to={'2022'} />
            </div>
          </section>
          <section>
            <SectionMainTitle text='EDUCATION' />
            <div>
              <ResumeInformation
                title={'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY'}
                titleDesc={'Valia College of Arts, Commerce and Science'}
                desc={''}
                from={'2016'}
                to={'2019'} />
              <ResumeInformation
                title={'HIGHER SECONDARY CERTIFICATE'}
                titleDesc={'St. Xaviers Junior College'}
                desc={''}
                from={'2014'}
                to={'2016'} />
              <ResumeInformation
                title={'SECONDARY SCHOOL CERTIFICATE'}
                titleDesc={'St Blaise High School'}
                desc={''}
                from={'N/A'}
                to={'2014'} />
            </div>
          </section>
        </div>
        <section>
          <SectionMainTitle text='Skills' />
          <div className='flex flex-wrap gap-2'>
            {skills.map(skill => <SkillBlock text={skill} />)}
          </div>
        </section>
      </div>
    </>
  )
}

export default resume