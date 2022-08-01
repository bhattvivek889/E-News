import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Card from './Card';
function Nindex(){
    const[it,setIt]=useState("");
    const[Data,setData]=useState([]);
    const[state,setState]=useState("Trending");
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://newsapi.org/v2/everything?q=${state}&pageSize=54&apiKey=ba2954c5cf594456b714ba894dce1275`)
            setData(res.data.articles);
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
    function handleit(event){
        setState(event.target.value);
    }
    return(
        <div>
            <nav className='Nindex-nav'>
                <h1 className='Nindex-head'><a className='Nindex-a' href='/'>E-NEWS</a></h1>
                <select className='select' onChange={handleit} >
                    <option className='option' selected disabled>Categories</option>
                    <option className='option' value="Bollywood">Bollywood</option>
                    <option className='option' value="Science">Science</option>
                    <option className='option' value="Engineering">Engineering</option>
                    <option className='option' value="Cars">Cars</option>
                    <option className='option' value="Animals">Animals</option>
                </select>
                <form className="Nindex-form">
                    <input className='Nindex-input' value={it} onChange={handleChange} />
                    <button className='Nindex-btn' onClick={handleClick}>Search</button>
                </form>
            </nav>
            <h1 className='Nindex-headline'>{state}</h1>
                <div className='Nindexdiv'>
                    {Data.map((x)=>{
                        return <Card 
                            id={x.source.id}
                            title={x.title}
                            description={x.description}
                            url={x.url}
                            image={x.urlToImage}
                            publish={x.publishedAt}
                            source={x.source.name}
                        />
                    })}
                </div>
                <p className='Nindex-footer'>Made with &#10084;&#65039; by Vivek Bhatt</p>
        </div>
    );
}
export default Nindex;