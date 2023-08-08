'use client'
import React, { useState } from 'react'
import Header from "@/components/header";
import { FiAlignJustify } from "@react-icons/all-files/fi/FiAlignJustify";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showNavBar, setShowNavBar] = useState(false)
  return (
    <>
      <div id='portfolio'>
      <div className='border border-white sm:border-0 md:hidden p-3 absolute top-11 right-8 cursor-pointer bg-[#00A3E1] rounded-md z-20' onClick={() => { setShowNavBar(!showNavBar) }}>
        <FiAlignJustify className='text-2xl' />
      </div>
      <Header cointainerClassName={`transition-all ${!showNavBar ? 'translate-x-[-400px]' : 'translate-x-[0px]'} md:translate-x-[0px] md:max-w-[250px] overflow-auto`} setShowNavBar={setShowNavBar} />
      <div id="container">
        {children}
      </div>
    </div>
    </>
  )
}
