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
        <div>
            <input type="text" name="url" id="url" />
            <button
                onClick={() => {
                    const url = (document.getElementById('url') as HTMLInputElement).value
                    fetchUtil(url)
                }}

            >fetch</button>
        </div>
    )
}

export default Page