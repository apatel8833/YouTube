"use client"
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants';
import axios from 'axios';
import { formatCompactNumber, formatDate } from '../utils/helper';
import Loader from './Loader';
import Link from 'next/link';
import Image from 'next/image';



const Body = () => {
    const [first, setFirst] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [loader, setLoader] = useState(true);
    const [select, setSelect] = useState('')




    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API}&q=Songs`);
            console.log("news", data.items);

            setFirst((prev) => [...prev, ...data.items]);
            setLoader(false)
            setNextPageToken(data.nextPageToken);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    })

    const infiniteScroll = () => {
        if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
            setLoader(false)
            fetchData();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => {
            window.removeEventListener('scroll', infiniteScroll, true);
        }
    }, [nextPageToken, infiniteScroll]);









    return (
        <>
            <div className='body'>
                <div className='btns'>
                    <ul>
                        <Link href="/"><button value="All" >All</button></Link>
                        <Link href="/News"> <li>News</li></Link>
                        <Link href="/Gaming"><li>Gaming</li></Link>
                        <Link href="/Bollywood"> <li>Bollywood</li></Link>
                        <Link href="/Holywood"><li>Hollywood</li></Link>
                        <Link href="/Programming"><li>Programming</li></Link>
                        <Link href="/Cricket"> <li>Cricket</li></Link>
                        <Link href="/JavaScript"><li>JavaScript</li></Link>
                        <Link href="/React"> <li>React</li></Link>
                        <Link href="/Songs"><li>Songs</li></Link>
                        <Link href="/Comedy"><li>Comedy</li></Link>
                        <Link href="/Isro"> <li>Isro</li></Link>
                        <Link href="/Sports"><li>Sports</li></Link>
                        <Link href="/Trending"><li>Trending</li></Link>
                        <Link href="/Shoping"><li>Shoping</li></Link>
                    </ul>

                </div>

                {
                    first.map((elm, i) => {
                        return (
                            <Link className='card' key={i} href="#">

                                <Image
                                    src={elm?.snippet?.thumbnails?.standard?.url}
                                    alt='image'
                                    height={100}
                                    width={100}
                                    className='img'
                                />

                                <ul className='flex justify-start items-start'>
                                    <Image
                                        src={elm?.snippet?.thumbnails?.standard?.url}
                                        className='rounded-full w-7 h-7 mt-2 mr-2'
                                        alt='thumbnail'
                                        height={100}
                                        width={100}

                                    />
                                    <div>
                                        <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{elm.snippet.title}</li>
                                        <li className='text-gray-500 text-[13px]'>{elm.snippet.channelTitle}</li>
                                        {/* <li className='text-gray-500 text-[13px]'>{formatCompactNumber(elm.statistics.viewCount)} views  {formatDate((Math.abs(new Date(elm.snippet.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0))} ago</li> */}
                                    </div>
                                </ul>
                                {/* <div className='cardDetail'>
                                    <img src=''></img>
                                    <div className='right'>
                                        <h5>kapil sharma show</h5>
                                        <small>Sony live App..</small>
                                    </div> */}
                                {/* </div> */}
                            </Link>

                        )
                    })
                }
                <Loader />


            </div>

        </>
    )
}

export default Body