import React from 'react'
import Spacer from '../spacer/page'
import CardContainer from '../component/cardcontainer/page'
import Footer from '../footer/page'
const Home = () => {
  return (
       <div  className='scroll-container mx-0 '>


<div
  className="relative flex items-center justify-evenly gap-6 p-12 mt-5 bg-cover bg-center"
  style={{
    backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK&pid=Api&P=0&h=220")',
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker overlay for better text contrast */}
  
  <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left p-6">
    <h1 className="text-3xl font-extrabold text-white">Welcome to Our Website</h1>
    <h2 className="text-xl text-gray-300 mt-2">Your gateway to amazing content</h2>
    <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300">
      Click Me
    </button>
  </div>

  <div className="relative z-10 flex-1 flex justify-center">
    <img
      src="https://tse4.mm.bing.net/th?id=OIP.Mpb2fdskLt8GwvBkrdwCRgHaHa&pid=Api&P=0&h=220"
      alt="Description"
      className="w-72 rounded-lg shadow-lg"
    />
  </div>
</div>
<br/>

<h1 className="text-4xl font-extrabold text-gray-800 text-center mt-8 mb-4">
  About
</h1>




<CardContainer/>
<Spacer/>
<Footer   />
<Spacer height='60px'   />


    
    
    
    </ div   >

    
  )
}

export default Home





