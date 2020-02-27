import React from 'react'
import loader from './loader.gif'

export default function Loader() { 
    return (
        <div className="container">
        <img src={loader} alt="" width="150"/>
    </div>
    )
}
