'use client'
import React, { useState } from 'react'
import DivUi from '@/components/divUi' 
import Local from '@/utils/func/localStorage' 
import { Button } from '@/components/ui/button'
import Copy_btn from '@/components/copy_btn'

function Music({ response  }: { response: any }) {

    const [autoPlayIs, setAutoPlayIs] = useState<any>(Local.get('autoPlay'))
    return (
        <DivUi>
            <p className='text-xl text-slate-800 font-bold '>Music Links</p>
            <div className='flex flex-wrap gap-2'>
                {
                    response.downloadUrl.map((item: any) => {
                        return (
                            <div key={item.url}>

                                <a
                                    className='text-slate-800 font-bold'
                                    href={item.url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {item.quality}
                                </a>

                            </div>
                        )
                    })
                }
            </div>
            <p className='text-xl text-slate-800 font-bold '> Play Audio Sample Here : </p>
            <video
                src={response.downloadUrl.find((item: any) => item.quality === "320kbps")?.url}
                className='w-72 h-10 rounded-md mx-auto'
                controls={true}
                autoPlay={autoPlayIs === 'true' ? true : false}
            >
                v
            </video>
            <Button
                className='bg-slate-900 text-white'
                onClick={() => {
                    if (Local.get('autoPlay') === 'true') {
                        Local.set('autoPlay', 'false')
                        setAutoPlayIs('false')
                    } else {
                        Local.set('autoPlay', 'true')
                        setAutoPlayIs('true')
                    }
                }}
            >
                autoplay is set to {autoPlayIs === 'true' ? 'on' : 'off'}
            </Button>
            <Copy_btn
                textToCopy={response.downloadUrl.find((item: any) => item.quality === "320kbps")?.url}
                copyBtnText='Copy Music Link 320kbps'
                className=''
            />

        </DivUi>
    )
}

export default Music