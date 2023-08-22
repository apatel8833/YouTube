import React from 'react'
import Image from 'next/image'

import homeIcon from '../assets/home.svg';
import shortsIcon from '../assets/shorts.svg';
import subscriptionsIcon from '../assets/subscriptions.svg';
import redLiveIcon from '../assets/red-live.svg';

import libraryIcon from '../assets/library.svg';
import historyIcon from '../assets/history.svg';
import yourVideosIcon from '../assets/yourVideos.svg';
import watchLaterIcon from '../assets/watchLater.svg';
import likedVideosIcon from '../assets/likedVideos.svg';
import showMoreIcon from '../assets/showMore.svg';

import trendingIcon from '../assets/trending.svg';
import shoppingIcon from '../assets/shopping.svg';
import musicIcon from '../assets/music.svg';
import moviesIcon from '../assets/movies.svg';
import liveIcon from '../assets/live.svg';
import gamingIcon from '../assets/gaming.svg';
import newsIcon from '../assets/news.svg';
import sportsIcon from '../assets/sports.svg';
import learningIcon from '../assets/learning.svg';
import fashionAndBeautyIcon from '../assets/fashionAndBeauty.svg';

import ytPremiumIcon from '../assets/yt-premium.svg';
import ytStudioIcon from '../assets/yt-studio.svg';
import ytMusicIcon from '../assets/yt-music.svg';
import ytKidsIcon from '../assets/yt-kids.svg';

import settingsIcon from '../assets/settings.svg';
import reportHistoryIcon from '../assets/reportHistory.svg';
import helpIcon from '../assets/help.svg';
import sendFeedbackIcon from '../assets/sendFeedback.svg';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='content'>
                    <ul>
                        <li>
                            <Link href="/">
                            <Image
                                src={homeIcon}
                                alt='home'
                            />Home
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={shortsIcon}
                                alt='shorts'

                            />Shorts
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={subscriptionsIcon}
                                alt='subscription'

                            />Subscriptions
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-900" />
                    <ul>
                        <li>
                        <Link href="/">
                            <Image
                                src={libraryIcon}
                                alt='library'

                            />Library
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={historyIcon}
                                alt='history'

                            />History
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={watchLaterIcon}
                                alt='watch later'

                            />Watch Later
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={likedVideosIcon}
                                alt='liked video'

                            />Liked Videos
                            </Link>
                        </li>  <li>
                        <Link href="/">
                            <Image
                                src={showMoreIcon}
                                alt='show more'

                            />Show More
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <h1 className='font-medium pt-5'>Subscriptions</h1>

                    <ul>
                        <li>
                            <Link href="/">
                            <Image
                                src={redLiveIcon}
                                alt='home'
                            />Scary Fun
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={redLiveIcon}
                                alt='shorts'

                            />Crime tak
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={showMoreIcon}
                                alt='Show more'

                            />Show More
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <h1 className='font-medium pt-5'>Explore</h1>
                    <ul>
                        <li>
                        <Link href="/">
                            <Image
                                src={trendingIcon}
                                alt='tranding'

                            />Trending
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={shoppingIcon}
                                alt='shopping'

                            />Shopping
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={musicIcon}
                                alt='music'

                            />music
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={moviesIcon}
                                alt='movies'

                            />Movies
                            </Link>
                        </li>  <li>
                        <Link href="/">
                            <Image
                                src={liveIcon}
                                alt='live'

                            />Live
                            </Link>
                        </li> <li>
                        <Link href="/">
                            <Image
                                src={gamingIcon}
                                alt='gaming'

                            />Gaming
                            </Link>
                        </li> <li>
                        <Link href="/">
                            <Image
                                src={newsIcon}
                                alt='news'

                            />News
                            </Link>
                        </li> <li>
                        <Link href="/">
                            <Image
                                src={sportsIcon}
                                alt='sports'

                            />Sports
                            </Link>
                        </li> <li>
                        <Link href="/">
                            <Image
                                src={learningIcon}
                                alt='Learning'

                            />Learning
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={fashionAndBeautyIcon}
                                alt='fashion & beauty'

                            />Fashion & Beauty
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <h1 className='font-medium pt-5'>More from Youtube</h1>
                    <ul>
                        <li>
                            <Link href="/">
                            <Image
                                src={ytPremiumIcon}
                                alt='Youtube premium'
                            />Youtube Premium
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={ytStudioIcon}
                                alt='studio'

                            />Youtube Studio 
                            </Link>
                        </li>
                        
                        <li>
                        <Link href="/">
                            <Image
                                src={ytKidsIcon}
                                alt='kids'

                            />Youtube kids
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <ul>
                        <li>
                            <Link href="/">
                            <Image
                                src={settingsIcon}
                                alt='setting'
                            />Settings
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={reportHistoryIcon}
                                alt='report history'

                            />Report History
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={helpIcon}
                                alt='help'

                            />Help
                            </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <Image
                                src={sendFeedbackIcon}
                                alt='feedback'

                            />Send Feedback
                            </Link>
                        </li>
                    </ul>



                </div>

            </div>
        </>
    )
}

export default Sidebar