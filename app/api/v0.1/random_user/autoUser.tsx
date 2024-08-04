'use client'
import React, { useEffect } from 'react'

function AutoUser() {
    const findAutoRandomUser = async () => {
        const res = await fetch('https://randomuser.me/api')
        const data = await res.json()
        console.log(data)
    }
    useEffect(() => {
        findAutoRandomUser()
    } , [])
    return (
        <div onClick={findAutoRandomUser}>AutoUser</div>
    )
}

export default AutoUser