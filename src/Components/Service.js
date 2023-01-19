import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar'
import './Common.css'

const Service = () => {


  const isLight = useSelector((state)=>state.isLight)

  return (
    <>
      <div className={isLight?'light':'dark'}>
        <Navbar/>
        <h1>Our service are not available</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</div>
      </div>
    </>
  )
}

export default Service