// import React from 'react'
// import { memo } from 'react'

// const MemoMain = ({handleClikcs, add}:any) => {
//     console.log("memmooo")
//   return (
//     <div>
//         <button onClick={handleClikcs}>cliccccc</button>
//     </div>
//   )
// }

// export default memo(MemoMain)

"use client"

import React, { useState } from 'react'
import HocMain from '../HOC/hoc'

const MemoMain = ({first, handleClick}:any) => {
  // const [first, setfirst] = useState(0)

  // const handleClick = ()=>{
  //   setfirst(first+1)
  // }
  return (
    <div>mkk
{first}<br></br>
      <button onClick={handleClick}>clicke me!!!</button>

    </div>
  )
}

export default HocMain(MemoMain)