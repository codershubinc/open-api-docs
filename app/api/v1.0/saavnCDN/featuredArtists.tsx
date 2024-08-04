import Copy_btn from '@/components/copy_btn'
import DivUi from '@/components/divUi'
import DecodeHTMLEntities from '@/utils/func/htmlDecode'
import React from 'react'


function FeaturedArtists({ response }: { response: any }) {
    return (
        <div>
            {
                response.artists.featured.length > 0 &&
                <>
                    <DivUi>
                        <p className='text-xl text-slate-800 font-bold '>Featured Artist</p>
                        {
                            response.artists.featured.map((item: any) => {
                                return (
                                    <p key={item.name} >{DecodeHTMLEntities(item.name)}</p>
                                )
                            })

                        }
                        <Copy_btn
                            textToCopy={DecodeHTMLEntities(response.artists.featured.map((item: any) => item.name).join(','))}
                            copyBtnText='Copy Featured Artist'
                            className=''
                        />
                    </DivUi>
                </>
            }
        </div>
    )
}

export default FeaturedArtists