import React from 'react'
import HospitalCard from '.././Components/HospitalComponents/HospitalCard'
import hospitals from '.././Components/HospitalComponents/Data/HospitalData'
import ResultList from '.././Components/HospitalComponents/ResultList'


const Hospital = () => {
  return (
    <section className='min-h-screen bg-white'>
        <ResultList/>
    </section>
  )
}

export default Hospital
