/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import Copy_btn from '@/components/copy_btn'
import DivUi from '@/components/divUi'
import PageUi from '@/components/pageUi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DecodeHTMLEntities from '@/utils/func/htmlDecode'
import Saavn from '@/utils/func/saavnCDN/fetchApi'
import React, { useState } from 'react'

function Page() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [link, setLink] = useState('')
    const [response, setResponse] = useState<any>(null)

    const loadSong = async () => {
        setLoading(true)
        try {
            const response = await Saavn.link(link)
            if (!response) {
                setLoading(false)
                setError('Something went wrong')
            }
            const data = await response.json()
            console.log(data)
            setResponse(data.data.data[0])
            console.log('data', data.data.data[0])

            setLoading(false)
        } catch (error) {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    if (error) {
        return (
            <PageUi className='flex flex-col justify-center items-center h-max min-h-screen bg-black'>
                <h1 className='text-3xl font-bold '>
                    {error}
                </h1>
            </PageUi>
        )
    }

    return (
        <PageUi className='flex flex-col justify-center items-center h-max min-h-screen bg-black'>

            <h1 className='text-3xl font-bold '>
                saavnCDN
            </h1>
            <form
                className='flex flex-col justify-center items-center h-max  bg-black'
                onSubmit={(e) => {
                    e.preventDefault()
                    loadSong()
                }}
            >
                <Input
                    placeholder='Enter song link'
                    type='text'
                    className='bg-slate-900 text-white'
                    onChange={(e) => setLink(e.target.value)}
                    id='link'
                />
                <Button className='bg-slate-900 text-white' type='submit'>
                    {loading ? 'Loading...' : 'Submit'}
                </Button>
            </form>
            {response &&
                <div
                    className='gap-6 flex flex-col w-full  '
                >
                    <DivUi>
                        <p className='text-xl text-slate-800 font-bold '>
                            Title
                        </p>
                        <h1 className='text-3xl font-bold '>
                            {DecodeHTMLEntities(response.name)}
                        </h1>
                        {DecodeHTMLEntities(response.name) &&
                            <Copy_btn
                                textToCopy={DecodeHTMLEntities(response.name)}
                                copyBtnText='Copy Name'
                                className=' '
                            />
                        }
                    </DivUi>
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
                        {response.image &&
                            <Copy_btn
                                textToCopy={
                                    response.image.find((item: any) => item.quality === "500x500")?.url
                                }
                                copyBtnText='Copy Image URL'
                                className=''
                            />
                        }
                    </DivUi>
                    <DivUi>
                        <p className='text-xl text-slate-800 font-bold '>Music Links</p>
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
                        <Copy_btn
                            textToCopy={response.downloadUrl.find((item: any) => item.quality === "320kbps")?.url}
                            copyBtnText='Copy Music Link 320kbps'
                            className=''
                        />
                    </DivUi>
                </div>
            }

        </PageUi>
    )
}

export default Page
