'use client'
import React, { useEffect } from 'react'

function Page() {
    const fetchUtil = async (link: string) => {
        const result = await fetch(link)
        const data = await result.json()
        console.log('result', data);
    }
    useEffect(() => {
        fetchUtil('https://test-backend-0.vercel.app/')
    }, [])
    return (
        <div>page</div>
    )
}

export default Page