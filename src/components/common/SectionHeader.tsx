import { ArrowRight } from 'lucide-react'
import React from 'react'

interface SectionHeaderProps {
    subtitle?: string
    title: string
    buttonText?: string
}

function SectionHeader({ subtitle, title, buttonText }: SectionHeaderProps) {
    return (
        <div className='flex flex-row justify-between items-end gap-2   '>
            <div className='flex flex-col'>
                {subtitle && <p className='text-[#6A52B3] font-black text-xs md:text-lg'>{subtitle}</p>}
                <p className='text-[#4E348F] font-black text-md md:text-4xl'>{title}</p>
            </div>

            {buttonText && (
                <button className="flex flex-row items-center gap-3 md:gap-8 border border-[#4E348F] p-1 md:p-2 rounded-xs">
                    <p className='text-[#4E348F] font-bold text-xs'>{buttonText}</p>
                    <ArrowRight size={10} />
                </button>
            )}
        </div>
    )
}

export default SectionHeader