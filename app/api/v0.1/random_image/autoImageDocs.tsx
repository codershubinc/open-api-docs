import AccordianComp from '@/components/accordian' 
import React from 'react'

function AutoImageDocs() {
    return (
        <div className='text-white'>
            {/* write doc about how to fetch random image from api */}
            <div className='mb-4 ps-3 w-full border border-slate-800 rounded-2xl  bg-stone-900 min-h-36' >
                <p
                    className='text-slate-400 text-xl font-bold'
                >
                    1  )   Use <span className='text-red-500' >GET</span> request on this api endpoint :
                </p>
                <p
                    className='text-slate-400 text-xl font-bold'
                >
                    <span className='text-red-500' >API ENDPOINT : </span> https://api-codershubinc.vercel.app/v0.1/random_image
                </p>
            </div>
            <div className='mb-4 ps-3 w-full border border-slate-800 rounded-2xl  bg-stone-900 min-h-36' >
                <p
                    className='text-slate-400 text-xl font-bold'
                >
                    2 ) Use <span className='text-red-500' >POST</span> request on this api endpoint if you want to change image type :
                </p>
                <p
                    className='text-slate-400 text-xl font-bold'
                >
                    <span className='text-red-500' >API ENDPOINT : </span> https://api-codershubinc.vercel.app/v0.1/random_image/<span className='text-green-900'>query</span>
                </p>
                <code>
                    <p className="text-lg mb-4">
                        Query must include one of these values: <span className="text-red-500">query</span>
                    </p>
                    <div className="bg-slate-950 text-slate-400 text-xl font-bold flex min-h-32 h-max w-96 mx-auto justify-center items-center text-center rounded-lg p-4">
                        <code className="whitespace-pre-wrap text-slate-400 text-sm font-bold">
                            <p>
                                query =
                                <br />
                                {`[ 'png', 'jpg', 'jpeg', 'svg', 'auto' ]`}
                            </p>
                        </code>
                    </div>
                </code>

            </div>
            <div>
                <div>
                    <AccordianComp
                        accordionTrigger={"How to request GET in JavaScript?"}
                        accordianContent={
                            <div className='mb-4 p-4 w-full border border-slate-800 rounded-2xl bg-stone-900 min-h-36'>
                                <p className='text-slate-400 text-xl font-bold'>
                                    <span className='text-red-500'>{`const `}</span>
                                    <span className='text-green-400'>response = </span>
                                    <span className='text-red-500'>{`fetch(`}</span>
                                    <span className='text-green-400'>{`'https://api-codershubinc.vercel.app/v0.1/random_image'`}</span>
                                    <span className='text-red-500'>{`)`}</span>
                                </p>
                                <p className='text-slate-400 text-xl font-bold'>
                                    <span className='text-gray-500'>{`const `}</span>
                                    <span className='text-green-400'>data = </span>
                                    <span className='text-red-500'>{`await response.json()`}</span>
                                </p>
                                <p className='text-slate-400 text-xl font-bold'>
                                    <span>console.log(data)</span>
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>


        </div>
    )
}

export default AutoImageDocs