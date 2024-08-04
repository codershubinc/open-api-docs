/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Copy_btn from '@/components/copy_btn'
import React, { useEffect, useState } from 'react'
import AutoImageDocs from './autoImageDocs'
import { Button } from '@/components/ui/button'

interface Props {
    query?: string
}

interface imageDataInterface {
    data: {
        imageUrl: string
        imageType: string
    }        
}

function AutoImage({ query }: Props) {
    const [imageData, setImageData] = useState<imageDataInterface>()
    const [loading, setLoading] = useState(true)
    const [loadingImage, setLoadingImage] = useState(true)

    const fetchImage = async () => {
        const res = await fetch(`https://api-codershubinc.vercel.app/v0.1/random_image/${query || ''}`)
        const data = await res.json()
        setImageData(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-900 text-white p-4">
            {loading ? (
                <div className="flex flex-col justify-center items-center my-4">
                    <p className="text-gray-400 mb-2">Loading...</p>
                    <div className="w-6 h-6 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
                </div>
            ) : (
                imageData && (
                    <div className="flex flex-col items-center">
                        <div className="relative mb-4">
                            {loadingImage && (
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-75">
                                    <p className="text-gray-400 mb-2">Loading Image...</p>
                                    <div className="w-6 h-6 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
                                </div>
                            )}
                            <img
                                src={imageData.data.imageUrl}
                                alt={imageData.data.imageType}
                                onLoad={() => setLoadingImage(false)}
                                width={300}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <p className="text-gray-300 mb-2">
                            Image Type: <span className="text-white">{imageData.data.imageType}</span>
                        </p>
                        <div className="mb-4 text-left">
                            <p className="text-gray-300 mb-2">Image URL:</p>
                            <p className="break-all text-gray-400">{imageData.data.imageUrl}</p>
                            <Copy_btn
                                textToCopy={String(imageData.data.imageUrl)}
                                copyBtnText="Copy Image URL"
                            />
                        </div>
                    </div>
                )
            )}
            <Button
                onClick={() => {
                    setLoading(true)
                    fetchImage()
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow fixed bottom-4"
                disabled={loading}
                aria-busy={loading}
                variant="secondary"
            >
                {loading ? 'Loading...' : 'Refresh'}
            </Button>
            <div className="mt-8 w-full">
                <AutoImageDocs />
            </div>
        </div>
    )
}

export default AutoImage
