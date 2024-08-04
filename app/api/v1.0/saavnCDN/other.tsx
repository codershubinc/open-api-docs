'use client'
import DivUi from '@/components/divUi'
import DecodeHTMLEntities from '@/utils/func/htmlDecode'
import React from 'react'


function Other({ response }: { response: any }) {
    return (
        <DivUi
            className='flex flex-col gap-2 w-fit '
        >
            <p
                className='text-xl text-slate-800 font-bold '
            >
                Other Info :
            </p>
            <DivUi>
                <p className='text-slate-800 text-xl '> Label: </p>
                {DecodeHTMLEntities(response.label)}
            </DivUi>
            <DivUi>
                <p className='text-slate-800 text-xl '> playCount: </p>
                {DecodeHTMLEntities(response.playCount)}
            </DivUi>
            <DivUi>
                <p className='text-slate-800 text-xl '> releaseDate: </p>
                {DecodeHTMLEntities(response.releaseDate)}
            </DivUi>
            <DivUi>
                <p className='text-slate-800 text-xl '> language: </p>
                {DecodeHTMLEntities(response.language)}
            </DivUi>
            <DivUi>
                <p className='text-slate-800 text-xl '> copyright: </p>
                {DecodeHTMLEntities(response.copyright)}
            </DivUi>
        </DivUi>
    )
}

export default Other