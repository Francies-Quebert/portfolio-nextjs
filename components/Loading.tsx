'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageLoadingIndicator = () => {
    const router = useRouter();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const handleStart = (url: string) => {
            setLoadingProgress(95)
            if (url !== router.asPath) {
                setLoading(true)
            }
        };
        const handleComplete = (url: string) => {
            if (url === router.asPath) {
                console.log(1)
                setLoadingProgress(0);
                setLoading(false)
            }
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            setLoadingProgress(0)
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    },[router.pathname])

    return (<div className={`z-50 absolute inset-0 h-1 w-full text-white text-4xl bg-dark ${loading ? 'block' : 'bg-transparent'}`}>
        <div style={{ width: loadingProgress + '%' }} className={`transition-[width] ease-linear duration-1000 ${loading ? 'bg-primary' : 'bg-transparent'} h-1`}>
        </div>
    </div>);
};

export default PageLoadingIndicator;