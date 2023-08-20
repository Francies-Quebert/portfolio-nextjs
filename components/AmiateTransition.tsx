'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
function AmiateTransition({ children }: { children: React.ReactNode }) {
    // const [isPresent, safeToRemove] = usePresence()
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: '50%' }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='h-full w-full px-[2em] md:px-[4em] py-[3em] relative overflow-y-auto overflow-x-hidden'
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AmiateTransition