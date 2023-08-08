import React from 'react'

// create api route for this data --api-route

// const data = [
//     { label: 'Name', text: 'Francies Feranandes' },
//     { label: 'Age', text: '24' },
//     { label: 'Residence', text: 'London, United Kingdom' },
//     { label: 'Email', text: 'francies.quebert@gmail.com' },
//     { label: 'title', text: 'Front End / Full Stack Developer' },
// ]

export interface UserItem {
    label: string;
    text: string;
  }
  
  interface UserProps {
    data: UserItem[];
  }


function PersolnalInformation({ data }: UserProps) {
    return (
        <ul>
            {data.map(({ label, text }, i) => {
                return <li key={i} className='leading-4 mb-4 '>
                    <span className="text-base font-bold font-playfair underline underline-offset-2 decoration-primary mr-4  after:content-[':'] relative after:absolute after:right-[-10px]">{label}</span>
                    <span className="text-base font-roboto text-dark-theme-text">{text}</span>
                </li>
            })}

        </ul>
    )
}

export default PersolnalInformation