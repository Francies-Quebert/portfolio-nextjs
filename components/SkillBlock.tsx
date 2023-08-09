import React from 'react'

function SkillBlock({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`rounded-full border border-primary flex justify-center items-center py-2 px-4 transition-all hover:bg-primary hover:text-white cursor-pointer ${className}`}>{text}</div>
    )
}

export default SkillBlock