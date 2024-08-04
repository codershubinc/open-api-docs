'use client'
import { cn } from '@/lib/utils'
import React from 'react'

function PageUi({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <main
            className={cn(`flex w-svw h-max min-h-full bg-black text-white`, className)}
        >
            {children}
        </main>
    )
}

export default PageUi