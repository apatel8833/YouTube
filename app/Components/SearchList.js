import { useRouter } from 'next/navigation';

const SearchList = ({results,setInput,setResults}) => {
const router = useRouter();
const changeInput = (res)=>{
    setInput(res.snippet.title);
    setResults([]);
}

  return (

    <div className='searchlist absolute top-full overflow-y-auto z-10 h-52 min-w-52 border-slate-600  border-1 bg-white rounded-lg'>
        {
            results.map((res,i)=>{
                return (
                    <>
                    <h1 onClick={()=>changeInput(res)} className='hover:bg-slate-400 p-2 rounded-lg' key={i}>{res.snippet.title}</h1>
                    </>
                )
            })
        }
    </div>
  )
}

export default SearchList