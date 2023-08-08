'use client'
import React from 'react'
import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiFileText } from "@react-icons/all-files/fi/FiFileText";
import { FiBriefcase } from "@react-icons/all-files/fi/FiBriefcase";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import Image from "next/image";
import ActiveLink from './ActiveLink';
import image from '@/assets/image.jpg';
import { Url } from 'url';

export default function layout({ cointainerClassName = '', setShowNavBar }: { cointainerClassName: string, setShowNavBar: (val: boolean) => void }) {

  const navigation = [{
    name: 'Home',
    Icon: () => <FiHome />,
    href: '/'
  }, {
    name: 'About Me',
    Icon: () => <FiUser />,
    href: '/about'
  }, {
    name: 'Resume',
    Icon: () => <FiFileText />,
    href: '/resume'
  }, {
    name: 'Portfolio',
    Icon: () => <FiBriefcase />,
    href: '/portfolio'
  }, {
    name: 'Blog',
    Icon: () => <FiBook />,
    href: '/blog'
  }, {
    name: 'Contact',
    Icon: () => <FiMail />,
    href: '/contact'
  }]

  return (
    <header className={cointainerClassName}>
      <div className='flex-1'>
        <div className='min-h-full'>
          <div className='relative'><Image src={image} alt='picture' className='' priority/>
            <div className='absolute left-0 bottom-0 right-0 flex z-50 py-2 text-center text-xl text-white  font-bold justify-center items-center before:z-[-1] before:absolute before:opacity-80 before:bg-primary before:w-full before:h-full '><div className='font-jacques'>Francies Fernandes</div></div>
          </div>
          <nav className="nav-menu pb-14">
            <ul>
              {
                navigation.map(({ name, Icon, href }: { name: string, Icon: () => JSX.Element, href: string }) => <li key={name}>
                  <ActiveLink onClick={() => setShowNavBar(false)} as={href} href={href} className={`flex uppercase pl-10 items-center py-2 border-y border-[#202226] leading-8 hover:bg-primary/[.5] hover:text-white`} activeClassName={'active'}>
                    <span className="pr-[1em] text-[0.8em]"> <Icon /> </span>
                    <span className='text-[0.8em]'>{name}</span>
                  </ActiveLink> </li>)
              }
            </ul>
          </nav>
        </div>
      </div>
      <footer className='text-xs '>Made with Next.js</footer>
    </header>
  )
}
