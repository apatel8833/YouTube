"use client"
import React, { useContext,useState } from 'react'
import { CentralData } from '../Allcontext/Context'
import Link from 'next/link'
import { formatDate } from '../utils/helper'

const page = () => {
    const [search, setSearch] = useContext(CentralData);
    const [nextPageToken, setNextPageToken] = useState("");
    console.log("search",search);

    return (
        <>
            <div className='searchres'>
                {
                    search.map((elm, i) => {
                        return (
                            <>
                                <Link key={elm.i} href={`/watch/${elm.id.videoId}`} >
                                    <div className='px-3 m-4 flex'>
                                        <img className='rounded-lg w-[400px] h-[210px] ' alt='thumbnail' src={elm.snippet.thumbnails.medium.url} />
                                        <ul className='flex flex-col justify-start ml-5 w-96'>
                                            <li className=' py-2 text-2xl '>{elm.snippet.title}</li>
                                            <li className='text-gray-500 text-[18px]'>{elm.snippet.channelTitle}</li>
                                            <li className='text-gray-500 text-[18px]'>100 views  {formatDate((Math.abs(new Date(elm.snippet.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0))} ago</li>
                                            <li className='text-gray-500 mt-2 text-[15px]'>{elm.snippet.description}</li>
                                        </ul>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default page