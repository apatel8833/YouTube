"use client"
import React, { useState, useEffect } from 'react'
import ytpremium from '@/app/assets/yt-premium.svg'
import Image from 'next/image'
import { useParams } from "next/navigation";
import likeIcon from '@/app/assets/like.svg';
import disLikeIcon from '@/app/assets/dislike.svg';
import shareIcon from '@/app/assets/share.svg';
import downloadIcon from '@/app/assets/download.svg';
import moreIcon from '@/app/assets/more.svg';

import { YOUTUBE_API, YOUTUBE_VIDEO_WATCH_API } from '@/app/utils/constants';
import axios from 'axios';
import { formatCompactNumber, formatDate } from '@/app/utils/helper';
import Link from 'next/link';


const page = () => {

    const [first, setFirst] = useState([]);
    const [title, setTitle] = useState([]);
    const [view, setView] = useState([]);
    const [videos, setVideos] = useState([]);
    const [related, setRelated] = useState([]);
    const { id } = useParams();



    const relatedData = async () => {
        try {
            const { data } = await axios.get(`${YOUTUBE_API}`)
            setRelated(data.items);
            console.log(data.items);


        } catch (error) {
            console.log(error);
        }
    }


    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${YOUTUBE_VIDEO_WATCH_API}${id}`)
            // console.log(data.items[0]);
            setFirst(data.items[0].snippet.thumbnails.maxres);
            setTitle(data.items[0].snippet);
            setView(data.items[0].statistics);
            setVideos(data.items[0]);
            console.log("videos",videos);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
        relatedData();
    }, [])


    return (
        <>
            <div className='watchvcont'>
                <div className='left'>
                    <div className='frame'>
                     <iframe
                        width="950"
                        height="500"
                        src={"https://www.youtube.com/embed/" + videos.id}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>

                        {/* <video src={`https://www.youtube.com/embed/${videos.id}`} alt="image"></video> */}
                    </div>
                    <div className='lkcmnt'>
                        <div className='p-2 m-2'>
                            <div>
                                <div className='font-medium text-[18px]'>{title.title}</div>
                                <div className='detl mt-2 flex justify-between'>
                                    <div className='flex'>
                                        <div className='flex'>
                                            <img className='rounded-full w-10 h-10' alt='thumbnail' src={first.url} />
                                            <div className='flex flex-col justify-center ml-2'>
                                                <div className='font-bold text-[16px]'>{title.channelTitle}</div>
                                                <div className='text-gray-500 text-[12px]'>{formatCompactNumber(view.viewCount)} Subscriber</div>
                                            </div>
                                        </div>
                                        <button className='subbtn bg-black rounded-full px-4 ml-2 text-white'>Subscribe</button>
                                    </div>
                                    <div className='flex'>
                                        <button className='bg-gray-100 rounded-l-full px-4 hover:bg-gray-200'><Image alt='likeBtn' className='inline-block' src={likeIcon} /> 65K</button>
                                        <button className='bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200'><Image alt='dislikeBtn' className='inline-block' src={disLikeIcon} /></button>
                                        <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><Image alt='shareBtn' className='inline-block' src={shareIcon} /> Share</button>
                                        <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><Image alt='downloadBtn' className='inline-block' src={downloadIcon} /> Download</button>
                                        <button className='bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200'><Image alt='moreBtn' className='inline-block' src={moreIcon} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <h4 className='px-3 '>Related Videos..</h4>
                    {
                        related.map((elm, i) => {
                            return (
                                <>
                                <Link key={elm.i} href={`/watch/${elm.id}`}>
                                    <div className='px-3 m-2 mt-[20px] flex'>
                                        <img className='rounded-xl w-[168px] h-[94px] ' alt='thumbnail' src={elm.snippet.thumbnails.standard.url}/>
                                        <ul className='flex flex-col justify-start ml-2 w-60'>
                                            <li className='font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{elm.snippet.title}</li>
                                            <li className='text-gray-500 text-[12px]'>{elm.snippet.channelTitle}</li>
                                            <li className='text-gray-500 text-[12px]'>{formatCompactNumber(elm.statistics.viewCount)}  {formatDate((Math.abs(new Date(elm.snippet.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0))} ago</li>
                                        </ul>
                                    </div>
                                </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default page