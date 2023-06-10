
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

function React1() {
  const quoteUrl="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw";
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  
  useEffect(() => {
    return () => {
      generateQuote();
    };
  },[]);

  function generateQuote(){
    let x=Math.floor((Math.random()*100));

    axios.get(quoteUrl).then((res)=>{
      setQuote(res.data.quotes[x].quote);
      setAuthor(res.data.quotes[x].author);
      console.log(res);
    });
  }

  return (
    <div className='wrap'>
      <div className='inner-wrap'>
        <h1 className='quote'>{quote}</h1>
        <h3 className='author'>-{author}</h3>
        <button onClick={generateQuote}>Click Here</button>
      </div>
    </div>
  );
}

export default React1;