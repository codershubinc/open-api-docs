'use client'
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

function Copy_btn({ textToCopy, copyBtnText, className }: { textToCopy: string, copyBtnText?: string, className?: string }) {
    const [copied, setCopied] = useState(false)

    const copyText = async () => {
        try {
            if (!textToCopy) {
                alert('No text to copy')
                return
            }
            await navigator.clipboard.writeText(textToCopy);
            console.log('Copied text to clipboard:', textToCopy);

            setCopied(true);
        } catch (error) {
            console.error('Failed to copy text:', error);
            alert('Copying to clipboard is not supported on this device/browser. Copy it manually' + '\n=> ' + textToCopy);
        }
    }

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [copied])

    return (
        <div
            className={cn('bg-slate-900 text-white absolute right-[10px] h-max w-20 border border-slate-700 border-solid rounded-lg', className)}
        >
            <button
                onClick={copyText}
                type='button'
            >
                {copied ? "Copied" : copyBtnText || "Copy"}
            </button>
        </div>
    )
}

export default Copy_btn
