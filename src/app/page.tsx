// 'use client';

// import { useFetchData } from '@/component/api/apiCall';
// import MemoMain from '@/component/memo/memo';
// import { decrement, increment, toggle } from '@/redux/apiSlice';
// import Image from 'next/image';
// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { debounce } from "lodash";
// import HocMain from '@/component/HOC/hoc';

// const page = () => {
//   const value = useSelector((state: any) => state.inc.value)
//   const data = useSelector((state: any) => state.inc.data)
//   const post = useSelector((state: any) => state.inc.posts)
//   const toggleState = useSelector((state: any) => state.inc.toggle)
//   const blogData = useSelector((state: any) => state.inc.blogData)

//   useFetchData();

//   const dispatch = useDispatch()

//   const handleInc = () => {
//     dispatch(increment())
//   }

//   const handleDec = () => {
//     dispatch(decrement())
//   }

//   console.log("blogData", blogData)


//   const hanleClick = () => {
//     dispatch(toggle())
//   }



//   const [name, setName] = useState("")
//   const refRef = useRef<HTMLInputElement>(null)


//   const handleSub = () => {
//     if (refRef.current) {
//       refRef.current.style.color = "red";
//       refRef.current.value = 'ssff'
//     }
//   }


//   const [query, setQuery] = useState("");

//   // const handleSearch = debounce((value) => {
//   //   console.log("Searching for:", value);
//   // }, 500); // Executes after 500ms delay

//   const handleSearch = debounce((value: any) => {
//     console.log("Searching for:", value);
//   }, 1000)


//   const [add, setAdd] = useState(0)

//   const handleClikcs = () => {
//     setAdd(add + 1)
//   }


//   // const handleClikcs = useCallback(
//   //   () => {
//   //     console.log("ccc")
//   //   }, [])

//   // console.log("query", query)













//   return (
//     <div>
//       <button onClick={handleInc}>Add me</button> <br></br>
//       {value}<br></br>
//       <button onClick={handleDec} >Remove me</button> <br></br>

//       <br></br>
//       add: {add}
//       {/* <MemoMain handleClikcs={handleClikcs} add={add}/> */}
//       <button onClick={hanleClick} className='bg-blue-500 p-4'>Click me</button>
//       {toggleState && <h1>Toggle</h1>}
//       <ul>
//         {data?.map((item: any) => (
//           <li> {item?.name}</li>
//         ))}
//       </ul>
//       {/* 
//       {post.map((post: any) => (
//         <li key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </li>
//       ))} */}

//       {/* {blogData?.map((item:any)=>(
//         <div>
//           <h1>{item.title}</h1>
//           <img src={item.thumbnailUrl} alt={item.title} />
//         </div>
//       ))} */}


//       <input ref={refRef} type='text' value={name} placeholder='Enter your name' className='border-2 border-gray-500' onChange={(e) => setName(e.target.value)} />

//       <button onClick={handleSub}>Submit</button>
//       <br></br>

//       {query}
//       <br></br>

//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => {
//           setQuery(e.target.value);
//           handleSearch(e.target.value);
//         }}
//       />






















//     </div>
//   )
// }

// export default page






import React from 'react'

const page = () => {
  const data = 10 / 20;
  console.log("xx", typeof (data))
  console.log("xx1", data)

  var data1 = 10;

  const data3 = --data1

  const data2 = data1-- - 5


  console.log("z2", data2)
  console.log("z3", data3)

  const x = 10;
  const y = 11

  const z = (x >= y)

  console.log("z45", z)

  console.log("hello" + " all")

  var rain = true


  if (rain) {
    console.log("take an umbrella")
  } else {
    console.log("No need to take an umbrella")
  }


  const ya = rain ? 'take umbrella' : 'no need'

  console.log("ya", ya)

  switch (rain) {
    case true:
      console.log("take umbrella12")
      break;
   
    default:
      console.log("sdfe")
  }

  var cir = 10;

  switch (cir) {
    case 10:
      console.log("wwefea")
      break;
    case 12:
      console.log("eeffewr")
      break;
    default:
      console.log("aaaweaewqe")
  }



  // while(cir <= 15){
  //   console.log("cir1", cir)
  //   cir++
  // }

  do {
    console.log("cir1", cir)
    cir++
  } while (cir <= 9)


  for (let i = cir; cir <= 15; cir++) {
    console.log("====", cir)
  }


  function add(a:any, b:any) {
    console.log(a + b)
  }

  console.log("asdada", add(100, 20))


  function sub() {
    var a = 20, b = 40

    var x = b - a
    return x
  }

  sub()

  console.log("====11", sub())


  var name = function (a:any, b:any) {
    var total = 0 ;
    return total = a + b
  }

  const f = name(20, 70)
  console.log("f", f)


  const g =[10, 2, 3, 4]

  console.log("gggg", g[3])

  for(let data of g){
    console.log("data",data)
  }

  g.forEach((val,index,array)=> {
console.log("val", val + index + array.toString())
  })

  console.log("---", g.indexOf(10))

  const gq =[10, 2, 3, 4]


  const q = gq.findIndex((i)=> {
    return i > 2
  })

  console.log("111", q)

  const r = g.filter((i)=> {
    return i > 2
  })

  console.log("rr", r)

  const p = r.sort()
  console.log("p", p)

  const b = g.push(199)

  console.log("vv", b)
  console.log("vg", g)

  const yi =[12, 24 , 19, 10]

  const h = yi.reduce((acc, current)=>{
return acc + current
  }, 0)


  console.log("kk", h)



const uii = ["data1", "data2", "data3", "data4"]

const pi ="df fsdf f af afwefw"


console.log("=====", pi.replace("df","11" ))
console.log("=====", pi.search("af" ))
console.log("=====", pi.split("," ))
console.log("=====", uii.join())

const dates = new Date()
console.log("======",dates.toLocaleDateString() )


const func1 = ()=>{
  let data = 10;

  const func2 = ()=>{
    let data2 = 30;
    console.log("da11ta", data + data2)

    return data + data2
  }
  return func2()
}

func1()

console.log("==7==", func1())




const func10 = () => {
  let data = 100;

  return () => {
    let data2 = 30;
    console.log("da11ta", data + data2);
    return data + data2;
  };
};

const closureFunc = func10(); 

console.log("==7=sdd=", closureFunc()); // Calls the closure function



const func100 = ()=>{
  let data = 100;

  const func20 = ()=>{
    let data2 = 30;
    console.log("da11ta", data + data2)

    return data + data2
  }

  return func20;
}

const closureFuncs = func100(); 

console.log("==7=sdd=", closureFuncs)


const data0 = '43242'

const k = ()=>{
setTimeout(()=>{
  console.log("fwerf", data0)
}, 2000)
}

console.log("[[[", k)

  return (
    <div>page








    </div>
  )
}

export default page