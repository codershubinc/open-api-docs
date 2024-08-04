'use client'
import { cn } from '@/lib/utils'
import React from 'react'

function DivUi({ children , className }: { children: React.ReactNode , className?: string }) {
    return (
        <div
            className={cn('flex flex-col text-left h-max w-[95%] overflow-hidden border border-slate-700 border-solid p-1 rounded-lg bg-black mx-auto', className)}
        >
            {children}
        </div>
    )
}

export default DivUi