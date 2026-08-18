import React from 'react'
import PopularTreatment from '.././Components/HomeComponents/PopularTreatment'
import Herosection from '.././Components/HomeComponents/Herosection'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Herosection/>
      <PopularTreatment/>
    </div>
  )
}

export default Home
