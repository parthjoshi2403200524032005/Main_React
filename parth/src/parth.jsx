import React, { useState } from 'react'

export const Parth = () => {
    const [parth,setparth]= useState(8)
    const [mul,setmul]= useState(0)
  return (
    <div>
        <input type="text" value={parth} />

        <button onClick={()=>setmul(mul+1)}>mul</button>
        <button onClick={(e,i)=> setparth(parth*mul)}>click</button>
    </div>
  )
}
