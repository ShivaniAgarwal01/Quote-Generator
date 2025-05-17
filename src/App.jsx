import './App.css'
import {useState} from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author , setAuthor] = useState('');

    const search = async() =>{
      try {
         const response = await fetch('https://api.api-ninjas.com/v1/quotes' , {
          headers :{
            'X-Api-Key' : 'YOUR-API-KEY'
          }
         });
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        console.log(data.quote);
      } catch (error) {
        console.log("Error in fetching quote data");
      }
    }


  return (
    <>
      <div className='main-container h-screen'>
        <div className='container flex flex-col items-center '> 
          <h1 className='text-[35px] font-semibold mt-4'>Quote of the Day!</h1>
              <div className='flex flex-col box h-[300px] w-[600px] bg-[#f17e56] mt-10 rounded-xl shadow-lg space-y-10 p-10'>
                  <div className='content items-center w-full text-[20px]'>
                    {quote ? ` "${quote}" ` : 'Click the button to get a quote.'}
                    <div className='mt-4 text-right font-semibold'>~{author}</div>
                  </div>
                  <div className='absolute mt-45 ml-120 btn-container flex items-end'>
                     <button className='bg-[#f9cfc0] btn h-10 w-10 flex items-center justify-center'
                     onClick={search}
                    >
                      <img src="next.png" alt="nextIcon" className='h-5 w-5'/>
                     </button>
                  </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
