"use client"
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import axios from 'axios';
import { formatCompactNumber, formatDate } from '../utils/helper';
import Loader from './Loader';
import Link from 'next/link';



const Body = () => {
    const [first, setFirst] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [loader, setLoader] = useState(true);



    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${YOUTUBE_API}&pageToken=${nextPageToken}`);
            console.log(data.items);

            setFirst((prev) => [...prev, ...data.items]);
            setLoader(false)
            setNextPageToken(data.nextPageToken);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => {
            window.removeEventListener('scroll', infiniteScroll, true);
        }
    }, [nextPageToken]);

    const infiniteScroll = () => {
        if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
            setLoader(false)
            fetchData();
        }
    }


    return (
        <>
            <div className='body'>
                <div className='btns'>
                    <ul>
                        <li>All</li>
                        <li>News</li>
                        <li>Gaming</li>
                        <li>Bollywood</li>
                        <li>Sports</li>
                        <li>Programming</li>
                        <li>Hollywood</li>
                        <li>Bollywood</li>
                        <li>Sports</li>
                        <li>Programming</li>
                        <li>Hollywood</li>
                        <li>Programming</li>
                        <li>Hollywood</li>
                        <li>Bollywood</li>
                        <li>Sports</li>
                        <li>Programming</li>
                        <li>Hollywood</li>


                    </ul>

                </div>

                {
                    first.map((elm, i) => {
                        return (
                            <Link className='card' key={i} href={`/watch/${elm.id}`}>

                                    <img src={elm.snippet.thumbnails.standard.url} alt='image'></img>

                                    <ul className='flex justify-start items-start'>
                                        <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={elm.snippet.thumbnails.standard.url} />
                                        <div>
                                            <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{elm.snippet.title}</li>
                                            <li className='text-gray-500 text-[13px]'>{elm.snippet.channelTitle}</li>
                                            <li className='text-gray-500 text-[13px]'>{formatCompactNumber(elm.statistics.viewCount)} views  {formatDate((Math.abs(new Date(elm.snippet.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0))} ago</li>
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