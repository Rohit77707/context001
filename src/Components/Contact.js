import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar'
import './Common.css'

const Contact = () => {

    const isLight = useSelector((state)=>state.isLight)

    return (
        <>
            <div className={isLight?'light':'dark'}>
                <Navbar/>
                <h1>You can mail me help@geekster.in</h1>
            </div>
        </>
    )
}

export default Contact