import React from 'react'
import Item from './Item'


function List() {
    const list = [
        {url:'https://f.vividscreen.info/soft/8c64d37deea93cca710ffa9b4e7f891a/Dodge-Challenger-SRT8-2880x1920.jpg',name:"хонда",age:2022,male:'900км'},
        {url:'https://sportishka.com/uploads/posts/2021-12/1639454381_1-sportishka-com-p-krutie-retro-avtomobili-sport-krasivo-foto-1.jpg',name:"старушка",age:1958,male:'100км'},
        {url:'https://mobimg.b-cdn.net/v3/fetch/32/321ce21f8fe379bec0c67149c412be6d.jpeg?w=1470&r=0.5625',name:"мазырати",age:2017,male:'400км'}
    ]

  return (
    <div>
        
        {list.map((item,i)=>{
            return <Item  key={i} i={item}/>
        })}

    </div>
  )
}

export default List