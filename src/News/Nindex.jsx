import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Card from './Card';
function Nindex(){
    const[it,setIt]=useState("");
    const[Data,setData]=useState([]);
    const[state,setState]=useState("Top Headlines");
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://newsapi.org/v2/everything?q=${state}&pageSize=42&apiKey=ba2954c5cf594456b714ba894dce1275`)
            setData(res.data.articles);
            console.log(res.data);
        }
        getData();
    },[state]);
    function handleChange(event){
        setIt(event.target.value);
    }
    function handleClick(event){
        setState(it);
        event.preventDefault();
    }
    return(
        <div>
            <nav className='Nindex-nav'>
                <h1 className='Nindex-head'>E-NEWS</h1>
                <form className="Nindex-form">
                    <input className='Nindex-input' value={it} onChange={handleChange} />
                    <button className='Nindex-btn' onClick={handleClick}>Search</button>
                </form>
                <div className='Nindex-div3'>
                    <a className='Nindex-blog'>Blogs</a>
                    <a className='Nindex-create'>Create Blog</a>
                    <p className='Nindex-logout'>Logout</p>
                </div>
            </nav>
            <h1 className='Nindex-headline'>{state}</h1>
            <div className='Nindexdiv'>
                {Data.map((x)=>{
                    return <Card 
                        id={x.id}
                        title={x.title}
                        description={x.description}
                        url={x.url}
                        image={x.urlToImage}
                        publish={x.publishedAt}
                        source={x.source.name}
                    />
                })}
            </div>
        </div>
    );
}
export default Nindex;
//f6b3ace87ee07ab01bbef5d7867bc479
//d4d1cce4b3effe1ebab001b467afb29a
//ba2954c5cf594456b714ba894dce1275