import React from 'react'
import './App.css'


function Item(props) {
   
  return ( 
    <div className='list'>
        <img src={props.i.url} alt="" className='img' />
        <h1>{props.i.name}</h1>
        <h1>{props.i.age}</h1>
        <h1>{props.i.male}</h1>
    </div>
  )
}

export default Item