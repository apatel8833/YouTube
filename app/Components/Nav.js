"use client"
import React, { useContext,useEffect, useState } from 'react'
import Image from 'next/image'
import hamBurgerIcon from '../assets/hamburger.svg'
import youtubLogo from '../assets/youtube.svg'
import create from '../assets/create.svg'
import notification from '../assets/bell.svg'
import mike from '../assets/mike.svg'
import Sidebar from './Sidebar'
import { useRouter } from 'next/navigation'
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants'
import axios from 'axios'
import { CentralData } from '../Allcontext/Context'
import Link from 'next/link'






// import {  } from "module";

const Nav = () => {

  const [sidebar, setSidebar] = useState(false);
  const [input, setInput] = useState("");
  // const [nextPageToken, setNextPageToken] = useState("");
  const [search, setSearch] = useContext(CentralData)

  const router = useRouter();

  const formHandle = (event) => {
    event.preventDefault();
    fetchData();
  }

  const fetchData = async ()=>{
    try {
      const { data } = await axios.get(`${YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API}${input}`);
      console.log(data.items);
      // setSearch(data.items)
      setSearch(data.items);
      router.push("/SearchresCont");
      // setNextPageToken(data.nextPageToken);
      setInput("")
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(()=>{
  //   fetchData();
  // },[])

//   useEffect(() => {
//     window.addEventListener('scroll', infiniteScroll, true);
//     return () => {
//         window.removeEventListener('scroll', infiniteScroll, true);
//     }
// }, []);

// const infiniteScroll = () => {
//     if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
//         fetchData();
//     }
// }


  return (
    <>
      <div className='navbar'>
        <div className='left'>
          <Image
            src={hamBurgerIcon}
            className='svg'
            onClick={() => setSidebar(!sidebar)}
            
          />
          <Link href="/">
          <Image
          className='logo'
            src={youtubLogo}
          />
          </Link>
        </div>
        <div className='middle'>
          <form onSubmit={formHandle}>
            <input
              type='search'
              placeholder='Search'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className='search'><i className="ri-search-line"></i></div>
          </form>
          <Image
          className='svg'
            src={mike}
          />
        </div>
        <div className='right'>
          <Image
            src={create}


          />
          <Image
            src={notification}
          />
          <div className='absolute bg-red-700 text-white w-6 h-5 rounded-2xl border-2 border-white top-[9px] right-15 text-xs text-center'>9+</div>
          <div className='prf'>
            <img src='https://yt3.ggpht.com/VWNiXXcfWWfkM91CQ70NVbRWo7DG9eChKotVlVqoBHiI3Fqfg2EH18IxkB9SWRjtCH2L8UIEcA=s88-c-k-c0x00ffffff-no-rj'></img>
          </div>
        </div>
      </div>

      {
        sidebar ? <Sidebar /> : null
      }

    </>

  )
}

export default Nav