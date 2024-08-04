/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import Copy_btn from '@/components/copy_btn'
import DivUi from '@/components/divUi'
import React from 'react'


function Image({ response }: { response: any }) {
    return (
        <DivUi>
            <p className='text-xl text-slate-800 font-bold '>Image</p>
            {response.image &&
                response.image.map((item: any) => {
                    if (item.quality === "50x50") {
                        return <img
                            key={item.url}
                            src={item.url}
                            className='w-10 h-10 rounded-md'
                        />
                    }
                })
            }
            <div className='flex flex-wrap gap-2'>
                {
                    response.image &&
                    response.image.map((item: any) => {
                        return (
                            <a
                                href={item.url}
                                target='_blank'
                                key={item.url}
                                className='text-slate-800 font-bold'
                            >
                                {item.quality}
                            </a>
                        )
                    })
                }
            </div>
            {response.image &&
                <Copy_btn
                    textToCopy={
                        response.image.find((item: any) => item.quality === "500x500")?.url
                    }
                    copyBtnText='Copy Image URL 500x500'
                    className=''
                />
            }
        </DivUi>
    )
}

export default Image