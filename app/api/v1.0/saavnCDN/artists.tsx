import Copy_btn from '@/components/copy_btn'
import DivUi from '@/components/divUi'
import DecodeHTMLEntities from '@/utils/func/htmlDecode'
import React from 'react'

function Artists({ response }: { response: any }) {
    return (
        <DivUi>
            <p className='text-xl text-slate-800 font-bold '>Artists</p>
            {
                response.artists.primary.map((item: any) => {
                    return (
                        <p key={item.name} >{DecodeHTMLEntities(item.name)}</p>
                    )
                })

            }
            <Copy_btn
                textToCopy={DecodeHTMLEntities(response.artists.primary.map((item: any) => item.name).join(','))}
                copyBtnText='Copy Artist'
                className=''
            />
        </DivUi>
    )
}

export default Artists